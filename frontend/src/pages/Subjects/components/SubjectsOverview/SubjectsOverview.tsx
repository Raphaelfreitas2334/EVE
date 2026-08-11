import "./SubjectsOverview.css";


import EveDoughnutChart from "../../../../components/UI/Chart/DoughnutChart";

import type { SubjectsModel } from "../../data/mockSubjects";
import Panel from "../../../../components/UI/Panel/Panel";

interface SubjectsOverviewProps {
    Subjects: SubjectsModel[];
}

const SubjectsOverview = ({
    Subjects,
}: SubjectsOverviewProps) => {

    const activeSubjects = Subjects.filter(
        (item) => item.status === "Ativa"
    ).length;

    const plannedSubjects = Subjects.filter(
        (item) => item.status === "Planejada"
    ).length;

    const closedSubjects = Subjects.filter(
        (item) => item.status === "Encerrada"
    ).length;

    const total =
        activeSubjects +
        plannedSubjects +
        closedSubjects;

    const calculate = (value: number) => {

        if (total === 0) return 0;

        return Math.round((value / total) * 100);

    };

    return (

        <Panel title="Visão Geral">

            <div className="subjects-overview">

                <div className="subjects-overview-chart">

                    <EveDoughnutChart
                        labels={[
                            "Ativas",
                            "Planejadas",
                            "Encerradas",
                        ]}
                        data={[
                            activeSubjects,
                            plannedSubjects,
                            closedSubjects,
                        ]}
                        colors={[
                            "#6D28D9",
                            "#3B82F6",
                            "#EF4444",
                        ]}
                        height={180}
                    />

                </div>

                <div className="subjects-overview-legend">

                    <div className="legend-item">

                        <span
                            className="legend-color"
                            style={{
                                background: "#6D28D9",
                            }}
                        />

                        <span>Ativas</span>

                        <strong>
                            {calculate(activeSubjects)}%
                        </strong>

                    </div>

                    <div className="legend-item">

                        <span
                            className="legend-color"
                            style={{
                                background: "#3B82F6",
                            }}
                        />

                        <span>Planejadas</span>

                        <strong>
                            {calculate(plannedSubjects)}%
                        </strong>

                    </div>

                    <div className="legend-item">

                        <span
                            className="legend-color"
                            style={{
                                background: "#EF4444",
                            }}
                        />

                        <span>Encerradas</span>

                        <strong>
                            {calculate(closedSubjects)}%
                        </strong>

                    </div>

                </div>

            </div>

        </Panel>

    );

};

export default SubjectsOverview;