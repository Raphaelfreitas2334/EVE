import "./Reports.css";

import EvePageHeader from "../../components/UI/PageHeader";
import Panel from "../../components/UI/Panel/Panel";
import EveLineChart from "../../components/UI/Chart/LineChart";

import useReports from "./hooks/useReports";

import ReportsFilters from "./components/ReportsFilters";
import ReportsStats from "./components/ReportsStats";
import ReportsDistribution from "./components/ReportsDistribution";
import ReportsTrendChart from "./components/ReportsTrendChart";
import ReportsTable from "./components/ReportsTable";
import ReportsClassPerformanceChart from "./components/ReportsClassPerformanceChart/ReportsClassPerformanceChart";

const Reports = () => {
    const {
        filters,
        stats,
        trend,
        gradeEvolution,
        distribution,
        table,
        filteredReports,

        setSearch,
        setCourse,
        setPeriod,
        setClassroom,
        setStatus,

        clearFilters,
    } = useReports();

    return (
        <main className="reports">
            {/* =====================================================
                CABEÇALHO
            ====================================================== */}

            <EvePageHeader
                title="Relatórios"
                subtitle="Acompanhe o desempenho acadêmico, analise indicadores e identifique oportunidades de melhoria."
            />

            {/* =====================================================
                FILTROS
            ====================================================== */}

            <ReportsFilters
                filters={filters}
                onSearchChange={setSearch}
                onCourseChange={setCourse}
                onPeriodChange={setPeriod}
                onClassroomChange={setClassroom}
                onStatusChange={setStatus}
                onClearFilters={clearFilters}
            />

            {/* =====================================================
                INDICADORES
            ====================================================== */}

            <ReportsStats stats={stats} />

            {/* =====================================================
                GRÁFICOS PRINCIPAIS
            ====================================================== */}

            <section className="reports-grid">
                <Panel title="Média por Turma">
                    <ReportsTrendChart data={trend} />
                </Panel>

                <Panel title="Distribuição das Notas">
                    <ReportsDistribution
                        labels={distribution.labels}
                        data={distribution.data}
                    />
                </Panel>

                <Panel title="Evolução da Média Geral">
                    <EveLineChart
                        title="Evolução da Média Geral"
                        labels={gradeEvolution.labels}
                        data={gradeEvolution.data}
                        min={0}
                        max={10}
                        stepSize={2}
                    />
                </Panel>
            </section>

            {/* =====================================================
                TABELA + DESEMPENHO POR TURMA
            ====================================================== */}

            <section className="reports-grid-2">
                <Panel title="Lista de Alunos">
                    <ReportsTable
                        rows={table.rows}
                        table={table}
                    />
                </Panel>

                <Panel title="Desempenho por Turma">
                    <ReportsClassPerformanceChart
                        reports={filteredReports}
                    />
                </Panel>
            </section>
        </main>
    );
};

export default Reports;