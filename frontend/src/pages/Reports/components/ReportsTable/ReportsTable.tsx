import EveDataTable, { type EveDataTableColumn } from "../../../../components/UI/DataTable";
import type { ReportModel } from "../../data/mockReports";
import type useReports from "../../hooks/useReports";

interface ReportsTableProps {
    rows: ReportModel[];
    table: ReturnType<typeof useReports>["table"];
}

const ReportsTable = ({
    rows,
    table,
}: ReportsTableProps) => {
    // =========================================================
    // COLUNAS
    // =========================================================

    const columns: EveDataTableColumn<ReportModel>[] = [
        {
            key: "name",
            title: "Aluno",
            width: "260px",
            render: (report) => (
                <div className="reports-table-student">
                    <strong>
                        {report.name}
                    </strong>

                    <span>
                        {report.subject}
                    </span>
                </div>
            ),
        },

        {
            key: "course",
            title: "Curso",
            width: "240px",
            render: (report) => (
                <span>
                    {report.course}
                </span>
            ),
        },

        {
            key: "classroom",
            title: "Turma",
            width: "100px",
            align: "center",
            render: (report) => (
                <span>
                    {report.classroom}
                </span>
            ),
        },

        {
            key: "average",
            title: "Média",
            width: "90px",
            align: "center",
            render: (report) => (
                <strong className="reports-table-average">
                    {report.average.toFixed(1)}
                </strong>
            ),
        },

        {
            key: "status",
            title: "Status",
            width: "120px",
            align: "center",
            render: (report) => {
                const statusClass =
                    report.status
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(
                            /[\u0300-\u036f]/g,
                            ""
                        )
                        .replace(
                            /\s+/g,
                            "-"
                        );

                return (
                    <span
                        className={`reports-status reports-status-${statusClass}`}
                    >
                        {report.status}
                    </span>
                );
            },
        },

        {
            key: "date",
            title: "Data",
            width: "110px",
            align: "center",
            render: (report) => (
                <span>
                    {report.date}
                </span>
            ),
        },
    ];

    const tableState = {
        ...table,
        startItem:
            table.totalItems === 0
                ? 0
                : (table.currentPage - 1) * table.pageSize + 1,
        endItem: Math.min(
            table.currentPage * table.pageSize,
            table.totalItems
        ),
        hasPrevious: table.currentPage > 1,
        hasNext: table.currentPage < table.totalPages,
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <div className="reports-table-wrapper">
            <EveDataTable<ReportModel>
                columns={columns}
                rows={rows}
                table={tableState}
                rowKey="id"
                hoverRows={true}
                emptyTitle="Nenhum relatório encontrado"
                emptyDescription="Não existem alunos para os filtros selecionados."
            />
        </div>
    );
};

export default ReportsTable;