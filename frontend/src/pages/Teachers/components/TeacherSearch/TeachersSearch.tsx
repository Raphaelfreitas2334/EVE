import "./TeachersSearch.css";

import EveSearch from "../../../../components/UI/Search";
import EveButton from "../../../../components/UI/Button";

import { Download, Upload, Plus } from "lucide-react";

interface TeachersSearchProps {
  onCreateTeacher: () => void;
}

const TeachersSearch = ({ onCreateTeacher }: TeachersSearchProps) => {
  return (
    <section className="teachers-search">
      <div className="teachers-search-input">
        <EveSearch placeholder="Pesquisar professor..." />
      </div>

      <div className="teachers-search-actions">
        <EveButton variant="outline">
          <Download size={18} />
          Exportar
        </EveButton>

        <EveButton variant="outline">
          <Upload size={18} />
          Importar
        </EveButton>

        <EveButton onClick={onCreateTeacher}>
          <Plus size={18} />
          Novo professor
        </EveButton>
      </div>
    </section>
  );
};

export default TeachersSearch;
