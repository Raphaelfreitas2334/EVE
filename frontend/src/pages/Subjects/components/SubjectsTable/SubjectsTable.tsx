import "./SubjectsTable.css";

import EveTable, {
    EveTableHeader,
    EveTableBody,
} from "../../../../components/UI/Table";

import EmptyState from "../../../../components/UI/EmptyState";

import type { SubjectsModel } from "../../data/mockSubjects";

import SubjectsTableRow from "../SubjectsTableRow";

interface SubjectsTableProps {

    subjects: SubjectsModel[];

}

const SubjectsTable = ({
    subjects,
}: SubjectsTableProps) => {

    return (

        <EveTable>

            <EveTableHeader>

                <div className="subjects-table-header">

                    <span>Disciplina</span>

                    <span>Professor</span>

                    <span>Alunos</span>

                    <span>Período</span>

                    <span>Status</span>

                    <span></span>

                </div>

            </EveTableHeader>

            <EveTableBody>

                {subjects.length > 0 ? (

                    subjects.map((subject) => (

                        <SubjectsTableRow
                            key={subject.id}
                            subjectsItem={subject}
                        />

                    ))

                ) : (

                    <EmptyState
                        title="Nenhuma disciplina encontrada"
                        description="Tente alterar os filtros ou cadastre uma nova disciplina."
                    />

                )}

            </EveTableBody>

        </EveTable>

    );

};

export default SubjectsTable;