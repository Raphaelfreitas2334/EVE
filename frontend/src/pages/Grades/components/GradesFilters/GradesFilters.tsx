import "./GradesFilters.css";

import {
    RotateCcw,
} from "lucide-react";

import EveButton from "../../../../components/UI/Button";
import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";

interface GradesFiltersProps {

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

const GradesFilters = ({

    filters,

    onSearchChange,

    onCourseChange,

    onPeriodChange,

    onClearFilters,

    onClassroomChange,

    onStatusChange,

}: GradesFiltersProps) => {

    return (

        <section className="grades-filters">

            {/* ==========================================================
                PESQUISA
            ========================================================== */}

            <div className="grades-filters-left">

                <EveSearch

                    value={filters.search}

                    placeholder="Pesquisar aluno..."

                    onChange={onSearchChange}

                />

            </div>


            {/* ==========================================================
                FILTROS
            ========================================================== */}

            <div className="grades-filters-right">

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
                    value={filters.classroom}
                    placeholder="Todos"
                    options={
                        filters.classroomOptions.map(
                            clasroom => ({
                                label: clasroom,
                                value: clasroom,
                            }),
                        )
                    }
                    onChange={onClassroomChange}
                />


                {/* ======================================================
                    STATUS
                ====================================================== */}

                <EveSelect
                    value={filters.status}
                    placeholder="Todos"
                    options={
                        filters.statusOptions.map(
                            status => ({
                                label: status,
                                value: status,
                            }),
                        )
                    }
                    onChange={onStatusChange}
                />


                {/* ======================================================
                    PERÍODO
                ====================================================== */}

                <EveSelect
                    value={filters.period}
                    placeholder="Todos"
                    options={
                        filters.periodOptions.map(
                            period => ({
                                label: period,
                                value: period,
                            }),
                        )
                    }
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

export default GradesFilters;