import EveButton from "../../../../../components/UI/Button";
import "./TeacherDetailsHeader.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

const TeacherDetailsHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="teacher-details-header">
      <div className="teacher-details-header-info">
        <EveButton variant="outline" onClick={() => navigate("/teachers")}>
          <ArrowLeft size={18} />
          Voltar
        </EveButton>

        <div>
          <span className="teacher-details-breadcrumb">Professores</span>

          <h1>Raphael Santos</h1>

          <p>Professor • PAEET • Ativo</p>
        </div>
      </div>

      <EveButton>
        <Pencil size={18} />
        Editar professor
      </EveButton>
    </header>
  );
};

export default TeacherDetailsHeader;
