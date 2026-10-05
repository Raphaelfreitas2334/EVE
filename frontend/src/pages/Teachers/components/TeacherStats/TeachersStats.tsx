import "./TeachersStats.css";

import {
  GraduationCap,
  CircleCheck,
  CalendarClock,
  Clock3,
  UserPlus,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

interface TeacherStatsItem {
  status: string;
  workload?: string | number;
  admissionDate?: string;
}

interface TeachersStatsProps {
  teachers: TeacherStatsItem[];
}

const TeachersStats = ({ teachers }: TeachersStatsProps) => {
  const totalProfessores = teachers.length;

  const totalAtivos = teachers.filter(
    (teacher) => teacher.status === "Ativo"
  ).length;

  const totalEmLicenca = teachers.filter(
    (teacher) =>
      teacher.status === "Licença" || teacher.status === "Afastado"
  ).length;

  const workloads = teachers
    .map((teacher) =>
      Number(
        String(teacher.workload ?? "")
          .replace(",", ".")
          .replace(/[^\d.-]/g, "")
      )
    )
    .filter((workload) => Number.isFinite(workload) && workload > 0);

  const cargaHorariaMedia =
    workloads.length > 0
      ? workloads.reduce((total, workload) => total + workload, 0) /
        workloads.length
      : 0;

  const cargaHorariaFormatada = Number.isInteger(cargaHorariaMedia)
    ? cargaHorariaMedia.toString()
    : cargaHorariaMedia.toFixed(1).replace(".", ",");

  const agora = new Date();
  const mesAtual = agora.getMonth();
  const anoAtual = agora.getFullYear();

  const novosEsteMes = teachers.filter((teacher) => {
    if (!teacher.admissionDate) return false;

    // Evita problemas de fuso horário quando a data vem como YYYY-MM-DD.
    const dataAdmissao = new Date(
      teacher.admissionDate.length === 10
        ? `${teacher.admissionDate}T00:00:00`
        : teacher.admissionDate
    );

    return (
      !Number.isNaN(dataAdmissao.getTime()) &&
      dataAdmissao.getMonth() === mesAtual &&
      dataAdmissao.getFullYear() === anoAtual
    );
  }).length;

  const nomeMesAtual = agora.toLocaleDateString("pt-BR", {
    month: "long",
  });

  const percentualAtivos =
    totalProfessores > 0
      ? Math.round((totalAtivos / totalProfessores) * 100)
      : 0;

  return (
    <section className="teachers-stats">
      <EveStatCard
        title="Professores"
        value={String(totalProfessores)}
        subtitle="Total de professores cadastrados"
        icon={<GraduationCap size={28} />}
      />

      <EveStatCard
        title="Ativos"
        value={String(totalAtivos)}
        subtitle={`${percentualAtivos}% do quadro docente`}
        icon={<CircleCheck size={28} />}
      />

      <EveStatCard
        title="Em licença"
        value={String(totalEmLicenca)}
        subtitle="Licença médica e afastamentos"
        icon={<CalendarClock size={28} />}
      />

      <EveStatCard
        title="Carga horária média"
        value={`${cargaHorariaFormatada}h`}
        subtitle="Média semanal"
        icon={<Clock3 size={28} />}
      />

      <EveStatCard
        title="Novos este mês"
        value={String(novosEsteMes)}
        subtitle={`Admitidos em ${nomeMesAtual}`}
        icon={<UserPlus size={28} />}
      />
    </section>
  );
};

export default TeachersStats;