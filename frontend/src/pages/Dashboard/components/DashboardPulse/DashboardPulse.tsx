import "./DashboardPulse.css";

import PulseCard from "./PulseCard";

import {
  Users,
  GraduationCap,
  School,
} from "lucide-react";

const DashboardPulse = () => {
  return (
    <section className="dashboard-pulse">

      <div className="dashboard-pulse-header">

        <h2>Pulse da Instituição</h2>

        <p>
          Resumo dos principais acontecimentos da semana.
        </p>

      </div>

      <div className="dashboard-pulse-grid">

        <PulseCard
          icon={<Users size={28} />}
          title="Corpo Docente"
          items={[
            {
                status:"danger",
                text:"3 professores não registraram presença."
            },
            {
                status:"warning",
                text:"2 diários estão pendentes."
            },
            {
                status:"success",
                text:"1 aula sem fechamento."
            }
          ]}
          action="Ver professores"
        />

        <PulseCard
          icon={<GraduationCap size={28} />}
          title="Alunos"
          items={[
                {
                    status:"danger",
                    text:"João possui 8 faltas."
                },
                {
                    status:"warning",
                    text:"Maria está em risco de evasão."
                },
                {
                    status:"success",
                    text:"Pedro recuperou sua média."
                }
            ]}
          action="Ver alunos"
        />

        <PulseCard
          icon={<School size={28} />}
          title="Turmas"
          items={[
            {
              status: "danger",
              text: "ADS-2 possui menor média."
            },
            {
              status: "warning",
              text: "DS-3 caiu na frequência."
            },
            {
              status: "success",
              text: "ADM-1 é destaque da semana."
            }
          ]}
          action="Ver turmas"
        />

      </div>

    </section>
  );
};

export default DashboardPulse;