import "./AttendanceFilters.css";

import {
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
                    placeholder="Todos"
                    options={
                        filters.courseOptions.map(
                            course => ({
                                label: course,
                                value: course,
                            }),
                        )
                    }
                    onChange={onCourseChange}
                />


                {/* ======================================================
                    TURMA
                ====================================================== */}

                <EveSelect
                    value={filters.course}
                    placeholder="Todos"
                    options={
                        filters.courseOptions.map(
                            course => ({
                                label: course,
                                value: course,
                            }),
                        )
                    }
                    onChange={onCourseChange}
                />


                {/* ======================================================
                    STATUS
                ====================================================== */}

                <EveSelect
                    value={filters.course}
                    placeholder="Todos"
                    options={
                        filters.courseOptions.map(
                            course => ({
                                label: course,
                                value: course,
                            }),
                        )
                    }
                    onChange={onCourseChange}
                />


                {/* ======================================================
                    PERÍODO
                ====================================================== */}

                <EveSelect
                    value={filters.course}
                    placeholder="Todos"
                    options={
                        filters.courseOptions.map(
                            course => ({
                                label: course,
                                value: course,
                            }),
                        )
                    }
                    onChange={onCourseChange}
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