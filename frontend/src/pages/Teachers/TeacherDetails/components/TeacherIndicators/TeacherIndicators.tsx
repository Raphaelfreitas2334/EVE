import "./TeacherIndicators.css";

import {
  TrendingUp,
  Users,
  CheckCircle2,
  GraduationCap,
  AlertTriangle,
  Star,
} from "lucide-react";

const indicators = [
  {
    id: 1,
    title: "Aprovação",
    value: "98%",
    subtitle: "Alunos aprovados",
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: "Frequência",
    value: "95%",
    subtitle: "Média de presença",
    icon: Users,
  },
  {
    id: 3,
    title: "Média Geral",
    value: "8.9",
    subtitle: "Notas da turma",
    icon: Star,
  },
  {
    id: 4,
    title: "Turmas",
    value: "4",
    subtitle: "Turmas ativas",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Evasão",
    value: "2%",
    subtitle: "Índice atual",
    icon: AlertTriangle,
  },
  {
    id: 6,
    title: "Desempenho",
    value: "+12%",
    subtitle: "Comparado ao semestre anterior",
    icon: TrendingUp,
  },
];

const TeacherIndicators = () => {
  return (
    <section className="teacher-indicators">
      <header className="teacher-indicators-header">
        <h3>Indicadores</h3>
      </header>

      <div className="teacher-indicators-grid">
        {indicators.map((indicator) => {
          const Icon = indicator.icon;

          return (
            <article key={indicator.id} className="teacher-indicator-card">
              <div className="teacher-indicator-icon">
                <Icon size={26} />
              </div>

              <div className="teacher-indicator-content">
                <span className="teacher-indicator-title">
                  {indicator.title}
                </span>

                <h2>{indicator.value}</h2>

                <p>{indicator.subtitle}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TeacherIndicators;
