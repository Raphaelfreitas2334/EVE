import "./SubjectsWorkloadChart.css";

import type { SubjectsModel } from "../../data/mockSubjects";
import Panel from "../../../../components/UI/Panel/Panel";
import EveHorizontalBarChart from "../../../../components/UI/Chart/HorizontalBarChart";

interface SubjectsStudentsChartProps {

    subjects: SubjectsModel[];

}

const SubjectsStudentsChart = ({
    subjects,
}: SubjectsStudentsChartProps) => {

    const courses = [...new Set(subjects.map(subject => subject.course))];

    const workloadByCourse = courses.map(course =>

        subjects
            .filter(subject => subject.course === course)
            .reduce(
                (total, subject) => total + subject.workload,
                0
            )

    );

    return (

        <Panel title="Carga Horária por Curso">

            <EveHorizontalBarChart
                labels={courses}
                data={workloadByCourse}
                unit="h"
                height={260}
                colors={["#6D28D9"]}
            />

        </Panel>

    );

};

export default SubjectsStudentsChart;