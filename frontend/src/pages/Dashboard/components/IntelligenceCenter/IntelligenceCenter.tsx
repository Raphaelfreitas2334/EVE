import "./IntelligenceCenter.css";

import EveCard from "../../../../components/UI/Card";

import {
  BrainCircuit,
  TriangleAlert,
  TrendingUp,
  School,
} from "lucide-react";

const insights = [
  {
    icon: <TriangleAlert size={22} />,
    title: "Alunos em risco",
    description: "3 alunos apresentam alto risco de evasão.",
    action: "Abrir lista",
    type: "danger",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Matrículas",
    description: "As matrículas cresceram 12% este mês.",
    action: "Ver relatório",
    type: "success",
  },
  {
    icon: <School size={22} />,
    title: "Frequência",
    description: "A Turma DS-2 caiu 8% na última semana.",
    action: "Abrir turma",
    type: "warning",
  },
];

const IntelligenceCenter = () => {
  return (
    <section className="intelligence-center">

      <div className="intelligence-title">

        <BrainCircuit size={28} />

        <div>

          <h2>Centro de Inteligência</h2>

          <p>
            Informações importantes para hoje.
          </p>

        </div>

      </div>

      <div className="intelligence-grid">

        {insights.map((item) => (

          <EveCard key={item.title}>

            <div className={`insight-icon ${item.type}`}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button className="insight-button">
              {item.action} →
            </button>

          </EveCard>

        ))}

      </div>

    </section>
  );
};

export default IntelligenceCenter;