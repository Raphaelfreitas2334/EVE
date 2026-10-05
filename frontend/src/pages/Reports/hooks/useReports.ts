import { useEffect, useMemo, useState } from "react";
import {
    mockReports,
    type ReportModel,
} from "../data/mockReports";

const calculateAverage = (values: number[]): number => {
    if (values.length === 0) {
        return 0;
    }

    const total = values.reduce(
        (sum, value) => sum + value,
        0
    );

    return total / values.length;
};

const useReports = () => {
    // =========================================================
    // FILTROS
    // =========================================================

    const [search, setSearch] = useState("");
    const [course, setCourse] = useState("");
    const [period, setPeriod] = useState("");
    const [classroom, setClassroom] = useState("");
    const [status, setStatus] = useState("");

    // =========================================================
    // PAGINAÇÃO
    // =========================================================

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // =========================================================
    // OPÇÕES DOS FILTROS
    // =========================================================

    const courseOptions = useMemo(() => {
        return Array.from(
            new Set(mockReports.map((report) => report.course))
        ).sort();
    }, []);

    const periodOptions = useMemo(() => {
        return Array.from(
            new Set(mockReports.map((report) => report.period))
        );
    }, []);

    const classroomOptions = useMemo(() => {
        return Array.from(
            new Set(mockReports.map((report) => report.classroom))
        ).sort();
    }, []);

    const statusOptions = useMemo(() => {
        return Array.from(
            new Set(mockReports.map((report) => report.status))
        );
    }, []);

    // =========================================================
    // FILTRAGEM
    // =========================================================

    const filteredReports = useMemo(() => {
        const normalizedSearch = search
            .trim()
            .toLowerCase();

        return mockReports.filter((report: ReportModel) => {
            const matchesSearch =
                normalizedSearch === "" ||
                report.name
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                report.course
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                report.classroom
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                report.teacher
                    .toLowerCase()
                    .includes(normalizedSearch) ||
                report.subject
                    .toLowerCase()
                    .includes(normalizedSearch);

            const matchesCourse =
                course === "" ||
                report.course === course;

            const matchesPeriod =
                period === "" ||
                report.period === period;

            const matchesClassroom =
                classroom === "" ||
                report.classroom === classroom;

            const matchesStatus =
                status === "" ||
                report.status === status;

            return (
                matchesSearch &&
                matchesCourse &&
                matchesPeriod &&
                matchesClassroom &&
                matchesStatus
            );
        });
    }, [
        search,
        course,
        period,
        classroom,
        status,
    ]);

    // =========================================================
    // RESET DA PAGINAÇÃO QUANDO OS FILTROS MUDAM
    // =========================================================

    useEffect(() => {
        setCurrentPage(1);
    }, [
        search,
        course,
        period,
        classroom,
        status,
    ]);

    // =========================================================
    // ESTATÍSTICAS
    // =========================================================

    const stats = useMemo(() => {
        const totalStudents =
            filteredReports.length;

        const averageGrade =
            calculateAverage(
                filteredReports.map(
                    (report) => report.average
                )
            );

        const approvedStudents =
            filteredReports.filter(
                (report) =>
                    report.average >= 6
            ).length;

        const recoveryStudents =
            filteredReports.filter(
                (report) =>
                    report.status === "Recuperação"
            ).length;

        const highestGrade =
            filteredReports.length > 0
                ? Math.max(
                      ...filteredReports.map(
                          (report) =>
                              report.average
                      )
                  )
                : 0;

        return {
            totalStudents,
            averageGrade,
            approvedStudents,
            recoveryStudents,
            highestGrade,
        };
    }, [filteredReports]);

    // =========================================================
    // MÉDIA POR TURMA
    // =========================================================

    const trend = useMemo(() => {
        const classroomMap =
            new Map<string, ReportModel[]>();

        filteredReports.forEach((report) => {
            const current =
                classroomMap.get(
                    report.classroom
                ) ?? [];

            current.push(report);

            classroomMap.set(
                report.classroom,
                current
            );
        });

        return Array.from(
            classroomMap.entries()
        )
            .map(
                ([classroomName, reports]) => ({
                    label: classroomName,
                    value: Number(
                        calculateAverage(
                            reports.map(
                                (report) =>
                                    report.average
                            )
                        ).toFixed(2)
                    ),
                })
            )
            .sort(
                (a, b) =>
                    b.value - a.value
            );
    }, [filteredReports]);

    // =========================================================
    // EVOLUÇÃO DAS NOTAS POR BIMESTRE
    // =========================================================

    const gradeEvolution = useMemo(() => {
        const grade1Average =
            calculateAverage(
                filteredReports.map(
                    (report) =>
                        report.grade1
                )
            );

        const grade2Average =
            calculateAverage(
                filteredReports.map(
                    (report) =>
                        report.grade2
                )
            );

        const grade3Average =
            calculateAverage(
                filteredReports.map(
                    (report) =>
                        report.grade3
                )
            );

        const grade4Average =
            calculateAverage(
                filteredReports.map(
                    (report) =>
                        report.grade4
                )
            );

        return {
            labels: [
                "1º Bim.",
                "2º Bim.",
                "3º Bim.",
                "4º Bim.",
            ],

            data: [
                grade1Average,
                grade2Average,
                grade3Average,
                grade4Average,
            ].map((value) =>
                Number(value.toFixed(2))
            ),
        };
    }, [filteredReports]);

    // =========================================================
    // DISTRIBUIÇÃO DOS STATUS
    // =========================================================

    const distribution = useMemo(() => {
        const excellent =
            filteredReports.filter(
                (report) =>
                    report.status ===
                    "Excelente"
            ).length;

        const good =
            filteredReports.filter(
                (report) =>
                    report.status === "Bom"
            ).length;

        const attention =
            filteredReports.filter(
                (report) =>
                    report.status === "Atenção"
            ).length;

        const recovery =
            filteredReports.filter(
                (report) =>
                    report.status ===
                    "Recuperação"
            ).length;

        return {
            labels: [
                "Excelente",
                "Bom",
                "Atenção",
                "Recuperação",
            ],

            data: [
                excellent,
                good,
                attention,
                recovery,
            ],
        };
    }, [filteredReports]);

    // =========================================================
    // PAGINAÇÃO
    // =========================================================

    const totalItems =
        filteredReports.length;

    const totalPages = Math.max(
        1,
        Math.ceil(
            totalItems / pageSize
        )
    );

    const paginatedReports = useMemo(() => {
        const startIndex =
            (currentPage - 1) *
            pageSize;

        const endIndex =
            startIndex + pageSize;

        return filteredReports.slice(
            startIndex,
            endIndex
        );
    }, [
        filteredReports,
        currentPage,
        pageSize,
    ]);

    // =========================================================
    // ALTERAÇÃO DO TAMANHO DA PÁGINA
    // =========================================================

    const handlePageSizeChange = (
        value: number
    ) => {
        setPageSize(value);
        setCurrentPage(1);
    };

    // =========================================================
    // LIMPAR FILTROS
    // =========================================================

    const clearFilters = () => {
        setSearch("");
        setCourse("");
        setPeriod("");
        setClassroom("");
        setStatus("");
        setCurrentPage(1);
    };

    // =========================================================
    // RETORNO
    // =========================================================

    return {
        filters: {
            search,
            course,
            period,
            classroom,
            status,

            courseOptions,
            periodOptions,
            classroomOptions,
            statusOptions,
        },

        stats,

        trend,

        gradeEvolution,

        distribution,

        filteredReports,

        table: {
            rows: paginatedReports,
            currentPage,
            pageSize,
            totalItems,
            totalPages,

            setCurrentPage,
            setPageSize:
                handlePageSizeChange,
        },

        setSearch,
        setCourse,
        setPeriod,
        setClassroom,
        setStatus,

        clearFilters,
    };
};

export default useReports;