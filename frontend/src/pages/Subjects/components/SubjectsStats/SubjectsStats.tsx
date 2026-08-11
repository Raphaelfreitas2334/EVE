import "./SubjectsStats.css";

import {
    BookOpen,
    Clock3,
    Users,
    GraduationCap,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

import type { SubjectsModel } from "../../data/mockSubjects";

interface SubjectsStatsProps {

    subjects: SubjectsModel[];

}

const SubjectsStats = ({
    subjects,
}: SubjectsStatsProps) => {

    const totalSubjects = subjects.length;

    const totalCourses = new Set(
        subjects.map((item) => item.course)
    ).size;

    const totalTeachers = new Set(
        subjects.map((item) => item.teacher)
    ).size;

    const totalWorkload = subjects.reduce(
        (total, item) => total + item.workload,
        0
    );

    return (

        <section className="subjects-stats">

            <EveStatCard
                title="Disciplinas Cadastradas"
                value={totalSubjects.toString()}
                icon={<BookOpen size={26} />}
                trend={{
                    value: "▲ 8%",
                    description: "em relação ao mês passado",
                    color: "success",
                }}
            />

            <EveStatCard
                title="Carga Horária Total"
                value={`${totalWorkload.toLocaleString("pt-BR")} h`}
                icon={<Clock3 size={26} />}
                subtitle="Distribuída em todos os cursos"
            />

            <EveStatCard
                title="Professores Envolvidos"
                value={totalTeachers.toString()}
                icon={<Users size={26} />}
                subtitle="Ativos lecionando disciplinas"
            />

            <EveStatCard
                title="Cursos Atendidos"
                value={totalCourses.toString()}
                icon={<GraduationCap size={26} />}
                subtitle="Com disciplinas vinculadas"
            />

        </section>

    );

};

export default SubjectsStats;