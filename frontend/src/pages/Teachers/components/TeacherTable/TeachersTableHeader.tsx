import "./TeachersTableHeader.css";

const TeachersTableHeader = () => {
  return (
    <div className="teachers-table-header">
      <div></div>

      <div className="sortable-column">
        Professor
        <span>↕</span>
      </div>

      <div>Disciplina</div>

      <div>Categoria</div>

      <div>Carga Horária</div>

      <div>Status</div>

      <div>Ações</div>
    </div>
  );
};

export default TeachersTableHeader;
