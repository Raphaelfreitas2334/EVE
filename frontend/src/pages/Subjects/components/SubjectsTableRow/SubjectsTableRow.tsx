import "./SubjectsTableRow.css";


import EveBadge from "../../../../components/UI/Badge";

import type { SubjectsModel } from "../../data/mockSubjects";
import EveContextMenu from "../../../../components/Navigation/ContextMenu";
import { createSubjectsMenu } from "../../config/SubjectsMenu";

interface SubjectsTableRowProps {

    subjectsItem: SubjectsModel;

}

const SubjectsTableRow = ({
    subjectsItem,
}: SubjectsTableRowProps) => {

    const badgeVariant =
        subjectsItem.status === "Ativa"
            ? "success"
            : subjectsItem.status === "Planejada"
                ? "warning"
                : "danger";

    return (

        <article className="subjects-table-row">

            <div className="subjects-info">

                <strong>

                    {subjectsItem.name}

                </strong>

                <small>

                    {subjectsItem.course} • {subjectsItem.workload} h

                </small>

            </div>

            <span className="subjects-teacher">

                {subjectsItem.teacher}

            </span>

            <span className="subjects-students">

                <strong>{subjectsItem.students}</strong>

                <small>/ {subjectsItem.vacancies}</small>

            </span>

            <span className="subjects-period">

                {subjectsItem.period}

            </span>

            <EveBadge variant={badgeVariant}>

                {subjectsItem.status}

            </EveBadge>


            <EveContextMenu
                items={createSubjectsMenu({
                    subjectsName: subjectsItem.name,
                    subjectsId: subjectsItem.id,
                    onOpenAdvanced: () => {},
                })}
            />

        </article>
    
    );

};

export default SubjectsTableRow;