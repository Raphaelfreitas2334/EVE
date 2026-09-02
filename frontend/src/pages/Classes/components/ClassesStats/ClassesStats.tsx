import "./ClassesStats.css";

import {
    GraduationCap,
    Users,
    UserCheck,
    BookOpen,
} from "lucide-react";

import EveStatCard from "../../../../components/UI/StatCard";

import type { ClassModel } from "../../data/mockClasses";

interface ClassesStatsProps {

    classes: ClassModel[];

}

const ClassesStats = ({
    classes,
}: ClassesStatsProps) => {

    const totalClasses = classes.length;

    const totalStudents = classes.reduce(
        (total, item) => total + item.students,
        0
    );

    const activeClasses = classes.filter(
        (item) => item.status === "Ativa"
    ).length;

    const totalCourses = new Set(
        classes.map((item) => item.course)
    ).size;

    return (

        <section className="classes-stats">

            <EveStatCard
                title="Turmas"
                value={totalClasses.toString()}
                subtitle="Total cadastradas"
                icon={<GraduationCap size={28} />}
            />

            <EveStatCard
                title="Alunos"
                value={totalStudents.toString()}
                subtitle="Matriculados"
                icon={<Users size={28} />}
            />

            <EveStatCard
                title="Turmas Ativas"
                value={activeClasses.toString()}
                subtitle="Em andamento"
                icon={<UserCheck size={28} />}
            />

            <EveStatCard
                title="Cursos"
                value={totalCourses.toString()}
                subtitle="Disponíveis"
                icon={<BookOpen size={28} />}
            />

        </section>

    );

};

export default ClassesStats;