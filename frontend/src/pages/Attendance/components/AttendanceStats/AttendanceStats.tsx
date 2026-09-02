import "./AttendanceStats.css";

import {
    Activity,
    AlertTriangle,
    CalendarCheck,
    GraduationCap,
} from "lucide-react";

import EveMetricCard from "../../../../components/UI/MetricCard/EveMetricCard";

interface AttendanceStatsProps {

    stats: {

        totalStudents: number;

        averageFrequency: number;

        totalAbsences: number;

        studentsAtRisk: number;

    };

}

const AttendanceStats = ({

    stats,

}: AttendanceStatsProps) => {

    return (

        <section className="attendance-stats">

            <EveMetricCard

                title="Frequência Média"

                value={`${stats.averageFrequency.toFixed(1)}%`}

                icon={<Activity size={22} />}

                iconBackground="#EEF2FF"

                iconColor="#6D28D9"

                trend={{

                    value: `${stats.averageFrequency.toFixed(1)}%`,

                    color: "success",

                    description: "média geral",

                }}

            />

            <EveMetricCard

                title="Total de Faltas"

                value={stats.totalAbsences.toLocaleString("pt-BR")}

                icon={<CalendarCheck size={22} />}

                iconBackground="#ECFDF5"
                iconColor="#10B981"

                subtitle="Período selecionado"

            />

            <EveMetricCard

                title="Alunos em Risco"

                value={stats.studentsAtRisk}

                icon={<AlertTriangle size={22} />}

                iconBackground="#FEF3C7"

                iconColor="#F59E0B"

                trend={{

                    value: `${stats.studentsAtRisk}`,

                    color: "warning",

                    description: "abaixo de 75%",

                }}

            />

            <EveMetricCard

                title="Total de Alunos"

                value={stats.totalStudents}

                icon={<GraduationCap size={22} />}

                iconBackground="#EFF6FF"

                iconColor="#2563EB"

                subtitle="Filtros aplicados"

            />

        </section>

    );

};

export default AttendanceStats;