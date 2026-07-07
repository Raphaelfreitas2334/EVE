import "./Dashboard.css";

import EvePageHeader from "../../components/UI/PageHeader";

import DashboardStats from "./components/DashboardStats/DashboardStats";

import DashboardInsights from "./components/DashboardInsights/DashboardInsights";

import IntelligenceCenter from "./components/IntelligenceCenter";
import DashboardCharts from "./components/DashboardCharts/DashboardCharts";
import DashboardPulse from "./components/DashboardPulse/DashboardPulse";
import DashboardActivities from "./components/DashboardActivities/DashboardActivities";
  

const Dashboard = () => {
  return (
    <main>

      <EvePageHeader
        title="Dashboard"
        subtitle="Veja os principais indicadores da sua instituição."
      />

      <DashboardStats />

      <DashboardActivities />

      <DashboardPulse />

      <IntelligenceCenter />

      <DashboardInsights />
      <br/>
      <DashboardCharts />

    </main>
  );
};

export default Dashboard;