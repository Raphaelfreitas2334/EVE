import { useMemo, useState } from "react";

import {
    students,
} from "../data/students";

const PAGE_SIZE = 5;

const PERIOD_ORDER = [
    "Manhã",
    "Tarde",
    "Noite",
];

const useStudents = () => {
    // =========================================================
    // FILTROS
    // =========================================================

    const [course, setCourse] = useState("");
    const [classroom, setClassroom] = useState("");
    const [year, setYear] = useState("");
    const [bimester, setBimester] = useState("");
    const [period, setPeriod] = useState("");

    // =========================================================
    // PAGINAÇÃO
    // =========================================================

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZE);

    // =========================================================
    // OPÇÕES DOS FILTROS
    // =========================================================

    const courseOptions = useMemo(() => {
        return Array.from(
            new Set(
                students.map((student) => student.course),
            ),
        ).sort();
    }, []);

    const classroomOptions = useMemo(() => {
        return Array.from(
            new Set(
                students.map((student) => student.classroom),
            ),
        ).sort();
    }, []);

    const yearOptions = useMemo(() => {
        return Array.from(
            new Set(
                students.map((student) => student.year),
            ),
        )
            .sort((a, b) => b - a)
            .map(String);
    }, []);

    const bimesterOptions = useMemo(() => {
        return Array.from(
            new Set(
                students.map((student) => student.bimester),
            ),
        )
            .sort((a, b) => a - b)
            .map(String);
    }, []);

    const periodOptions = useMemo(() => {
        const availablePeriods = new Set(
            students.map((student) => student.period),
        );

        return PERIOD_ORDER.filter((item) =>
            availablePeriods.has(item),
        );
    }, []);

    // =========================================================
    // FILTRAGEM
    // =========================================================

    const filteredStudents = useMemo(() => {
        return students.filter((student) => {
            const matchesCourse =
                !course ||
                student.course === course;

            const matchesClassroom =
                !classroom ||
                student.classroom === classroom;

            const matchesYear =
                !year ||
                String(student.year) === year;

            const matchesBimester =
                !bimester ||
                String(student.bimester) === bimester;

            const matchesPeriod =
                !period ||
                student.period === period;

            return (
                matchesCourse &&
                matchesClassroom &&
                matchesYear &&
                matchesBimester &&
                matchesPeriod
            );
        });
    }, [
        course,
        classroom,
        year,
        bimester,
        period,
    ]);

    // =========================================================
    // ESTATÍSTICAS
    // =========================================================

    const stats = useMemo(() => {
        const totalStudents = filteredStudents.length;

        const activeStudents = filteredStudents.filter(
            (student) => student.status === "Ativo",
        ).length;

        const studentsInFollowUp = filteredStudents.filter(
            (student) => student.status === "Acompanhamento",
        ).length;

        const studentsAtRisk = filteredStudents.filter(
            (student) => student.status === "Em risco",
        ).length;

        const currentDate = new Date();

        const newStudents = filteredStudents.filter((student) => {
            if (!student.enrollmentDate) {
                return false;
            }

            const enrollmentDate = new Date(
                `${student.enrollmentDate}T00:00:00`,
            );

            return (
                enrollmentDate.getMonth() === currentDate.getMonth() &&
                enrollmentDate.getFullYear() === currentDate.getFullYear()
            );
        }).length;

        return {
            totalStudents,
            activeStudents,
            studentsInFollowUp,
            studentsAtRisk,
            newStudents,
            currentMonth: currentDate.toLocaleDateString("pt-BR", {
                month: "long",
            }),
        };
    }, [filteredStudents]);

    // =========================================================
    // PAGINAÇÃO
    // =========================================================

    const totalItems = filteredStudents.length;

    const totalPages = Math.max(
        1,
        Math.ceil(totalItems / pageSize),
    );

    const safeCurrentPage = Math.min(
        currentPage,
        totalPages,
    );

    const startIndex =
        (safeCurrentPage - 1) * pageSize;

    const endIndex =
        startIndex + pageSize;

    const rows = filteredStudents.slice(
        startIndex,
        endIndex,
    );

    // =========================================================
    // PAGINAÇÃO — CONTROLE
    // =========================================================

    const handleSetCurrentPage = (page: number) => {
        setCurrentPage(
            Math.min(
                Math.max(page, 1),
                totalPages,
            ),
        );
    };

    const handleSetPageSize = (size: number) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    // =========================================================
    // LIMPAR FILTROS
    // =========================================================

    const clearFilters = () => {
        setCourse("");
        setClassroom("");
        setYear("");
        setBimester("");
        setPeriod("");

        setCurrentPage(1);
    };

    // =========================================================
    // RETORNO
    // =========================================================

    return {
        filters: {
            course,
            classroom,
            year,
            bimester,
            period,

            courseOptions,
            classroomOptions,
            yearOptions,
            bimesterOptions,
            periodOptions,
        },

        stats,

        filteredStudents,

        table: {
            rows,
            currentPage: safeCurrentPage,
            totalPages,
            totalItems,
            pageSize,

            startItem:
                totalItems === 0
                    ? 0
                    : startIndex + 1,

            endItem: Math.min(
                endIndex,
                totalItems,
            ),

            hasPrevious:
                safeCurrentPage > 1,

            hasNext:
                safeCurrentPage < totalPages,

            setCurrentPage:
                handleSetCurrentPage,

            setPageSize:
                handleSetPageSize,
        },

        setCourse: (value: string) => {
            setCourse(value);
            setCurrentPage(1);
        },

        setClassroom: (value: string) => {
            setClassroom(value);
            setCurrentPage(1);
        },

        setYear: (value: string) => {
            setYear(value);
            setCurrentPage(1);
        },

        setBimester: (value: string) => {
            setBimester(value);
            setCurrentPage(1);
        },

        setPeriod: (value: string) => {
            setPeriod(value);
            setCurrentPage(1);
        },

        clearFilters,
    };
};

export default useStudents;