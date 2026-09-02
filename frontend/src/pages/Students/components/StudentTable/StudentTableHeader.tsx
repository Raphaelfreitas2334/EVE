import "./StudentTableHeader.css";

const StudentTableHeader = () => {

    return (

        <div className="student-table-header">

            <div></div>

            <div className="sortable-column">

                Aluno

                <span>↕</span>

            </div>

            <div>Status</div>

            <div>Frequência</div>

            <div>Média</div>

            <div>Alertas</div>

            <div></div>

        </div>

    );

};

export default StudentTableHeader;