import "./SubjectsFilters.css";

import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";
import { RotateCcw } from "lucide-react";
import EveButton from "../../../../components/UI/Button";

interface SubjectsFiltersProps {
    search: string;
    course: string;
    period: string;
    status: string;

    onSearchChange: (value: string) => void;
    onCourseChange: (value: string) => void;
    onPeriodChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

const SubjectsFilters = ({
    search,
    course,
    period,
    status,
    onSearchChange,
    onCourseChange,
    onPeriodChange,
    onStatusChange,
}: SubjectsFiltersProps) => {

    return (

       <section className="subjects-filters">

        <div className="subjects-filters-left">

            <div className="subjects-filter-search">

                <EveSearch
                    value={search}
                    placeholder="Pesquisar disciplina..."
                    onChange={(e) => onSearchChange(e.target.value)}
                />

            </div>

            <div className="subjects-filter-select">

                <EveSelect
                    value={course}
                    placeholder="Curso"
                    options={[
                        {
                            value: "ADS",
                            label: "ADS",
                        },
                        {
                            value: "Ciência de Dados",
                            label: "Ciência de Dados",
                        },
                        {
                            value: "Administração",
                            label: "Administração",
                        },
                    ]}
                    onChange={(e) => onCourseChange(e.target.value)}
                />

            </div>

            <div className="subjects-filter-select">

                <EveSelect
                    value={period}
                    placeholder="Período"
                    options={[
                        {
                            value: "Manhã",
                            label: "Manhã",
                        },
                        {
                            value: "Tarde",
                            label: "Tarde",
                        },
                        {
                            value: "Noite",
                            label: "Noite",
                        },
                    ]}
                    onChange={(e) => onPeriodChange(e.target.value)}
                />

            </div>

            <div className="subjects-filter-select">

                <EveSelect
                    value={status}
                    placeholder="Status"
                    options={[
                        {
                            value: "Ativa",
                            label: "Ativa",
                        },
                        {
                            value: "Planejada",
                            label: "Planejada",
                        },
                        {
                            value: "Encerrada",
                            label: "Encerrada",
                        },
                    ]}
                    onChange={(e) => onStatusChange(e.target.value)}
                />

            </div>

        </div>

        <div className="subjects-filters-actions">

            <EveButton
                variant="outline"
                style={{
                    width: "170px",
                    height: "48px",
                }}
            >
                <RotateCcw size={18} />
                Limpar filtros
            </EveButton>

        </div>

    </section>

    );

};

export default SubjectsFilters;