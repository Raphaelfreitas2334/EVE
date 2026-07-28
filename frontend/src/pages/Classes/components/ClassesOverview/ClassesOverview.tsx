import "./ClassesOverview.css";

import Panel from "../../../../components/UI/Panel/Panel";


import type { ClassModel } from "../../data/mockClasses";
import EveDoughnutChart from "../../../../components/UI/Chart/DoughnutChart";

interface ClassesOverviewProps {
    classes: ClassModel[];
}

const ClassesOverview = ({
    classes,
}: ClassesOverviewProps) => {

    const activeClasses = classes.filter(
        (item) => item.status === "Ativa"
    ).length;

    const plannedClasses = classes.filter(
        (item) => item.status === "Planejada"
    ).length;

    const closedClasses = classes.filter(
        (item) => item.status === "Encerrada"
    ).length;

    return (

        <Panel title="Visão Geral">

            <EveDoughnutChart
                labels={[
                    "Ativas",
                    "Planejadas",
                    "Encerradas",
                ]}
                data={[
                    activeClasses,
                    plannedClasses,
                    closedClasses,
                ]}
                colors={[
                    "#6D28D9",
                    "#3B82F6",
                    "#EF4444",
                ]}
                
                height={180}
            />

        </Panel>

    );

};

export default ClassesOverview;