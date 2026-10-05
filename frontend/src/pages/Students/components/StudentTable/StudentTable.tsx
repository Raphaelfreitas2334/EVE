import "./StudentTable.css";

import EveDataTable, {
    type EveDataTableColumn,
} from "../../../../components/UI/DataTable";

import type { Student } from "../../data/students";
import type { TableState } from "../../../../components/UI/TablePagination";

interface StudentTableProps {
    students: Student[];
    table: TableState<Student>;
}

const StudentTable = ({
    students,
    table,
}: StudentTableProps) => {

    const columns: EveDataTableColumn<Student>[] = [
        {
            key: "name",
            title: "Aluno",
            width: "minmax(200px, 1.5fr)",
            render: (student) => (
                <div className="student-table-student">
                    <div className="student-table-student-info">
                        <strong>{student.name}</strong>
                        <span>Matrícula #{student.id}</span>
                    </div>
                </div>
            ),
        },
        {
            key: "course",
            title: "Curso",
            width: "minmax(160px, 1.2fr)",
        },
        {
            key: "classroom",
            title: "Turma",
            width: "110px",
            align: "center",
        },
        {
            key: "attendance",
            title: "Frequência",
            width: "120px",
            align: "center",
            render: (student) => (
                <strong>
                    {student.attendance}%
                </strong>
            ),
        },
        {
            key: "average",
            title: "Média",
            width: "90px",
            align: "center",
            render: (student) => (
                <strong>
                    {student.average.toFixed(1)}
                </strong>
            ),
        },
        {
            key: "status",
            title: "Status",
            width: "130px",
            align: "center",
        },
        {
            key: "alerts",
            title: "Alertas",
            width: "90px",
            align: "center",
        },
    ];

    return (
        <EveDataTable<Student>
            columns={columns}
            rows={students}
            table={table}
            rowKey="id"
            hoverRows={true}
            emptyTitle="Nenhum aluno encontrado"
            emptyDescription="Não existem alunos para os filtros selecionados."
        />
    );
};

export default StudentTable;