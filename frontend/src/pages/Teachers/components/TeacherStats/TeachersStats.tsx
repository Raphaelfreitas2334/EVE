import "./TeachersStats.css";

import {
  GraduationCap,
  CircleCheck,
  CalendarClock,
  Clock3,
  UserPlus,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

const TeachersStats = () => {
  return (
    <section className="teachers-stats">
      <EveStatCard
        title="Professores"
        value="154"
        subtitle="Total de professores cadastrados"
        icon={<GraduationCap size={28} />}
      />

      <EveStatCard
        title="Ativos"
        value="147"
        subtitle="95% do quadro docente"
        icon={<CircleCheck size={28} />}
      />

      <EveStatCard
        title="Em licença"
        value="5"
        subtitle="Licença médica e afastamentos"
        icon={<CalendarClock size={28} />}
      />

      <EveStatCard
        title="Carga horária média"
        value="32h"
        subtitle="Média semanal"
        icon={<Clock3 size={28} />}
      />

      <EveStatCard
        title="Novos este mês"
        value="2"
        subtitle="Admitidos em julho"
        icon={<UserPlus size={28} />}
      />
    </section>
  );
};

export default TeachersStats;
