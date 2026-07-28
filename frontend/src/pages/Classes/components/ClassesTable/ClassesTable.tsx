import "./ClassesTable.css";

import EveTable, {
    EveTableHeader,
    EveTableBody,
} from "../../../../components/UI/Table";

import EmptyState from "../../../../components/UI/EmptyState";
import ClassesTableRow from "../ClassesTableRow";

import type { ClassModel } from "../../data/mockClasses";

interface ClassesTableProps {
    classes: ClassModel[];
}

const ClassesTable = ({
    classes,
}: ClassesTableProps) => {

    return (

        <EveTable>

            <EveTableHeader>

                <div className="classes-table-header">

                    <span>Turma</span>

                    <span>Professor</span>

                    <span>Alunos</span>

                    <span>Período</span>

                    <span>Status</span>

                    <span></span>

                </div>

            </EveTableHeader>

            <EveTableBody>

                {classes.length > 0 ? (

                    classes.map((classItem) => (

                        <ClassesTableRow
                            key={classItem.id}
                            classItem={classItem}
                        />

                    ))

                ) : (

                    <EmptyState
                        title="Nenhuma turma encontrada"
                        description="Tente alterar os filtros ou cadastre uma nova turma."
                    />

                )}

            </EveTableBody>

        </EveTable>

    );

};

export default ClassesTable;