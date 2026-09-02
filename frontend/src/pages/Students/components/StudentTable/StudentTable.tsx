import "./StudentTable.css";

import StudentTableHeader from "./StudentTableHeader";
import StudentCardRow from "./StudentCardRow";
import { students } from "../../data/students";

const StudentTable = () => {
  return (
    <section className="student-table">
      <StudentTableHeader />

      {students.map((student) => (
        <StudentCardRow key={student.id} student={student} />
      ))}
    </section>
  );
};

export default StudentTable;
