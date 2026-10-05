import "./StudentStats.css";

import {
    GraduationCap,
    CircleCheck,
    TriangleAlert,
    CircleAlert,
    UserPlus,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

interface StudentStatsProps {
    stats: {
        totalStudents: number;
        activeStudents: number;
        studentsInFollowUp: number;
        studentsAtRisk: number;
        newStudents: number;
        currentMonth: string;
    };
}

const StudentStats = ({ stats }: StudentStatsProps) => {
    return (
        <section className="student-stats">
            <EveStatCard
                title="Alunos"
                value={stats.totalStudents.toLocaleString("pt-BR")}
                subtitle="Total conforme os filtros"
                icon={<GraduationCap size={28} />}
            />

            <EveStatCard
                title="Ativos"
                value={stats.activeStudents.toLocaleString("pt-BR")}
                subtitle={
                    stats.totalStudents > 0
                        ? `${Math.round(
                              (stats.activeStudents / stats.totalStudents) * 100,
                          )}% do total filtrado`
                        : "Nenhum aluno encontrado"
                }
                icon={<CircleCheck size={28} />}
            />

            <EveStatCard
                title="Em acompanhamento"
                value={stats.studentsInFollowUp.toLocaleString("pt-BR")}
                subtitle="Alunos que precisam de atenção"
                icon={<TriangleAlert size={28} />}
            />

            <EveStatCard
                title="Em risco"
                value={stats.studentsAtRisk.toLocaleString("pt-BR")}
                subtitle="Alunos classificados em risco"
                icon={<CircleAlert size={28} />}
            />

            <EveStatCard
                title="Novos"
                value={stats.newStudents.toLocaleString("pt-BR")}
                subtitle={`Matrículas em ${stats.currentMonth}`}
                icon={<UserPlus size={28} />}
            />
        </section>
    );
};

export default StudentStats;