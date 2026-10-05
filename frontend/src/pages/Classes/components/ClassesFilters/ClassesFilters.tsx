
import "./ClassesFilters.css";

import { RotateCcw } from "lucide-react";

import EveButton from "../../../../components/UI/Button";
import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";

interface ClassesFiltersProps {
    filters: {
        search: string;
        course: string;
        period: string;
        status: string;
        courseOptions: string[];
        periodOptions: string[];
        statusOptions: string[];
    };

    onSearchChange: (value: string) => void;
    onCourseChange: (value: string) => void;
    onPeriodChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onClearFilters: () => void;
}

const ClassesFilters = ({
    filters,
    onSearchChange,
    onCourseChange,
    onPeriodChange,
    onStatusChange,
    onClearFilters,
}: ClassesFiltersProps) => {
    return (
        <section className="classes-filters">
            <div className="classes-filters-search">
                <EveSearch
                    value={filters.search}
                    placeholder="Pesquisar turma..."
                    onChange={onSearchChange}
                />
            </div>

            <div className="classes-filters-select">
                <EveSelect
                    value={filters.course}
                    placeholder="Todos os cursos"
                    options={filters.courseOptions.map((course) => ({
                        value: course,
                        label: course,
                    }))}
                    onChange={(value) => onCourseChange(value)}
                />
            </div>

            <div className="classes-filters-select">
                <EveSelect
                    value={filters.period}
                    placeholder="Todos os períodos"
                    options={filters.periodOptions.map((period) => ({
                        value: period,
                        label: period,
                    }))}
                    onChange={(value) => onPeriodChange(value)}
                />
            </div>

            <div className="classes-filters-select">
                <EveSelect
                    value={filters.status}
                    placeholder="Todos os status"
                    options={filters.statusOptions.map((status) => ({
                        value: status,
                        label: status,
                    }))}
                    onChange={(value) => onStatusChange(value)}
                />
            </div>

            <div className="classes-filters-clear">
                <EveButton
                    variant="outline"
                    onClick={onClearFilters}
                >
                    <RotateCcw size={18} />
                    Limpar
                </EveButton>
            </div>
        </section>
    );
};

export default ClassesFilters;