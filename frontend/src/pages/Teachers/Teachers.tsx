import "./Teachers.css";

import { useMemo, useState } from "react";

import { teachers } from "./data/Teachers";

import TeachersStats from "./components/TeacherStats";
import TeachersSearch from "./components/TeacherSearch";
import TeachersContext from "./components/TeacherContext";
import TeachersTable from "./components/TeacherTable";
import CreateTeachersDialog from "./dialogs/CreateTeacherDialog";

const Teachers = () => {
    const [isCreateTeachersDialogOpen, setIsCreateTeachersDialogOpen] =
        useState(false);

    const [discipline, setDiscipline] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const disciplineOptions = useMemo(
        () => [...new Set(teachers.map((teacher) => teacher.discipline))],
        [],
    );

    const categoryOptions = useMemo(
        () => [...new Set(teachers.map((teacher) => teacher.category))],
        [],
    );

    const statusOptions = useMemo(
        () => [...new Set(teachers.map((teacher) => teacher.status))],
        [],
    );

    const filteredTeachers = useMemo(() => {
        return teachers.filter((teacher) => {
            return (
                (!discipline || teacher.discipline === discipline) &&
                (!category || teacher.category === category) &&
                (!status || teacher.status === status)
            );
        });
    }, [discipline, category, status]);

    const clearFilters = () => {
        setDiscipline("");
        setCategory("");
        setStatus("");
    };

    return (
        <main>
            <TeachersStats teachers={filteredTeachers} />

            <TeachersSearch
                onCreateTeacher={() => setIsCreateTeachersDialogOpen(true)}
            />

            <TeachersContext
                discipline={discipline}
                category={category}
                status={status}
                disciplineOptions={disciplineOptions}
                categoryOptions={categoryOptions}
                statusOptions={statusOptions}
                onDisciplineChange={setDiscipline}
                onCategoryChange={setCategory}
                onStatusChange={setStatus}
                onClearFilters={clearFilters}
            />

            <TeachersTable teachers={filteredTeachers} />

            <CreateTeachersDialog
                open={isCreateTeachersDialogOpen}
                onClose={() => setIsCreateTeachersDialogOpen(false)}
            />
        </main>
    );
};

export default Teachers;