import "./SubjectsSummary.css";

import {
    BookOpen,
    GraduationCap,
    Users,
    Clock3,
} from "lucide-react";


import type { SubjectsModel } from "../../data/mockSubjects";
import Panel from "../../../../components/UI/Panel/Panel";

interface SubjectsSummaryProps {

    subjects: SubjectsModel[];

}

const SubjectsSummary = ({
    subjects,
}: SubjectsSummaryProps) => {

    const totalSubjects = subjects.length;

    const totalTeachers = new Set(
        subjects.map(subject => subject.teacher)
    ).size;

    const totalCourses = new Set(
        subjects.map(subject => subject.course)
    ).size;

    const totalWorkload = subjects.reduce(
        (total, subject) => total + subject.workload,
        0
    );

    return (

        <Panel title="Resumo Geral">

            <div className="subjects-summary">

                <div className="summary-item">

                    <BookOpen size={18} />

                    <div>

                        <strong>{totalSubjects}</strong>

                        <span>disciplinas cadastradas</span>

                    </div>

                </div>

                <div className="summary-item">

                    <Users size={18} />

                    <div>

                        <strong>{totalTeachers}</strong>

                        <span>professores envolvidos</span>

                    </div>

                </div>

                <div className="summary-item">

                    <GraduationCap size={18} />

                    <div>

                        <strong>{totalCourses}</strong>

                        <span>cursos atendidos</span>

                    </div>

                </div>

                <div className="summary-item">

                    <Clock3 size={18} />

                    <div>

                        <strong>{totalWorkload} h</strong>

                        <span>carga horária total</span>

                    </div>

                </div>

            </div>

        </Panel>

    );

};

export default SubjectsSummary;