import EveButton from "../../../../components/UI/Button";
import EveSelect from "../../../../components/UI/Select";
import "./TeachersContext.css";

import { RotateCcw } from "lucide-react";

const TeachersContext = () => {
  return (
    <section className="teachers-context">
      <div className="teachers-context-header">
        <h3>Filtros</h3>

        <p>Utilize os filtros abaixo para localizar professores rapidamente.</p>
      </div>

      <div className="teachers-context-filters">
        <EveSelect
          label="Disciplina"
          options={[
            {
              value: "frontend",
              label: "Programação Front-End",
            },
            {
              value: "backend",
              label: "Programação Back-End",
            },
            {
              value: "database",
              label: "Banco de Dados",
            },
            {
              value: "datascience",
              label: "Data Science",
            },
          ]}
        />

        <EveSelect
          label="Categoria"
          options={[
            {
              value: "paeet",
              label: "PAEET",
            },
            {
              value: "categoria-o",
              label: "Categoria O",
            },
            {
              value: "efetivo",
              label: "Efetivo",
            },
          ]}
        />

        <EveSelect
          label="Status"
          options={[
            {
              value: "ativo",
              label: "Ativo",
            },
            {
              value: "licenca",
              label: "Licença",
            },
            {
              value: "ferias",
              label: "Férias",
            },
            {
              value: "afastado",
              label: "Afastado",
            },
          ]}
        />

        <EveButton variant="outline">
          <RotateCcw size={18} />
          Limpar filtros
        </EveButton>
      </div>
    </section>
  );
};

export default TeachersContext;
