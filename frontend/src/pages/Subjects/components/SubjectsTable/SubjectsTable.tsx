import "./SubjectsTable.css";

import { useMemo } from "react";

import EveBadge from "../../../../components/UI/Badge";
import EveContextMenu from "../../../../components/Navigation/ContextMenu";
import EveDataTable, {
  type EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type { SubjectsModel } from "../../data/mockSubjects";
import type useSubjects from "../../hooks/useSubjects";

import { createSubjectsMenu } from "../../config/SubjectsMenu";

interface SubjectsTableProps {
  subjects: SubjectsModel[];
  table: ReturnType<typeof useSubjects>["table"];
}

const SubjectsTable = ({ subjects, table }: SubjectsTableProps) => {
  const columns = useMemo<EveDataTableColumn<SubjectsModel>[]>(
    () => [
      {
        key: "name",
        title: "Disciplina",
        width: "220px",
        render: (subject) => (
          <div className="subjects-info">
            <strong>{subject.name}</strong>
            <small>
              {subject.course} • {subject.workload} h
            </small>
          </div>
        ),
      },
      {
        key: "teacher",
        title: "Professor",
        width: "180px",
      },
      {
        key: "students",
        title: "Alunos",
        width: "110px",
        align: "center",
        render: (subject) => (
          <span className="subjects-students">
            <strong>{subject.students}</strong>
            <small>/ {subject.vacancies}</small>
          </span>
        ),
      },
      {
        key: "period",
        title: "Período",
        width: "130px",
      },
      {
        key: "status",
        title: "Status",
        width: "120px",
        align: "center",
        render: (subject) => {
          const variant =
            subject.status === "Ativa"
              ? "success"
              : subject.status === "Planejada"
                ? "warning"
                : "danger";

          return <EveBadge variant={variant}>{subject.status}</EveBadge>;
        },
      },
    ],
    []
  );

  return (
    <div className="subjects-data-table">
      <EveDataTable<SubjectsModel>
        rowKey="id"
        columns={columns}
        rows={subjects}
        table={table}
        hoverRows
        actions={(subject) => (
          <EveContextMenu
            items={createSubjectsMenu({
              subjectsName: subject.name,
              subjectsId: subject.id,
              onOpenAdvanced: () => {},
            })}
          />
        )}
        actionsTitle="AÇÕES"
        actionsWidth="60px"
        emptyTitle="Nenhuma disciplina encontrada"
        emptyDescription="Tente alterar os filtros ou cadastre uma nova disciplina."
      />
    </div>
  );
};

export default SubjectsTable;