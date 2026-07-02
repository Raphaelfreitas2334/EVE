import "./DashboardInsights.css";

import EveCard from "../../../../components/UI/Card";

import {
    BrainCircuit,
    TriangleAlert,
    TrendingUp,
    TrendingDown,
    Trophy
} from "lucide-react";

const DashboardInsights = () => {

    return (

        <EveCard>

            <div className="insights-header">

                <BrainCircuit size={26}/>

                <h2>Resumo Executivo da IA</h2>

            </div>

            <div className="insights-list">

                <div className="insight-item">

                    <TriangleAlert/>

                    <span>
                        3 alunos apresentam alto risco de evasão.
                    </span>

                </div>

                <div className="insight-item">

                    <TrendingUp/>

                    <span>
                        As matrículas cresceram 12% este mês.
                    </span>

                </div>

                <div className="insight-item">

                    <TrendingDown/>

                    <span>
                        A turma DS-2 caiu 8% em frequência.
                    </span>

                </div>

                <div className="insight-item">

                    <Trophy/>

                    <span>
                        A turma ADS-1 possui a maior média geral.
                    </span>

                </div>

            </div>

        </EveCard>

    );

};

export default DashboardInsights;