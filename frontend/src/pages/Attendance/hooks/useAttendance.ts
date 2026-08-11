import {
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    mockAttendance,
} from "../data/mockAttendance";

const useAttendance = () => {

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

                mockAttendance.map(

                    item => item.course,

                ),

            ),

        ];

    }, []);


    const periodOptions = useMemo(() => {

        return [

            ...new Set(

                mockAttendance.map(

                    item => item.period,

                ),

            ),

        ];

    }, []);


    const classroomOptions = useMemo(() => {

        return [

            ...new Set(

                mockAttendance.map(

                    item => item.classroom,

                ),

            ),

        ];

    }, []);


    const statusOptions = useMemo(() => {

        return [

            ...new Set(

                mockAttendance.map(

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

    const filteredAttendance = useMemo(() => {

        const normalizedSearch =

            search

                .trim()

                .toLowerCase();


        return mockAttendance.filter(item => {

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

        const totalStudents =

            filteredAttendance.length;


        const averageFrequency =

            totalStudents === 0

                ? 0

                : filteredAttendance.reduce(

                    (total, student) =>

                        total +

                        student.frequency,

                    0,

                ) / totalStudents;


        const totalAbsences =

            filteredAttendance.reduce(

                (total, student) =>

                    total +

                    student.absences,

                0,

            );


        const studentsAtRisk =

            filteredAttendance.filter(

                student =>

                    student.frequency < 75,

            ).length;


        return {

            totalStudents,

            averageFrequency,

            totalAbsences,

            studentsAtRisk,

        };

    }, [

        filteredAttendance,

    ]);


    // ==========================================================
    // RESUMO POR CURSO
    // ==========================================================

    const overview = useMemo(() => {

        const grouped = new Map<

            string,

            {

                totalFrequency: number;

                students: number;

            }

        >();


        filteredAttendance.forEach(student => {

            const current =

                grouped.get(

                    student.course,

                );


            if (current) {

                current.totalFrequency +=

                    student.frequency;

                current.students++;

            } else {

                grouped.set(

                    student.course,

                    {

                        totalFrequency:

                            student.frequency,

                        students: 1,

                    },

                );

            }

        });


        return Array

            .from(

                grouped.entries(),

            )

            .map(

                ([course, values]) => {

                    const average =

                        values.totalFrequency /

                        values.students;


                    return {

                        id: course,

                        label: course,

                        value: average,

                        displayValue:

                            `${average.toFixed(1)}%`,

                        percent: average,

                        description:

                            `${values.students} alunos`,

                    };

                },

            )

            .sort(

                (a, b) =>

                    b.value - a.value,

            );

    }, [

        filteredAttendance,

    ]);


    // ==========================================================
    // FREQUÊNCIA POR TURMA
    // ==========================================================

    const trend = useMemo(() => {

        const grouped = new Map<

            string,

            number[]

        >();


        filteredAttendance.forEach(student => {

            if (

                !grouped.has(

                    student.classroom,

                )

            ) {

                grouped.set(

                    student.classroom,

                    [],

                );

            }


            grouped

                .get(student.classroom)

                ?.push(

                    student.frequency,

                );

        });


        return Array

            .from(

                grouped.entries(),

            )

            .map(

                ([classroom, values]) => ({

                    label: classroom,

                    value:

                        values.reduce(

                            (total, value) =>

                                total + value,

                            0,

                        ) / values.length,

                }),

            )

            .sort(

                (a, b) =>

                    b.value - a.value,

            );

    }, [

        filteredAttendance,

    ]);


    // ==========================================================
    // DISTRIBUIÇÃO DA FREQUÊNCIA
    // ==========================================================

    const distribution = useMemo(() => {

        return {

            labels: [

                "Acima de 90%",

                "75% a 89%",

                "60% a 74%",

                "Abaixo de 60%",

            ],

            data: [

                filteredAttendance.filter(

                    student =>

                        student.frequency >= 90,

                ).length,


                filteredAttendance.filter(

                    student =>

                        student.frequency >= 75 &&

                        student.frequency < 90,

                ).length,


                filteredAttendance.filter(

                    student =>

                        student.frequency >= 60 &&

                        student.frequency < 75,

                ).length,


                filteredAttendance.filter(

                    student =>

                        student.frequency < 60,

                ).length,

            ],

        };

    }, [

        filteredAttendance,

    ]);


    // ==========================================================
    // RANKING DE RISCO
    // ==========================================================

    const ranking = useMemo(() => {

        return [

            ...filteredAttendance,

        ]

            .sort(

                (a, b) =>

                    a.frequency -

                    b.frequency,

            )

            .slice(0, 5);

    }, [

        filteredAttendance,

    ]);


    // ==========================================================
    // ALUNOS POR TURMA
    // ==========================================================

    const filteredClasses = useMemo(() => {

        const grouped = new Map<
            string,
            number
        >();

        filteredAttendance.forEach(student => {

            grouped.set(
                student.classroom,
                (
                    grouped.get(
                        student.classroom,
                    ) ?? 0
                ) + 1,
            );

        });

        return Array

            .from(
                grouped.entries(),
            )

            .map(
                ([classroom, students]) => ({

                    classroom,

                    students,

                }),
            )

            .sort(
                (a, b) =>
                    b.students -
                    a.students,
            );

    }, 
    [
        filteredAttendance,
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

        filteredAttendance.length;


    const totalPages = Math.max(

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

                (currentPage - 1) *

                pageSize

            ) + 1;


    const endItem = Math.min(

        currentPage *

            pageSize,

        totalItems,

    );


    const paginatedAttendance =

        useMemo(() => {

            const start =

                (currentPage - 1) *

                pageSize;


            return filteredAttendance.slice(

                start,

                start + pageSize,

            );

        }, [

            filteredAttendance,

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

        distribution,

        ranking,

        filteredClasses,


        table: {

            rows: paginatedAttendance,

            currentPage,

            totalPages,

            totalItems,

            pageSize,

            startItem,

            endItem,

            hasPrevious:

                currentPage > 1,

            hasNext:

                currentPage < totalPages,


            setCurrentPage,


            setPageSize: (

                size: number,

            ) => {

                setPageSize(size);

                setCurrentPage(1);

            },

        },


        filteredAttendance,


        setSearch,

        setCourse,

        setPeriod,

        setClassroom,

        setStatus,


        clearFilters,

    };

};


export default useAttendance;