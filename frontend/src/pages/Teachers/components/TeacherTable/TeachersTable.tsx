import "./TeachersTable.css";

import TeachersTableHeader from "./TeachersTableHeader";
import TeachersCardRow from "./TeachersCardRow";

import { teachers } from "../../data/Teachers";

const TeachersTable = () => {
  return (
    <section className="teachers-table">
      <TeachersTableHeader />

      {teachers.map((teacher) => (
        <TeachersCardRow key={teacher.id} teacher={teacher} />
      ))}
    </section>
  );
};

export default TeachersTable;
