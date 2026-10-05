import "./Subjects.css";

import EvePageHeader from "../../components/UI/PageHeader";

import useSubjects from "./hooks/useSubjects";

import SubjectsFilters from "./components/SubjectsFilters";
import SubjectsStats from "./components/SubjectsStats";
import SubjectsTable from "./components/SubjectsTable";
import SubjectsOverview from "./components/SubjectsOverview";
import SubjectsSummary from "./components/SubjectsSummary";
import Panel from "../../components/UI/Panel/Panel";
import Button from "../../components/UI/Button";
import SubjectsWorkloadChart from "./components/SubjectsWorkloadChart";

const Subjects = () => {

    const {

        filters,

        filteredSubjects,

        table,

        setSearch,

        setCourse,

        setPeriod,

        setStatus,

    } = useSubjects();

    return (

        <section className="subjects-page">

            <div className="subjects-content">
                <main className="subjects-main">
                    <EvePageHeader
                        title="Disciplinas"
                        subtitle="Gerencie todas as disciplinas da instituição."
                    />
                </main>
                 <aside className="subjects-sidebar">
                    <Button>
                       + Nova Diciplina
                    </Button>
                </aside>
            </div>

            <div className="subjects-content">

                <main className="subjects-main">

                    <SubjectsStats
                        subjects={filteredSubjects}
                    />

                    <SubjectsFilters
                        search={filters.search}
                        course={filters.course}
                        period={filters.period}
                        status={filters.status}
                        courseOptions={filters.courseOptions}
                        periodOptions={filters.periodOptions}
                        statusOptions={filters.statusOptions}
                        onSearchChange={setSearch}
                        onCourseChange={setCourse}
                        onPeriodChange={setPeriod}
                        onStatusChange={setStatus}
                    />

                    <Panel title="Lista de Disciplinas">
                        <SubjectsTable
                            subjects={table.rows}
                            table={table}
                        />
                    </Panel>
                </main>

                <aside className="subjects-sidebar">

                    <SubjectsOverview
                        Subjects={filteredSubjects}
                    />

                    <SubjectsWorkloadChart
                        subjects={filteredSubjects}
                    />

                    <SubjectsSummary
                        subjects={filteredSubjects}
                    />

                </aside>

            </div>

        </section>

    );

};

export default Subjects;