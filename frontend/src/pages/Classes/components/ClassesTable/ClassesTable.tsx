
import "./ClassesTable.css";

import { MoreVertical } from "lucide-react";

import EveDataTable, {
    type EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type { ClassModel } from "../../data/mockClasses";

interface ClassesTableProps {
    classes: ClassModel[];
    table: {
        rows: ClassModel[];
        currentPage: number;
        totalPages: number;
        totalItems: number;
        pageSize: number;
        startItem: number;
        endItem: number;
        hasPrevious: boolean;
        hasNext: boolean;
        setCurrentPage: (page: number) => void;
        setPageSize: (size: number) => void;
    };
}

const ClassesTable = ({
    classes,
    table,
}: ClassesTableProps) => {

    const columns: EveDataTableColumn<ClassModel>[] = [
        {
            key: "name",
            title: "Turma",
            width: "minmax(180px, 1.5fr)",
            render: (classItem) => (
                <div className="classes-table-class">
                    <strong>{classItem.name}</strong>
                    <span>{classItem.course}</span>
                </div>
            ),
        },
        {
            key: "teacher",
            title: "Professor",
            width: "minmax(150px, 1.2fr)",
        },
        {
            key: "students",
            title: "Alunos",
            width: "100px",
            align: "center",
            render: (classItem) => (
                <span>
                    {classItem.students}/{classItem.vacancies}
                </span>
            ),
        },
        {
            key: "period",
            title: "Período",
            width: "110px",
        },
        {
            key: "status",
            title: "Status",
            width: "140px",
            align: "center",
            render: (classItem) => {
                const statusClass = classItem.status
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "-");

                return (
                    <span
                        className={`classes-table-status classes-table-status-${statusClass}`}
                    >
                        {classItem.status}
                    </span>
                );
            },
        },
    ];

    return (
        <div className="classes-table-wrapper">
            <EveDataTable<ClassModel>
                columns={columns}
                rows={classes}
                table={table}
                rowKey="id"
                hoverRows={true}
                actions={(classItem) => (
                    <button
                        type="button"
                        className="classes-table-action"
                        aria-label={`Ações para a turma ${classItem.name}`}
                        onClick={() => console.log("Ações da turma:", classItem)}
                    >
                        <MoreVertical size={18} />
                    </button>
                )}
                actionsTitle="Ações"
                actionsWidth="60px"
                emptyTitle="Nenhuma turma encontrada"
                emptyDescription="Tente alterar os filtros ou cadastre uma nova turma."
            />
        </div>
    );
};

export default ClassesTable;