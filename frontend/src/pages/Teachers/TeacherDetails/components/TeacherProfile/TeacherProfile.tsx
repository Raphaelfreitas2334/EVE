import EveAvatar from "../../../../../components/UI/Avatar";
import "./TeacherProfile.css";

import {
  Mail,
  Phone,
  BadgeCheck,
  BookOpen,
  Clock3,
  CalendarDays,
} from "lucide-react";

const TeacherProfile = () => {
  return (
    <section className="teacher-profile">
      <div className="teacher-profile-top">
        <EveAvatar name="Raphael Santos" size={96} />

        <h2>Raphael Santos</h2>

        <span className="teacher-profile-role">Professor PAEET</span>

        <span className="teacher-profile-status">● Ativo</span>
      </div>

      <div className="teacher-profile-info">
        <div className="teacher-profile-item">
          <Mail size={18} />

          <span>raphael@eve.com</span>
        </div>

        <div className="teacher-profile-item">
          <Phone size={18} />

          <span>(11) 99999-9999</span>
        </div>

        <div className="teacher-profile-item">
          <BadgeCheck size={18} />

          <span>Matrícula: PRF0001</span>
        </div>

        <div className="teacher-profile-item">
          <BookOpen size={18} />

          <span>Programação Front-End</span>
        </div>

        <div className="teacher-profile-item">
          <Clock3 size={18} />

          <span>32 horas semanais</span>
        </div>

        <div className="teacher-profile-item">
          <CalendarDays size={18} />

          <span>Desde 03/02/2025</span>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;
