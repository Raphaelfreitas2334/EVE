import "./TeacherClasses.css";

import { GraduationCap, Users, Clock3 } from "lucide-react";

const classes = [
  {
    id: 1,
    name: "ADS-1",
    students: 35,
    period: "Manhã",
  },
  {
    id: 2,
    name: "ADS-2",
    students: 32,
    period: "Manhã",
  },
  {
    id: 3,
    name: "DS-1",
    students: 29,
    period: "Tarde",
  },
  {
    id: 4,
    name: "ADM-1",
    students: 41,
    period: "Noite",
  },
];

const TeacherClasses = () => {
  return (
    <section className="teacher-classes">
      <header className="teacher-classes-header">
        <h3>Turmas</h3>
      </header>

      <div className="teacher-classes-grid">
        {classes.map((item) => (
          <article key={item.id} className="teacher-class-card">
            <div className="teacher-class-icon">
              <GraduationCap size={28} />
            </div>

            <div className="teacher-class-content">
              <h4>{item.name}</h4>

              <div className="teacher-class-info">
                <span>
                  <Users size={16} />
                  {item.students} alunos
                </span>

                <span>
                  <Clock3 size={16} />
                  {item.period}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeacherClasses;
