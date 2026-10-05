import "./StudentsFilters.css";

import {
    RotateCcw,
} from "lucide-react";

import EveButton from "../../../../components/UI/Button";
import EveSelect from "../../../../components/UI/Select";

interface StudentsFiltersProps {
    filters: {
        course: string;
        classroom: string;
        year: string;
        bimester: string;
        period: string;

        courseOptions: string[];
        classroomOptions: string[];
        yearOptions: string[];
        bimesterOptions: string[];
        periodOptions: string[];
    };

    onCourseChange: (value: string) => void;
    onClassroomChange: (value: string) => void;
    onYearChange: (value: string) => void;
    onBimesterChange: (value: string) => void;
    onPeriodChange: (value: string) => void;
    onClearFilters: () => void;
}

const StudentsFilters = ({
    filters,

    onCourseChange,
    onClassroomChange,
    onYearChange,
    onBimesterChange,
    onPeriodChange,

    onClearFilters,
}: StudentsFiltersProps) => {
    return (
        <section className="students-filters">
            {/* ==================================================
                CABEÇALHO
            ================================================== */}

            <div className="students-filters-header">
                <h3>Contexto Atual</h3>

                <p>
                    Defina o contexto para visualizar os dados dos alunos.
                </p>
            </div>

            {/* ==================================================
                FILTROS
            ================================================== */}

            <div className="students-filters-fields">
                {/* CURSO */}

                <EveSelect
                    label="Curso"
                    value={filters.course}
                    placeholder="Selecione..."
                    options={[
                        {
                            label: "Todos",
                            value: "",
                        },
                        ...filters.courseOptions.map((course) => ({
                            label: course,
                            value: course,
                        })),
                    ]}
                    onChange={onCourseChange}
                />

                {/* TURMA */}

                <EveSelect
                    label="Turma"
                    value={filters.classroom}
                    placeholder="Selecione..."
                    options={[
                        {
                            label: "Todas",
                            value: "",
                        },
                        ...filters.classroomOptions.map((classroom) => ({
                            label: classroom,
                            value: classroom,
                        })),
                    ]}
                    onChange={onClassroomChange}
                />

                {/* ANO */}

                <EveSelect
                    label="Ano"
                    value={filters.year}
                    placeholder="Selecione..."
                    options={[
                        {
                            label: "Todos",
                            value: "",
                        },
                        ...filters.yearOptions.map((year) => ({
                            label: year,
                            value: year,
                        })),
                    ]}
                    onChange={onYearChange}
                />

                {/* BIMESTRE */}

                <EveSelect
                    label="Bimestre"
                    value={filters.bimester}
                    placeholder="Selecione..."
                    options={[
                        {
                            label: "Todos",
                            value: "",
                        },
                        ...filters.bimesterOptions.map((bimester) => ({
                            label: `${bimester}º Bimestre`,
                            value: bimester,
                        })),
                    ]}
                    onChange={onBimesterChange}
                />

                {/* PERÍODO */}

                <EveSelect
                    label="Período"
                    value={filters.period}
                    placeholder="Selecione..."
                    options={[
                        {
                            label: "Todos",
                            value: "",
                        },
                        ...filters.periodOptions.map((period) => ({
                            label: period,
                            value: period,
                        })),
                    ]}
                    onChange={onPeriodChange}
                />

                {/* LIMPAR */}

                <div className="students-filters-clear">
                    <EveButton
                        variant="outline"
                        icon={<RotateCcw size={18} />}
                        onClick={onClearFilters}
                    >
                        Limpar
                    </EveButton>
                </div>
            </div>
        </section>
    );
};

export default StudentsFilters;