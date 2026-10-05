import "./TeacherTable.css";

import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";

import EveBadge from "../../../../components/UI/Badge";
import EveContextMenu from "../../../../components/Navigation/ContextMenu";

import EveDataTable, {
    type EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type { Teacher } from "../../data/Teachers";
import { createTeachersMenu } from "./config/TeachersMenu";

interface TeachersTableProps {
    teachers: Teacher[];
}


const TeacherTable = ({ teachers }: TeachersTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const sortedTeachers = useMemo(() => {
        return [...teachers].sort((a, b) => {
            const result = a.fullName.localeCompare(b.fullName, "pt-BR");

            return sortDirection === "asc" ? result : -result;
        });
    }, [teachers, sortDirection]);

    const totalItems = sortedTeachers.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const page = Math.min(currentPage, totalPages);
    const startIndex = (page - 1) * pageSize;

    const pageRows = sortedTeachers.slice(
        startIndex,
        startIndex + pageSize,
    );

    const getInitials = (name: string) =>
        name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase();

    const getStatusVariant = (status: Teacher["status"]) => {
        switch (status) {
            case "Ativo":
                return "success";
            case "Licença":
                return "warning";
            case "Afastado":
                return "danger";
            case "Férias":
                return "info";
            default:
                return "gray";
        }
    };

    const columns: EveDataTableColumn<Teacher>[] = [
                {
            key: "fullName",
            title: (
                <button
                    type="button"
                    className="teacher-table-sort"
                    onClick={() => {
                        setSortDirection((current) =>
                            current === "asc" ? "desc" : "asc",
                        );
                        setCurrentPage(1);
                    }}
                >
                    PROFESSOR
                    <ArrowUpDown size={14} />
                </button>
            ),
            width: "minmax(280px, 2fr)",
            render: (teacher) => (
                <div className="teacher-table-identity">
                    <div className="teacher-table-avatar">
                        {getInitials(teacher.fullName)}
                    </div>

                    <div className="teacher-table-person">
                        <strong>{teacher.fullName}</strong>
                        <span>{teacher.email}</span>
                    </div>
                </div>
            ),
        },
        {
            key: "discipline",
            title: "DISCIPLINA",
            width: "minmax(160px, 1.2fr)",
        },
        {
            key: "category",
            title: "CATEGORIA",
            width: "130px",
        },
        {
            key: "workload",
            title: "CARGA HORÁRIA",
            width: "130px",
            align: "center",
            render: (teacher) => `${teacher.workload}h`,
        },
        {
            key: "status",
            title: "STATUS",
            width: "120px",
            align: "center",
            render: (teacher) => (
                <EveBadge variant={getStatusVariant(teacher.status)}>
                    {teacher.status}
                </EveBadge>
            ),
        },
    ];

    const table = {
        rows: pageRows,
        currentPage: page,
        totalPages,
        totalItems,
        pageSize,
        startItem: totalItems === 0 ? 0 : startIndex + 1,
        endItem: Math.min(startIndex + pageSize, totalItems),
        hasPrevious: page > 1,
        hasNext: page < totalPages,

        setCurrentPage: (nextPage: number) => {
            setCurrentPage(Math.min(Math.max(nextPage, 1), totalPages));
        },

        setPageSize: (size: number) => {
            setPageSize(size);
            setCurrentPage(1);
        },
    };

    return (
        <div className="teacher-table">
            <EveDataTable<Teacher>
                rowKey="id"
                columns={columns}
                rows={pageRows}
                table={table}
                hoverRows
                actions={(teacher) => (
                    <EveContextMenu
                        items={createTeachersMenu(teacher.fullName)}
                    />
                )}
                actionsTitle="AÇÕES"
                actionsWidth="72px"
                emptyTitle="Nenhum professor encontrado"
                emptyDescription="Não há professores cadastrados para exibir."
            />
        </div>
    );
};

export default TeacherTable;