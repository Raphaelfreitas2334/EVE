import "./Students.css";

import { useState } from "react";

import EvePageHeader from "../../components/UI/PageHeader";
import Panel from "../../components/UI/Panel/Panel";

import StudentStats from "./components/StudentStats";
import StudentsFilters from "./components/StudentsFilters";

import CreateStudentDialog from "./dialogs/CreateStudentDialog";

import useStudents from "./hooks/useStudents";
import StudentTable from "./components/StudentTable/StudentTable";

const Students = () => {
    const [
        isCreateStudentDialogOpen,
        setIsCreateStudentDialogOpen,
    ] = useState(false);

    const {
        filters,
        stats,
        table,

        setCourse,
        setClassroom,
        setYear,
        setBimester,
        setPeriod,

        clearFilters,
    } = useStudents();

    return (
        <main className="students">
            {/* ==================================================
                CABEÇALHO
            ================================================== */}

            <EvePageHeader
                title="Alunos"
                subtitle="Gerencie os alunos da instituição e acompanhe seu desempenho acadêmico."
            />

            {/* ==================================================
                FILTROS
            ================================================== */}

            <StudentsFilters
                filters={filters}
                onCourseChange={setCourse}
                onClassroomChange={setClassroom}
                onYearChange={setYear}
                onBimesterChange={setBimester}
                onPeriodChange={setPeriod}
                onClearFilters={clearFilters}
            />

            {/* ==================================================
                INDICADORES
            ================================================== */}

            <StudentStats stats={stats} />

            {/* ==================================================
                TABELA
            ================================================== */}

            <section className="students-content">
                <main className="students-main">
                    <Panel title="Lista de Alunos">
                        <StudentTable
                            students={table.rows}
                            table={table}
                        />
                    </Panel>
                </main>
            </section>

            {/* ==================================================
                MODAL
            ================================================== */}

            <CreateStudentDialog
                open={isCreateStudentDialogOpen}
                onClose={() =>
                    setIsCreateStudentDialogOpen(false)
                }
            />
        </main>
    );
};

export default Students;