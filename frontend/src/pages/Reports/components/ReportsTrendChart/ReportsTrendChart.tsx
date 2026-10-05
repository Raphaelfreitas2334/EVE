import EveBarChart from "../../../../components/UI/Chart/BarChart";


interface ReportsTrendItem {
    label: string;
    value: number;
}

interface ReportsTrendChartProps {
    data: ReportsTrendItem[];
}

const ReportsTrendChart = ({
    data,
}: ReportsTrendChartProps) => {
    const labels = data.map(
        (item) => item.label
    );

    const values = data.map(
        (item) => item.value
    );

    return (
        <EveBarChart
            labels={labels}
            data={values}
            title="Média por Turma"
            color="#6D28D9"
        />
    );
};

export default ReportsTrendChart;