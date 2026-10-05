import {
    Eye,
    UserRound,
} from "lucide-react";

import EveBadge from "../../../../components/UI/Badge";
import EveButton from "../../../../components/UI/Button";
import EveDataTable from "../../../../components/UI/DataTable";

import type {
    EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type useAttendance from "../../hooks/useAttendance";
import type { AttendanceModel } from "../../data/mockAttendance";



interface AttendanceTableProps {
    rows: AttendanceModel[];
    table: ReturnType<typeof useAttendance>["table"];
}

const AttendanceTable = ({
    rows,
    table,
}: AttendanceTableProps) => {

    const columns: EveDataTableColumn<AttendanceModel>[] = [
        {
            key: "name",
            title: "Aluno",
            width: "2fr",
            render: (student) => (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <UserRound size={18} />
                    {student.name}
                </div>
            ),
        },
        {
            key: "course",
            title: "Curso",
            width: "2fr",
        },
        {
            key: "classroom",
            title: "Turma",
            width: "1fr",
        },
        {
            key: "attendance",
            title: "Presenças",
            align: "center",
            width: "120px",
            render: (student) => (
                <span>
                    {student.attendance} /{" "}
                    {student.attendance + student.absences}
                </span>
            ),
        },
        {
            key: "frequency",
            title: "Frequência",
            align: "center",
            width: "120px",
            render: (student) => (
                <span>
                    {student.frequency.toFixed(1).replace(".", ",")}%
                </span>
            ),
        },
        {
            key: "status",
            title: "Status",
            align: "center",
            width: "140px",
            render: (student) => {
                const variants = {
                    Excelente: "success",
                    Monitorar: "info",
                    Atenção: "warning",
                    Crítico: "danger",
                } as const;

                return (
                    <EveBadge variant={variants[student.status]}>
                        {student.status}
                    </EveBadge>
                );
            },
        },
    ];

    return (
        <EveDataTable<AttendanceModel>
            rowKey="id"
            columns={columns}
            rows={rows}
            table={table}
            actions={() => (
                <EveButton
                    variant="outline"
                    size="sm"
                    icon={<Eye size={16} />}
                />
            )}
            actionsTitle="Ações"
            actionsWidth="120px"
            emptyTitle="Nenhum registro encontrado"
            emptyDescription="Não há alunos para exibir com os filtros selecionados."
        />
    );
};

export default AttendanceTable;