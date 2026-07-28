import "./ClassesSummary.css";

import {
    GraduationCap,
    Users,
    UserCheck,
    CalendarDays,
} from "lucide-react";

import Panel from "../../../../components/UI/Panel/Panel";

import type { ClassModel } from "../../data/mockClasses";

interface ClassesSummaryProps {
    classes: ClassModel[];
}

const ClassesSummary = ({
    classes,
}: ClassesSummaryProps) => {

    const totalStudents = classes.reduce(
        (total, item) => total + item.students,
        0
    );

    const activeClasses = classes.filter(
        (item) => item.status === "Ativa"
    ).length;

    const averageStudents =
        classes.length > 0
            ? Math.round(totalStudents / classes.length)
            : 0;

    return (

        <Panel title="Resumo Inteligente">

            <div className="classes-summary">

                <div className="summary-item">

                    <GraduationCap size={18} />

                    <div>

                        <strong>{classes.length}</strong>

                        <span>turmas cadastradas</span>

                    </div>

                </div>

                <div className="summary-item">

                    <Users size={18} />

                    <div>

                        <strong>{averageStudents}</strong>

                        <span>alunos por turma</span>

                    </div>

                </div>

                <div className="summary-item">

                    <UserCheck size={18} />

                    <div>

                        <strong>{activeClasses}</strong>

                        <span>turmas ativas</span>

                    </div>

                </div>

                <div className="summary-item">

                    <CalendarDays size={18} />

                    <div>

                        <strong>{totalStudents}</strong>

                        <span>alunos matriculados</span>

                    </div>

                </div>

            </div>

        </Panel>

    );

};

export default ClassesSummary;