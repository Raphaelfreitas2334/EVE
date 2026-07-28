import "./ClassesStudentsChart.css";

import Panel from "../../../../components/UI/Panel/Panel";

import type { ClassModel } from "../../data/mockClasses";
import EveBarChart from "../../../../components/UI/Chart/BarChart";

interface ClassesStudentsChartProps {
    classes: ClassModel[];
}

const ClassesStudentsChart = ({
    classes,
}: ClassesStudentsChartProps) => {

    return (

        <Panel title="Alunos por Turma">

            <EveBarChart
                labels={classes.map((item) => item.name)}
                data={classes.map((item) => item.students)}
                color="#6D28D9"
                height={180}
            />

        </Panel>

    );

};

export default ClassesStudentsChart;