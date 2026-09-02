import "./StudentContext.css";

import EveSelect from "../../../../components/UI/Select";
import EveButton from "../../../../components/UI/Button";

import { RotateCcw } from "lucide-react";

const StudentContext = () => {

    return (

        <section className="student-context">

            <div className="student-context-header">

                <h3>Contexto Atual</h3>

                <p>
                    Defina o contexto para visualizar os dados dos alunos.
                </p>

            </div>

            <div className="student-context-filters">

                <EveSelect
                    label="Curso"
                    options={[
                        { value:"ads",label:"ADS" },
                        { value:"ds",label:"Data Science" },
                        { value:"adm",label:"Administração" }
                    ]}
                />

                <EveSelect
                    label="Turma"
                    options={[
                        { value:"ads1",label:"ADS-1" },
                        { value:"ads2",label:"ADS-2" }
                    ]}
                />

                <EveSelect
                    label="Ano"
                    options={[
                        { value:"2026",label:"2026" },
                        { value:"2025",label:"2025" }
                    ]}
                />

                <EveSelect
                    label="Bimestre"
                    options={[
                        { value:"1",label:"1º" },
                        { value:"2",label:"2º" },
                        { value:"3",label:"3º" },
                        { value:"4",label:"4º" }
                    ]}
                />

                <EveSelect
                    label="Período"
                    options={[
                        { value:"manha",label:"Manhã" },
                        { value:"tarde",label:"Tarde" },
                        { value:"noite",label:"Noite" }
                    ]}
                />

                <EveButton variant="outline">

                    <RotateCcw size={18}/>

                    Limpar

                </EveButton>

            </div>

        </section>

    );

};

export default StudentContext;