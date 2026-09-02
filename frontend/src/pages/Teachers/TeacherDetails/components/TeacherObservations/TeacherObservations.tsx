import "./TeacherObservations.css";

import { MessageSquare, CalendarDays } from "lucide-react";

const observations = [
  {
    id: 1,
    date: "15/07/2026",
    author: "Coordenação",
    description:
      "Professor participou da reunião pedagógica e apresentou melhorias para o planejamento das aulas.",
  },
  {
    id: 2,
    date: "28/06/2026",
    author: "Direção",
    description:
      "Solicitou alteração no horário das turmas do período noturno.",
  },
  {
    id: 3,
    date: "10/06/2026",
    author: "Coordenação",
    description:
      "Recebeu elogios dos alunos pelo desempenho nas aulas práticas.",
  },
];

const TeacherObservations = () => {
  return (
    <section className="teacher-observations">
      <header className="teacher-observations-header">
        <h3>Observações</h3>
      </header>

      <div className="teacher-observations-list">
        {observations.map((item) => (
          <article key={item.id} className="teacher-observation-card">
            <div className="teacher-observation-icon">
              <MessageSquare size={20} />
            </div>

            <div className="teacher-observation-content">
              <div className="teacher-observation-top">
                <strong>{item.author}</strong>

                <span>
                  <CalendarDays size={15} />

                  {item.date}
                </span>
              </div>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeacherObservations;
