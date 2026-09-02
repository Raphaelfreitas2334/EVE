import "./ClassesTableRow.css";

import { MoreVertical } from "lucide-react";

import EveBadge from "../../../../components/UI/Badge";
import type { ClassModel } from "../../data/mockClasses";

interface ClassesTableRowProps {
    classItem: ClassModel;
}

const ClassesTableRow = ({
    classItem,
}: ClassesTableRowProps) => {
    return (
        <article className="classes-table-row">

            <div className="class-info">

                <strong>{classItem.name}</strong>

                <small>{classItem.course}</small>

            </div>

            <span>{classItem.teacher}</span>

            <span>
                {classItem.students}/{classItem.vacancies}
            </span>

            <span>{classItem.period}</span>

            <EveBadge
                variant={
                    classItem.status === "Ativa"
                        ? "success"
                        : classItem.status === "Planejada"
                        ? "warning"
                        : "danger"
                }
            >
                {classItem.status}
            </EveBadge>

            <button className="table-action">
                <MoreVertical size={18} />
            </button>

        </article>
    );
};

export default ClassesTableRow;