import "./ClassesFilters.css";

import { Plus } from "lucide-react";

import EveButton from "../../../../components/UI/Button";
import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";

interface ClassesFiltersProps {
    search: string;
    course: string;
    period: string;
    status: string;

    onSearchChange: (value: string) => void;
    onCourseChange: (value: string) => void;
    onPeriodChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

const ClassesFilters = ({
    search,
    course,
    period,
    status,
    onSearchChange,
    onCourseChange,
    onPeriodChange,
    onStatusChange,
}: ClassesFiltersProps) => {

    return (

        <section className="classes-filters">

            <div className="classes-filters-left">

                <EveSearch
                    value={search}
                    placeholder="Pesquisar turma..."
                    onChange={(e) => onSearchChange(e.target.value)}
                />

                <EveSelect
                    value={course}
                    placeholder="Curso"
                    options={[
                        {
                            value: "Análise e Desenvolvimento de Sistemas",
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

            <EveButton>

                <Plus size={18} />

                Nova Turma

            </EveButton>

        </section>

    );

};

export default ClassesFilters;