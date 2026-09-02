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
    GradesModel,
} from "../../data/mockGrades";

interface GradesTableProps {
    rows: GradesModel[];
}

const GradesTable = ({
    rows,
}: GradesTableProps) => {

    const columns: EveDataTableColumn<GradesModel>[] = [

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
            key: "grade1",
            title: "1º Bim.",
            width: "90px",
            align: "center",

            render: (row) => (
                row.grade1.toFixed(1)
            ),
        },

        {
            key: "grade2",
            title: "2º Bim.",
            width: "90px",
            align: "center",

            render: (row) => (
                row.grade2.toFixed(1)
            ),
        },

        {
            key: "grade3",
            title: "3º Bim.",
            width: "90px",
            align: "center",

            render: (row) => (
                row.grade3.toFixed(1)
            ),
        },

        {
            key: "grade4",
            title: "4º Bim.",
            width: "90px",
            align: "center",

            render: (row) => (
                row.grade4.toFixed(1)
            ),
        },

        {
            key: "average",
            title: "Média",
            width: "90px",
            align: "center",

            render: (row) => (
                row.average.toFixed(1)
            ),
        },

        {
            key: "status",
            title: "Status",
            width: "130px",
            align: "center",

            render: (row) => {

                const variant =
                    row.status === "Excelente"
                        ? "success"
                        : row.status === "Bom"
                            ? "info"
                            : row.status === "Atenção"
                                ? "warning"
                                : "danger";

                return (
                    <EveBadge variant={variant}>
                        {row.status}
                    </EveBadge>
                );
            },
        },

    ];

    return (

        <EveDataTable<GradesModel>

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

export default GradesTable;