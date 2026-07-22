import "./TeacherTabs.css";

import { useState } from "react";

const tabs = [
  "Geral",
  "Turmas",
  "Disciplinas",
  "Agenda",
  "Indicadores",
  "Documentos",
  "Histórico",
];

const TeacherTabs = () => {
  const [activeTab, setActiveTab] = useState("Geral");

  return (
    <section className="teacher-tabs">
      <div className="teacher-tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`
                teacher-tab
                ${activeTab === tab ? "active" : ""}
              `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="teacher-tabs-content">
        {activeTab === "Geral" && <p>Informações gerais do professor.</p>}

        {activeTab === "Turmas" && <p>Turmas que o professor ministra.</p>}

        {activeTab === "Disciplinas" && <p>Disciplinas atribuídas.</p>}

        {activeTab === "Agenda" && <p>Agenda semanal do professor.</p>}

        {activeTab === "Indicadores" && <p>Indicadores acadêmicos.</p>}

        {activeTab === "Documentos" && <p>Documentos do professor.</p>}

        {activeTab === "Histórico" && <p>Histórico de alterações.</p>}
      </div>
    </section>
  );
};

export default TeacherTabs;
