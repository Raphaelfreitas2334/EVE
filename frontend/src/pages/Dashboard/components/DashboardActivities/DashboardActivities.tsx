import "./DashboardActivities.css";

import {
    ClipboardCheck,
    UserPlus,
    AlertTriangle,
    BookOpen,
    FileText,
} from "lucide-react";

import ActivityItem from "./components/ActivityItem";

const DashboardActivities = () => {

    return (

        <section className="dashboard-activities">

            <div className="dashboard-activities-header">

                <h2>Feed Institucional</h2>

                <p>
                    Últimas movimentações registradas no sistema.
                </p>

            </div>

            <div className="dashboard-activities-list">

                <ActivityItem
                    icon={<ClipboardCheck size={22}/>}
                    color="success"
                    title="Professor Carlos registrou presença"
                    subtitle="ADS-1 • há 5 minutos"
                />

                <ActivityItem
                    icon={<BookOpen size={22}/>}
                    color="primary"
                    title="Notas de Matemática publicadas"
                    subtitle="2º Bimestre"
                />

                <ActivityItem
                    icon={<UserPlus size={22}/>}
                    color="warning"
                    title="Novo aluno matriculado"
                    subtitle="Curso de Data Science"
                />

                <ActivityItem
                    icon={<AlertTriangle size={22}/>}
                    color="danger"
                    title="Professor João não lançou frequência"
                    subtitle="Turma DS-2"
                />

                <ActivityItem
                    icon={<FileText size={22}/>}
                    color="primary"
                    title="Relatório mensal gerado"
                    subtitle="Hoje às 08:45"
                />

            </div>

        </section>

    );

};

export default DashboardActivities;