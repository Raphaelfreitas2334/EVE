import { useEffect, useMemo, useState } from "react";

import { mockClasses } from "../data/mockClasses";

const useClasses = () => {

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
    // Dados Filtrados
    // ============================

    const filteredClasses = useMemo(() => {

        return mockClasses.filter((item) => {

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
    // Sempre volta para página 1
    // ao alterar filtros
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

    const totalItems = filteredClasses.length;

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

    const paginatedClasses = useMemo(() => {

        const start = (currentPage - 1) * pageSize;

        const end = start + pageSize;

        return filteredClasses.slice(start, end);

    }, [

        filteredClasses,
        currentPage,
        pageSize,

    ]);

    return {

        filters: {

            search,
            course,
            period,
            status,

        },

        filteredClasses,

        table: {

            rows: paginatedClasses,

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

export default useClasses;