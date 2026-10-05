import "./ReportsFilters.css";

import {
    RotateCcw,
} from "lucide-react";

import EveButton
    from "../../../../components/UI/Button";

import EveSearch
    from "../../../../components/UI/Search";

import EveSelect
    from "../../../../components/UI/Select";


interface ReportsFiltersProps {

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


const ReportsFilters = ({

    filters,

    onSearchChange,

    onCourseChange,

    onClearFilters,

}: ReportsFiltersProps) => {

    return (

        <section className="reports-filters">

            {/* ==================================================
                PESQUISA
            ================================================== */}

            <div className="reports-filters-left">

                <EveSearch

                    value={filters.search}

                    placeholder="Pesquisar aluno..."

                    onChange={onSearchChange}

                />

            </div>


            {/* ==================================================
                FILTROS
            ================================================== */}

            <div className="reports-filters-right">

                {/* ==================================================
                    CURSO
                ================================================== */}

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


                {/* ==================================================
                    TURMA
                ================================================== */}

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


                {/* ==================================================
                    STATUS
                ================================================== */}

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


                {/* ==================================================
                    PERÍODO
                ================================================== */}

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


                {/* ==================================================
                    LIMPAR
                ================================================== */}

                <EveButton

                    variant="ghost"

                    icon={
                        <RotateCcw
                            size={18}
                        />
                    }

                    onClick={onClearFilters}

                >

                    Limpar

                </EveButton>

            </div>

        </section>

    );

};


export default ReportsFilters;