import "./Grades.css";

import EvePageHeader from "../../components/UI/PageHeader";
import Panel from "../../components/UI/Panel/Panel";

import GradesFilters from "./components/GradesFilters";
import GradesStats from "./components/GradesStats";
import GradesDistribution from "./components/GradesDistribution";
import GradesTrendChart from "./components/GradesTrendChart";
import GradesTable from "./components/GradesTable";

import EveLineChart from "../../components/UI/Chart/LineChart";
import useGrades from "./hooks/useGrades";

const Grades = () => {

    const {
        filters,
        stats,
        trend,
        gradeEvolution,
        distribution,
        table,
        setPeriod,
        setSearch,
        setCourse,
        setClassroom,
        setStatus,
        clearFilters,
    } = useGrades();

    return (
        <main className="grades">

            <EvePageHeader
                title="Notas"
                subtitle="Acompanhe o desempenho dos alunos, analise médias e identifique oportunidades de melhoria."
            />

            <GradesFilters
                filters={filters}
                onSearchChange={setSearch}
                onCourseChange={setCourse}
                onPeriodChange={setPeriod}
                onClassroomChange={setClassroom}
                onStatusChange={setStatus}
                onClearFilters={clearFilters}
            />

            <GradesStats
                stats={stats}
            />

            <section className="grades-grid">

                <Panel title="Frequência por Turma">

                    <GradesTrendChart
                        data={trend}
                    />

                </Panel>

                <Panel title="Distribuição da Frequência">

                    <GradesDistribution
                        labels={distribution.labels}
                        data={distribution.data}
                    />

                </Panel>

                <Panel title="Evolução da Média Geral">

                    <EveLineChart
                        title="Evolução da Média Geral"
                        labels={gradeEvolution.labels}
                        data={gradeEvolution.data}
                    />

                </Panel>

            </section>
            

            <section className="grades-grid-2">

                <Panel title="Lista de Notas">

                    <GradesTable
                        rows={table.rows}
                        table={table}
                    />

                </Panel>

            </section>

        </main>
    );
};

export default Grades;


