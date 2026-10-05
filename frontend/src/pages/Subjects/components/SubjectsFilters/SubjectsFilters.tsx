import "./SubjectsFilters.css";

import EveSearch from "../../../../components/UI/Search";
import EveSelect from "../../../../components/UI/Select";

interface SubjectsFiltersProps {
    search: string;
    course: string;
    period: string;
    status: string;

    courseOptions: string[];
    periodOptions: string[];
    statusOptions: string[];

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
    courseOptions,
    periodOptions,
    statusOptions,
    onSearchChange,
    onCourseChange,
    onPeriodChange,
    onStatusChange,
}: SubjectsFiltersProps) => {
    return (
        <section className="subjects-filters">
            <div className="subjects-filters-search">
                <EveSearch
                    value={search}
                    placeholder="Pesquisar disciplina..."
                    onChange={onSearchChange}
                />
            </div>

            <div className="subjects-filters-selects">
                <EveSelect
                    value={course}
                    placeholder="Todos os cursos"
                    options={courseOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                    onChange={onCourseChange}
                />

                <EveSelect
                    value={period}
                    placeholder="Todos os períodos"
                    options={periodOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                    onChange={onPeriodChange}
                />

                <EveSelect
                    value={status}
                    placeholder="Todos os status"
                    options={statusOptions.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                    onChange={onStatusChange}
                />
            </div>
        </section>
    );
};

export default SubjectsFilters;