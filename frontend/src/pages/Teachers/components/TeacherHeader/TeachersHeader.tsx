import "./StudentHeader.css";

import EvePageHeader from "../../../../components/UI/PageHeader";
import EveButton from "../../../../components/UI/Button";

import { Plus } from "lucide-react";

const TeachersHeader = () => {
  return (
    <div className="teachers-header">
      <EvePageHeader
        title="Alunos"
        subtitle="Gerencie todos os estudantes da instituição."
      />

      <EveButton>
        <Plus size={18} />
        Novo aluno
      </EveButton>
    </div>
  );
};

export default TeachersHeader;
