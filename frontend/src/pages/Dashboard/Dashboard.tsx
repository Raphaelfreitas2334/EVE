import "./Dashboard.css";

import { GraduationCap, Users, School, ClipboardCheck } from "lucide-react";

import StatCard from "../../components/StatCard/StatCard";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Panel from "../../components/Panel/Panel";

const dashboard = {
  students: 1245,
  teachers: 82,
  classes: 36,
  attendance: "94%",
};

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <WelcomeCard name="Raphael" />

      <SectionTitle
        title="Indicadores"
        subtitle="Visão geral da instituição."
      />

      <div className="dashboard-stats">
        <StatCard
          title="Alunos"
          value={dashboard.students}
          icon={GraduationCap}
        />

        <StatCard title="Professores" value={dashboard.teachers} icon={Users} />

        <StatCard title="Turmas" value={dashboard.classes} icon={School} />

        <StatCard
          title="Frequência"
          value={dashboard.attendance}
          icon={ClipboardCheck}
        />

        <SectionTitle
          title="Análises"
          subtitle="Indicadores estratégicos da instituição."
        />

        <div className="dashboard-panels">
          <Panel title="Alunos em risco">Em breve...</Panel>

          <Panel title="Frequência por turma">Em breve...</Panel>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
