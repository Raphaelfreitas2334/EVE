import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    mockGrades,
} from "../data/mockGrades";

const useGrades = () => {

    // ==========================================================
    // FILTROS
    // ==========================================================

    const [search, setSearch] = useState("");

    const [course, setCourse] = useState("");

    const [period, setPeriod] = useState("");

    const [classroom, setClassroom] = useState("");

    const [status, setStatus] = useState("");


    // ==========================================================
    // PAGINAÇÃO
    // ==========================================================

    const [currentPage, setCurrentPage] = useState(1);

    const [pageSize, setPageSize] = useState(10);


    // ==========================================================
    // OPÇÕES DOS FILTROS
    // ==========================================================

    const courseOptions = useMemo(() => {

        return [
            ...new Set(
                mockGrades.map(
                    item => item.course,
                ),
            ),
        ];

    }, []);


    const periodOptions = useMemo(() => {

        return [
            ...new Set(
                mockGrades.map(
                    item => item.period,
                ),
            ),
        ];

    }, []);


    const classroomOptions = useMemo(() => {

        return [
            ...new Set(
                mockGrades.map(
                    item => item.classroom,
                ),
            ),
        ];

    }, []);


    const statusOptions = useMemo(() => {

        return [
            ...new Set(
                mockGrades.map(
                    item => item.status,
                ),
            ),
        ];

    }, []);


    // ==========================================================
    // LIMPAR FILTROS
    // ==========================================================

    const clearFilters = () => {

        setSearch("");

        setCourse("");

        setPeriod("");

        setClassroom("");

        setStatus("");

        setCurrentPage(1);

    };


    // ==========================================================
    // DADOS FILTRADOS
    // ==========================================================

    const filteredGrades = useMemo(() => {

        const normalizedSearch =
            search
                .trim()
                .toLowerCase();


        return mockGrades.filter(item => {

            const matchesSearch =
                !normalizedSearch ||
                item.name
                    .toLowerCase()
                    .includes(
                        normalizedSearch,
                    );


            const matchesCourse =
                !course ||
                item.course === course;


            const matchesPeriod =
                !period ||
                item.period === period;


            const matchesClassroom =
                !classroom ||
                item.classroom === classroom;


            const matchesStatus =
                !status ||
                item.status === status;


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


    // ==========================================================
    // ESTATÍSTICAS
    // ==========================================================

    const stats = useMemo(() => {

        const totalStudents = filteredGrades.length;

        const averageGrade =
            totalStudents === 0
                ? 0
                : filteredGrades.reduce(
                    (total, student) =>
                        total + student.average,
                    0,
                ) / totalStudents;

        const approvedStudents =
            filteredGrades.filter(
                student => student.average >= 6,
            ).length;

        const recoveryStudents =
            filteredGrades.filter(
                student =>
                    student.average >= 4 &&
                    student.average < 6,
            ).length;

        const highestGrade =
            totalStudents === 0
                ? 0
                : Math.max(
                    ...filteredGrades.map(
                        student => student.average,
                    ),
                );

        return {

            totalStudents,

            averageGrade,

            approvedStudents,

            recoveryStudents,

            highestGrade,

        };

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // MÉDIA POR CURSO
    // ==========================================================

    const overview = useMemo(() => {

        const grouped = new Map<
            string,
            {
                total: number;
                students: number;
            }
        >();


        filteredGrades.forEach(
            student => {

                const current =
                    grouped.get(
                        student.course,
                    );


                if (current) {

                    current.total +=
                        student.average;

                    current.students++;

                } else {

                    grouped.set(
                        student.course,
                        {
                            total:
                                student.average,

                            students: 1,
                        },
                    );

                }

            },
        );


        return Array
            .from(
                grouped.entries(),
            )
            .map(
                (
                    [
                        course,
                        values,
                    ],
                ) => {

                    const average =
                        values.total /
                        values.students;


                    return {

                        id: course,

                        label: course,

                        value: average,

                        displayValue:
                            average.toFixed(2),

                        percent:
                            average * 10,

                        description:
                            `${values.students} alunos`,

                    };

                },
            )
            .sort(
                (a, b) =>
                    b.value -
                    a.value,
            );

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // MÉDIA POR TURMA
    // ==========================================================

    const trend = useMemo(() => {

        const grouped = new Map<
            string,
            {
                total: number;
                students: number;
            }
        >();


        filteredGrades.forEach(
            student => {

                const current =
                    grouped.get(
                        student.classroom,
                    );


                if (current) {

                    current.total +=
                        student.average;

                    current.students++;

                } else {

                    grouped.set(
                        student.classroom,
                        {
                            total:
                                student.average,

                            students: 1,
                        },
                    );

                }

            },
        );


        return Array
            .from(
                grouped.entries(),
            )
            .map(
                (
                    [
                        classroom,
                        values,
                    ],
                ) => ({

                    label: classroom,

                    value:
                        values.total /
                        values.students,

                }),
            )
            .sort(
                (a, b) =>
                    b.value -
                    a.value,
            );

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // EVOLUÇÃO DAS NOTAS
    // ==========================================================

    const gradeEvolution = useMemo(() => {

        if (
            filteredGrades.length === 0
        ) {

            return {

                labels: [
                    "1º Bimestre",
                    "2º Bimestre",
                    "3º Bimestre",
                    "4º Bimestre",
                ],

                data: [
                    0,
                    0,
                    0,
                    0,
                ],

            };

        }


        const totalStudents =
            filteredGrades.length;


        const grade1 =
            filteredGrades.reduce(
                (
                    total,
                    student,
                ) =>
                    total +
                    student.grade1,

                0,

            ) / totalStudents;


        const grade2 =
            filteredGrades.reduce(
                (
                    total,
                    student,
                ) =>
                    total +
                    student.grade2,

                0,

            ) / totalStudents;


        const grade3 =
            filteredGrades.reduce(
                (
                    total,
                    student,
                ) =>
                    total +
                    student.grade3,

                0,

            ) / totalStudents;


        const grade4 =
            filteredGrades.reduce(
                (
                    total,
                    student,
                ) =>
                    total +
                    student.grade4,

                0,

            ) / totalStudents;


        return {

            labels: [
                "1º Bimestre",
                "2º Bimestre",
                "3º Bimestre",
                "4º Bimestre",
            ],

            data: [

                Number(
                    grade1.toFixed(2),
                ),

                Number(
                    grade2.toFixed(2),
                ),

                Number(
                    grade3.toFixed(2),
                ),

                Number(
                    grade4.toFixed(2),
                ),

            ],

        };

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // DISTRIBUIÇÃO DAS NOTAS
    // ==========================================================

    const distribution = useMemo(() => {

        return {

            labels: [

                "Excelente",

                "Bom",

                "Atenção",

                "Recuperação",

            ],

            data: [

                filteredGrades.filter(
                    student =>
                        student.average >= 8.5,
                ).length,

                filteredGrades.filter(
                    student =>
                        student.average >= 7 &&
                        student.average < 8.5,
                ).length,

                filteredGrades.filter(
                    student =>
                        student.average >= 6 &&
                        student.average < 7,
                ).length,

                filteredGrades.filter(
                    student =>
                        student.average < 6,
                ).length,

            ],

        };

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // RANKING
    // ==========================================================

    const ranking = useMemo(() => {

        return [
            ...filteredGrades,
        ]
            .sort(
                (a, b) =>
                    a.average -
                    b.average,
            )
            .slice(0, 5);

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // ALUNOS POR TURMA
    // ==========================================================

    const filteredClasses = useMemo(() => {

        const grouped = new Map<
            string,
            number
        >();


        filteredGrades.forEach(
            student => {

                grouped.set(

                    student.classroom,

                    (
                        grouped.get(
                            student.classroom,
                        ) ?? 0
                    ) + 1,

                );

            },
        );


        return Array
            .from(
                grouped.entries(),
            )
            .map(
                (
                    [
                        classroom,
                        students,
                    ],
                ) => ({

                    classroom,

                    students,

                }),
            )
            .sort(
                (a, b) =>
                    b.students -
                    a.students,
            );

    }, [
        filteredGrades,
    ]);


    // ==========================================================
    // REINICIAR PAGINAÇÃO
    // ==========================================================

    useEffect(() => {

        setCurrentPage(1);

    }, [
        search,
        course,
        period,
        classroom,
        status,
    ]);


    // ==========================================================
    // PAGINAÇÃO
    // ==========================================================

    const totalItems =
        filteredGrades.length;


    const totalPages =
        Math.max(

            1,

            Math.ceil(
                totalItems /
                pageSize,
            ),

        );


    const startItem =
        totalItems === 0

            ? 0

            : (
                (
                    currentPage -
                    1
                ) *
                pageSize
            ) + 1;


    const endItem =
        Math.min(

            currentPage *
            pageSize,

            totalItems,

        );


    const paginatedGrades =
        useMemo(() => {

            const start =
                (
                    currentPage -
                    1
                ) *
                pageSize;


            return filteredGrades.slice(

                start,

                start +
                pageSize,

            );

        }, [

            filteredGrades,

            currentPage,

            pageSize,

        ]);


    // ==========================================================
    // RETORNO
    // ==========================================================

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


        overview,


        trend,


        gradeEvolution,


        distribution,


        ranking,


        filteredClasses,


        table: {

            rows:
                paginatedGrades,

            currentPage,

            totalPages,

            totalItems,

            pageSize,

            startItem,

            endItem,

            hasPrevious:
                currentPage > 1,

            hasNext:
                currentPage <
                totalPages,

            setCurrentPage,

            setPageSize: (
                size: number,
            ) => {

                setPageSize(size);

                setCurrentPage(1);

            },

        },


        filteredGrades,


        setSearch,

        setCourse,

        setPeriod,

        setClassroom,

        setStatus,

        clearFilters,

    };

};

export default useGrades;