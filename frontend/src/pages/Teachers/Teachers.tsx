import "./Teachers.css";

import { useState } from "react";
import TeachersStats from "./components/TeacherStats";
import TeachersSearch from "./components/TeacherSearch";
import TeachersContext from "./components/TeacherContext";
import TeachersTable from "./components/TeacherTable";
import CreateTeachersDialog from "./dialogs/CreateTeacherDialog";

const Teachers = () => {
  const [isCreateTeachersDialogOpen, setIsCreateTeachersDialogOpen] =
    useState(false);

  return (
    <main>
      <TeachersStats />

      <TeachersSearch
        onCreateTeacher={() => setIsCreateTeachersDialogOpen(true)}
      />

      <TeachersContext />

      <TeachersTable />

      <CreateTeachersDialog
        open={isCreateTeachersDialogOpen}
        onClose={() => setIsCreateTeachersDialogOpen(false)}
      />
    </main>
  );
};

export default Teachers;
