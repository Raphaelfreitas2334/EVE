import "./StudentStats.css";

import {
    GraduationCap,
    CircleCheck,
    TriangleAlert,
    CircleAlert,
    UserPlus,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

const StudentStats = () => {

    return(

        <section className="student-stats">

            <EveStatCard
                title="Alunos"
                value="1.245"
                subtitle="+12 este mês"
                icon={<GraduationCap size={28}/>}
            />

            <EveStatCard
                title="Ativos"
                value="1.180"
                subtitle="94% do total"
                icon={<CircleCheck size={28}/>}
            />

            <EveStatCard
                title="Em acompanhamento"
                value="48"
                subtitle="Baixa frequência"
                icon={<TriangleAlert size={28}/>}
            />

            <EveStatCard
                title="Em risco"
                value="17"
                subtitle="Previstos pela IA"
                icon={<CircleAlert size={28}/>}
            />

            <EveStatCard
                title="Novos"
                value="26"
                subtitle="Julho"
                icon={<UserPlus size={28}/>}
            />

        </section>

    );

};

export default StudentStats;