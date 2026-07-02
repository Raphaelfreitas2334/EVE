import EveChartCard from "../../../../components/UI/ChartCard/EveChartCard";
import "./DashboardCharts.css";


import EnrollmentChart from "./charts/EnrollmentChart/EnrollmentChart";
import FrequencyChart from "./charts/FrequencyChart/FrequencyChart";
import PerformanceChart from "./charts/PerformanceChart/PerformanceChart";
import RevenueChart from "./charts/RevenueChart/RevenueChart";
import StudentsChart from "./charts/StudentsChart/StudentsChart";

const DashboardCharts = () => {

    return (

        <section className="dashboard-charts">

        <EveChartCard
            title="Matrículas"
            subtitle="Últimos 12 meses"
        >
            <EnrollmentChart />
        </EveChartCard>

        <EveChartCard
            title="Frequência"
            subtitle="Por turma"
        >
            <FrequencyChart />
        </EveChartCard>

        <EveChartCard
            title="Alunos por Curso"
            subtitle="Distribuição"
        >
            <StudentsChart />
        </EveChartCard>

        <EveChartCard
            title="Receita"
            subtitle="Últimos meses"
        >
            <RevenueChart />
        </EveChartCard>

        <EveChartCard
            title="Desempenho Geral"
            subtitle="Comparativo das disciplinas"
        >
            <PerformanceChart />
        </EveChartCard>

        </section>

    );

};

export default DashboardCharts;