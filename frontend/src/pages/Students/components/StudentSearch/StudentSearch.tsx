import "./StudentSearch.css";

import EveSearch from "../../../../components/UI/Search";
import EveButton from "../../../../components/UI/Button";

import {
    Download,
    Upload,
    Plus,
} from "lucide-react";

interface StudentSearchProps {

    onCreateStudent: () => void;

}

const StudentSearch = ({
    onCreateStudent,
}: StudentSearchProps) => {

    return (

        <section className="student-search">

            <div className="student-search-input">

                <EveSearch
                    placeholder="Pesquisar aluno..."
                />

            </div>

            <div className="student-search-actions">

                <EveButton variant="outline">

                    <Download size={18} />

                    Exportar

                </EveButton>

                <EveButton variant="outline">

                    <Upload size={18} />

                    Importar

                </EveButton>

                <EveButton
                    onClick={onCreateStudent}
                >

                    <Plus size={18} />

                    Novo aluno

                </EveButton>

            </div>

        </section>

    );

};

export default StudentSearch;