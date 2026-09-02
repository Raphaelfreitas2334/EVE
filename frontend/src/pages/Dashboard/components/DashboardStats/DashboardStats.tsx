import "./DashboardStats.css";

import EveStatCard from "../../../../components/UI/StatCard";

import {
  GraduationCap,
  Users,
  School,
  ChartSpline,
} from "lucide-react";

const DashboardStats = () => {
  return (
    <section className="dashboard-stats">

      <EveStatCard
        title="Alunos"
        value="1.245"
        subtitle="+12 este mês"
        icon={<GraduationCap size={28} />}
      />

      <EveStatCard
        title="Professores"
        value="82"
        subtitle="+2 este mês"
        icon={<Users size={28} />}
      />

      <EveStatCard
        title="Turmas"
        value="36"
        subtitle="Todas ativas"
        icon={<School size={28} />}
      />

      <EveStatCard
        title="Frequência"
        value="94%"
        subtitle="Excelente"
        icon={<ChartSpline size={28} />}
      />

    </section>
  );
};

export default DashboardStats;