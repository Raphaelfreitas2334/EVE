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
    // Opções dos filtros
    // ============================

    const courseOptions = useMemo(() => {

        return Array.from(
            new Set(
                mockClasses.map(
                    (item) => item.course
                )
            )
        ).sort();

    }, []);

    const periodOptions = useMemo(() => {

        return Array.from(
            new Set(
                mockClasses.map(
                    (item) => item.period
                )
            )
        ).sort();

    }, []);

    const statusOptions = useMemo(() => {

        return Array.from(
            new Set(
                mockClasses.map(
                    (item) => item.status
                )
            )
        ).sort();

    }, []);

    // ============================
    // Dados filtrados
    // ============================

    const filteredClasses = useMemo(() => {

        return mockClasses.filter((item) => {

            const normalizedSearch =
                search.trim().toLowerCase();

            const matchesSearch =
                normalizedSearch === "" ||
                item.name
                    .toLowerCase()
                    .includes(normalizedSearch);

            const matchesCourse =
                !course ||
                item.course === course;

            const matchesPeriod =
                !period ||
                item.period === period;

            const matchesStatus =
                !status ||
                item.status === status;

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
    // Reset da paginação
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

    const totalItems =
        filteredClasses.length;

    const totalPages = Math.max(
        1,
        Math.ceil(
            totalItems / pageSize
        )
    );

    const startItem =
        totalItems === 0
            ? 0
            : (currentPage - 1) * pageSize + 1;

    const endItem = Math.min(
        currentPage * pageSize,
        totalItems
    );

    const hasPrevious =
        currentPage > 1;

    const hasNext =
        currentPage < totalPages;

    const paginatedClasses = useMemo(() => {

        const start =
            (currentPage - 1) * pageSize;

        const end =
            start + pageSize;

        return filteredClasses.slice(
            start,
            end
        );

    }, [
        filteredClasses,
        currentPage,
        pageSize,
    ]);

    // ============================
    // Limpar filtros
    // ============================

    const clearFilters = () => {

        setSearch("");
        setCourse("");
        setPeriod("");
        setStatus("");

        setCurrentPage(1);

    };

    // ============================
    // Retorno
    // ============================

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

        clearFilters,

    };

};

export default useClasses;