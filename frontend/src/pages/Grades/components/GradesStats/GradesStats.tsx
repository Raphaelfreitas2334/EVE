import "./GradesStats.css";

import {
    Activity,
    Award,
    CheckCircle,
    GraduationCap,
} from "lucide-react";

import EveMetricCard from "../../../../components/UI/MetricCard/EveMetricCard";

interface GradesStatsProps {

    stats: {

        totalStudents: number;

        averageGrade: number;

        approvedStudents: number;

        recoveryStudents: number;

        highestGrade: number;

    };

}

const GradesStats = ({
    stats,
}: GradesStatsProps) => {

    return (

        <section className="grades-stats">

            <EveMetricCard

                title="Média Geral"

                value={stats.averageGrade.toFixed(1)}

                icon={<Activity size={22} />}

                iconBackground="#EEF2FF"

                iconColor="#6D28D9"

                trend={{

                    value: stats.averageGrade.toFixed(1),

                    color: "success",

                    description: "média dos alunos",

                }}

            />

            <EveMetricCard

                title="Alunos Aprovados"

                value={stats.approvedStudents.toLocaleString("pt-BR")}

                icon={<CheckCircle size={22} />}

                iconBackground="#ECFDF5"

                iconColor="#10B981"

                subtitle={`${stats.totalStudents === 0
                    ? 0
                    : (
                        stats.approvedStudents /
                        stats.totalStudents *
                        100
                    ).toFixed(1)}% dos alunos`}

            />

            <EveMetricCard

                title="Em Recuperação"

                value={stats.recoveryStudents.toLocaleString("pt-BR")}

                icon={<Award size={22} />}

                iconBackground="#FEF3C7"

                iconColor="#F59E0B"

                trend={{

                    value: stats.recoveryStudents.toLocaleString("pt-BR"),

                    color: "warning",

                    description: "precisam de atenção",

                }}

            />

            <EveMetricCard

                title="Maior Média"

                value={stats.highestGrade.toFixed(1)}

                icon={<GraduationCap size={22} />}

                iconBackground="#EFF6FF"

                iconColor="#2563EB"

                subtitle="Maior média encontrada"

            />

        </section>

    );

};

export default GradesStats;