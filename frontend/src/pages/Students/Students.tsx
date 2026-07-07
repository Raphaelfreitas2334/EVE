import "./Students.css";

import { useState } from "react";

import StudentHeader from "./components/StudentHeader";
import StudentStats from "./components/StudentStats";
import StudentSearch from "./components/StudentSearch";
import StudentContext from "./components/StudentContext";
import StudentTable from "./components/StudentTable";

import CreateStudentDialog from "./dialogs/CreateStudentDialog";

const Students = () => {
  const [isCreateStudentDialogOpen, setIsCreateStudentDialogOpen] =
    useState(false);

  return (
    <main>
      <StudentHeader />

      <StudentStats />

      <StudentSearch
        onCreateStudent={() => setIsCreateStudentDialogOpen(true)}
      />

      <StudentContext />

      <StudentTable />

      <CreateStudentDialog
        open={isCreateStudentDialogOpen}
        onClose={() => setIsCreateStudentDialogOpen(false)}
      />
    </main>
  );
};

export default Students;
