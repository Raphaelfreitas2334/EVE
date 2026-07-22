import "./TeacherSchedule.css";

import { Clock3, BookOpen } from "lucide-react";

const lessons = [
  {
    time: "08:00",
    classroom: "ADS-1",
    subject: "Programação Front-End",
  },
  {
    time: "10:00",
    classroom: "ADS-2",
    subject: "Git e GitHub",
  },
  {
    time: "14:00",
    classroom: "DS-1",
    subject: "React",
  },
  {
    time: "19:00",
    classroom: "ADS-3",
    subject: "TypeScript",
  },
];

const TeacherSchedule = () => {
  return (
    <section className="teacher-schedule">
      <header className="teacher-schedule-header">
        <h3>Agenda de Hoje</h3>
      </header>

      <div className="teacher-schedule-list">
        {lessons.map((lesson) => (
          <article
            key={`${lesson.time}-${lesson.classroom}`}
            className="teacher-schedule-card"
          >
            <div className="teacher-schedule-time">
              <Clock3 size={18} />

              <span>{lesson.time}</span>
            </div>

            <div className="teacher-schedule-info">
              <strong>{lesson.classroom}</strong>

              <span>
                <BookOpen size={15} />

                {lesson.subject}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeacherSchedule;
