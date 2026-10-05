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

    table: {
        rows: GradesModel[];

        currentPage: number;

        totalPages: number;

        totalItems: number;

        pageSize: number;

        startItem: number;

        endItem: number;

        hasPrevious: boolean;

        hasNext: boolean;

        setCurrentPage: (
            page: number,
        ) => void;

        setPageSize: (
            size: number,
        ) => void;
    };

}

const GradesTable = ({
    rows,
    table,
}: GradesTableProps) => {

    const columns: EveDataTableColumn<GradesModel>[] = [

        {
            key: "name",

            title: "Aluno",

            width: "260px",

            render: (row) => (

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >

                    <UserRound
                        size={18}
                    />

                    {row.name}

                </div>

            ),
        },

        {
            key: "course",

            title: "Curso",

            width: "240px",
        },

        {
            key: "classroom",

            title: "Turma",

            width: "100px",
        },

        {
            key: "grade1",

            title: "1º Bim.",

            width: "100px",

            align: "center",

            render: (row) => (
                row.grade1.toFixed(1)
            ),
        },

        {
            key: "grade2",

            title: "2º Bim.",

            width: "100px",

            align: "center",

            render: (row) => (
                row.grade2.toFixed(1)
            ),
        },

        {
            key: "grade3",

            title: "3º Bim.",

            width: "100px",

            align: "center",

            render: (row) => (
                row.grade3.toFixed(1)
            ),
        },

        {
            key: "grade4",

            title: "4º Bim.",

            width: "100px",

            align: "center",

            render: (row) => (
                row.grade4.toFixed(1)
            ),
        },

        {
            key: "average",

            title: "Média",

            width: "100px",

            align: "center",

            render: (row) => (

                <strong>
                    {row.average.toFixed(2)}
                </strong>

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
                            : row.status === "Bom"
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

        <EveDataTable<GradesModel>

            rowKey="id"

            columns={columns}

            rows={rows}

            table={table}

            actions={(row) => (

                <EveButton
                    variant="outline"
                    size="sm"
                    icon={
                        <Eye
                            size={16}
                        />
                    }
                    onClick={() => {
                        console.log(row);
                    }}
                />

            )}

        />

    );
};

export default GradesTable;