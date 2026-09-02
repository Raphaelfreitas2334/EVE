import { useEffect, useMemo, useState } from "react";

import { mockSubjects } from "../data/mockSubjects";

const useSubjects = () => {

    // ============================
    // Filtros
    // ============================

    const [search, setSearch] = useState("");

    const [course, setCourse] = useState("");

    const [period, setPeriod] = useState("");

    const [status, setStatus] = useState("");

    // ============================
    // Paginação
    // ============================

    const [currentPage, setCurrentPage] = useState(1);

    const [pageSize, setPageSize] = useState(10);

    // ============================
    // Opções dos filtros
    // ============================

    const courseOptions = useMemo(() => {

        return [...new Set(mockSubjects.map(item => item.course))];

    }, []);

    const periodOptions = useMemo(() => {

        return [...new Set(mockSubjects.map(item => item.period))];

    }, []);

    const statusOptions = useMemo(() => {

        return [...new Set(mockSubjects.map(item => item.status))];

    }, []);

    // ============================
    // Dados filtrados
    // ============================

    const filteredSubjects = useMemo(() => {

        return mockSubjects.filter(item => {

            const matchesSearch =
                item.name
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCourse =
                !course || item.course === course;

            const matchesPeriod =
                !period || item.period === period;

            const matchesStatus =
                !status || item.status === status;

            return (

                matchesSearch &&
                matchesCourse &&
                matchesPeriod &&
                matchesStatus

            );

        });

    }, [

        search,
        course,
        period,
        status,

    ]);

    // ============================
    // Reinicia paginação
    // ============================

    useEffect(() => {

        setCurrentPage(1);

    }, [

        search,
        course,
        period,
        status,

    ]);

    // ============================
    // Paginação
    // ============================

    const totalItems = filteredSubjects.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalItems / pageSize)
    );

    const startItem =
        totalItems === 0
            ? 0
            : (currentPage - 1) * pageSize + 1;

    const endItem = Math.min(
        currentPage * pageSize,
        totalItems
    );

    const hasPrevious = currentPage > 1;

    const hasNext = currentPage < totalPages;

    const paginatedSubjects = useMemo(() => {

        const start = (currentPage - 1) * pageSize;

        return filteredSubjects.slice(
            start,
            start + pageSize
        );

    }, [

        filteredSubjects,
        currentPage,
        pageSize,

    ]);

    return {

        filters: {

            search,
            course,
            period,
            status,

            courseOptions,
            periodOptions,
            statusOptions,

        },

        filteredSubjects,

        table: {

            rows: paginatedSubjects,

            currentPage,

            totalPages,

            totalItems,

            pageSize,

            startItem,

            endItem,

            hasPrevious,

            hasNext,

            setCurrentPage,

            setPageSize: (size: number) => {

                setPageSize(size);

                setCurrentPage(1);

            },

        },

        setSearch,

        setCourse,

        setPeriod,

        setStatus,

    };

};

export default useSubjects;