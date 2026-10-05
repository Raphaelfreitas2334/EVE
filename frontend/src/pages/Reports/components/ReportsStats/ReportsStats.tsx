import EveMetricCard from "../../../../components/UI/MetricCard/EveMetricCard";


interface ReportsStatsData {
    totalStudents: number;
    averageGrade: number;
    approvedStudents: number;
    recoveryStudents: number;
    highestGrade: number;
}

interface ReportsStatsProps {
    stats: ReportsStatsData;
}

const ReportsStats = ({
    stats,
}: ReportsStatsProps) => {
    return (
        <section className="reports-stats">
            {/* =====================================================
                TOTAL DE ALUNOS
            ====================================================== */}

            <EveMetricCard
                title="Total de Alunos"
                value={stats.totalStudents.toLocaleString(
                    "pt-BR"
                )}
                description="Alunos encontrados nos filtros atuais"
                icon="👥"
            />

            {/* =====================================================
                MÉDIA GERAL
            ====================================================== */}

            <EveMetricCard
                title="Média Geral"
                value={stats.averageGrade.toFixed(1)}
                description="Média geral dos alunos"
                icon="📊"
                trend={{
                    value: `${stats.averageGrade.toFixed(
                        1
                    )}`,
                    description: "média atual",
                    color:
                        stats.averageGrade >= 6
                            ? "success"
                            : "danger",
                }}
            />

            {/* =====================================================
                ALUNOS APROVADOS
            ====================================================== */}

            <EveMetricCard
                title="Alunos Aprovados"
                value={stats.approvedStudents.toLocaleString(
                    "pt-BR"
                )}
                description="Alunos com média igual ou superior a 6"
                icon="✓"
                iconBackground="rgba(25, 135, 84, 0.12)"
                iconColor="#198754"
            />

            {/* =====================================================
                RECUPERAÇÃO
            ====================================================== */}

            <EveMetricCard
                title="Em Recuperação"
                value={stats.recoveryStudents.toLocaleString(
                    "pt-BR"
                )}
                description="Alunos que precisam de atenção"
                icon="⚠"
                iconBackground="rgba(255, 193, 7, 0.12)"
                iconColor="#ffc107"
            />

            {/* =====================================================
                MAIOR MÉDIA
            ====================================================== */}

            <EveMetricCard
                title="Maior Média"
                value={stats.highestGrade.toFixed(1)}
                description="Maior média encontrada"
                icon="🏆"
                iconBackground="rgba(13, 110, 253, 0.12)"
                iconColor="#0d6efd"
            />
        </section>
    );
};

export default ReportsStats;