import { useParams } from "react-router-dom";
import "./TeacherDetails.css";

import TeacherDetailsHeader from "./components/TeacherDetailsHeader";
import TeacherProfile from "./components/TeacherProfile";
import TeacherTabs from "./components/TeacherTabs";

const TeacherDetails = () => {
  const { teacherId } = useParams();

  console.log(teacherId);

  return (
    <main className="teacher-details">
      <TeacherDetailsHeader />

      <TeacherProfile />

      <TeacherTabs />
    </main>
  );
};

export default TeacherDetails;
