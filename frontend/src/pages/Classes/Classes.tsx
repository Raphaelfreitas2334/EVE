import "./Classes.css";

import EvePageHeader from "../../components/UI/PageHeader";
import Panel from "../../components/UI/Panel/Panel";

import ClassesStats from "./components/ClassesStats";
import ClassesFilters from "./components/ClassesFilters";
import ClassesTable from "./components/ClassesTable";

import useClasses from "./hooks/useClasses";
import ClassesOverview from "./components/ClassesOverview";
import ClassesStudentsChart from "./components/ClassesStudentsChart";
import ClassesSummary from "./components/ClassesSummary";

const Classes = () => {

    const {

        filters,

        filteredClasses,

        table,

        setSearch,

        setCourse,

        setPeriod,

        setStatus,

        clearFilters,

    } = useClasses();

    return (

        <section className="classes-page">

            <EvePageHeader
                title="Turmas"
                subtitle="Gerencie todas as turmas da instituição."
            />

            <ClassesFilters
                filters={filters}
                onSearchChange={setSearch}
                onCourseChange={setCourse}
                onPeriodChange={setPeriod}
                onStatusChange={setStatus}
                onClearFilters={clearFilters}
            />

            <ClassesStats
                classes={filteredClasses}
            />
            <br></br>
            <div className="classes-content">

                <div className="classes-main">

                    <Panel title="Lista de Turmas">

                        <ClassesTable
                            classes={table.rows}
                            table={table}
                        />

                    </Panel>

                </div>

                <aside className="classes-sidebar">

                    <aside className="classes-sidebar">

                        <ClassesOverview
                            classes={filteredClasses}
                        />

                        <ClassesStudentsChart
                            classes={filteredClasses}
                        />

                        <ClassesSummary
                            classes={filteredClasses}
                        />

                    </aside>

                </aside>

            </div>

        </section>

    );

};

export default Classes;