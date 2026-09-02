import "./AttendanceFilters.css";

import {
    CalendarDays,
    RotateCcw,
} from "lucide-react";

import EveButton from "../../../../components/UI/Button";
import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";

interface AttendanceFiltersProps {

    filters: {

        search: string;

        course: string;

        period: string;

        classroom: string;

        status: string;

        courseOptions: string[];

        periodOptions: string[];

        classroomOptions: string[];

        statusOptions: string[];

    };

    onSearchChange: (
        value: string,
    ) => void;

    onCourseChange: (
        value: string,
    ) => void;

    onPeriodChange: (
        value: string,
    ) => void;

    onClassroomChange: (
        value: string,
    ) => void;

    onStatusChange: (
        value: string,
    ) => void;

    onClearFilters: () => void;

}

const AttendanceFilters = ({

    filters,

    onSearchChange,

    onCourseChange,

    onPeriodChange,

    onClassroomChange,

    onStatusChange,

    onClearFilters,

}: AttendanceFiltersProps) => {

    return (

        <section className="attendance-filters">

            {/* ==========================================================
                PESQUISA
            ========================================================== */}

            <div className="attendance-filters-left">

                <EveSearch

                    value={filters.search}

                    placeholder="Pesquisar aluno..."

                    onChange={onSearchChange}

                />

            </div>


            {/* ==========================================================
                FILTROS
            ========================================================== */}

            <div className="attendance-filters-right">

                {/* ======================================================
                    CURSO
                ====================================================== */}

                <EveSelect

                    value={filters.course}

                    placeholder="Curso"

                    options={[

                        {

                            label: "Todos",

                            value: "",

                        },

                        ...filters.courseOptions.map(

                            course => ({

                                label: course,

                                value: course,

                            }),

                        ),

                    ]}

                    onChange={onCourseChange}

                />


                {/* ======================================================
                    TURMA
                ====================================================== */}

                <EveSelect

                    value={filters.classroom}

                    placeholder="Turma"

                    options={[

                        {

                            label: "Todas",

                            value: "",

                        },

                        ...filters.classroomOptions.map(

                            classroom => ({

                                label: classroom,

                                value: classroom,

                            }),

                        ),

                    ]}

                    onChange={onClassroomChange}

                />


                {/* ======================================================
                    STATUS
                ====================================================== */}

                <EveSelect

                    value={filters.status}

                    placeholder="Status"

                    options={[

                        {

                            label: "Todos",

                            value: "",

                        },

                        ...filters.statusOptions.map(

                            status => ({

                                label: status,

                                value: status,

                            }),

                        ),

                    ]}

                    onChange={onStatusChange}

                />


                {/* ======================================================
                    PERÍODO
                ====================================================== */}

                <EveSelect

                    value={filters.period}

                    placeholder="Período"

                    options={[

                        {

                            label: "Todos",

                            value: "",

                        },

                        ...filters.periodOptions.map(

                            period => ({

                                label: period,

                                value: period,

                            }),

                        ),

                    ]}

                    onChange={onPeriodChange}

                />


                {/* ======================================================
                    LIMPAR
                ====================================================== */}

                <EveButton
                    variant="ghost"
                    icon={
                        <RotateCcw
                            size={18}
                        />
                    }
                    onClick={onClearFilters}
                    style={{width:200 }}
                >
                    Limpar
                </EveButton>

            </div>

        </section>

    );

};

export default AttendanceFilters;