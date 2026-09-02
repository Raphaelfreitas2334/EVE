import {
    Eye,
    UserRound,
} from "lucide-react";

import EveBadge from "../../../../components/UI/Badge";
import EveButton from "../../../../components/UI/Button";
import EveDataTable, {
    type EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type {
    AttendanceModel,
} from "../../data/mockAttendance";

interface AttendanceTableProps {

    rows: AttendanceModel[];

}

const AttendanceTable = ({

    rows,

}: AttendanceTableProps) => {

    const columns: EveDataTableColumn<AttendanceModel>[] = [

        {
            key: "name",
            title: "Aluno",
            width: "2fr",

            render: (row) => (

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >

                    <UserRound size={18} />

                    {row.name}

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
            width: "120px",
            align: "center",

            render: (row) => {

                const totalClasses = row.attendance + row.absences;

                return `${row.attendance} / ${totalClasses}`;

            },

        },

        {
            key: "frequency",
            title: "Frequência",
            width: "120px",
            align: "center",

            render: (row) => (

                `${row.frequency.toFixed(1)}%`

            ),

        },

        {
            key: "status",
            title: "Status",
            width: "140px",
            align: "center",

            render: (row) => (

                <EveBadge

                    variant={

                        row.status === "Excelente"

                            ? "success"

                            : row.status === "Monitorar"

                                ? "info"

                                : row.status === "Atenção"

                                    ? "warning"

                                    : "danger"

                    }

                >

                    {row.status}

                </EveBadge>

            ),

        },

    ];

    return (

        <EveDataTable<AttendanceModel>

            rowKey="id"

            columns={columns}

            rows={rows}

            actions={(row) => (

                <EveButton

                    variant="outline"

                    size="sm"

                    icon={<Eye size={16} />}

                    onClick={() => {

                        console.log(row);

                    }}

                />

            )}

        />

    );

};

export default AttendanceTable;