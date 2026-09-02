import EveHorizontalBarChart from "../../../../components/UI/Chart/HorizontalBarChart";

interface GradesTrendChartProps {

    data: {

        label: string;

        value: number;

    }[];

}

const GradesTrendChart = ({

    data,

}: GradesTrendChartProps) => {

    return (

        <EveHorizontalBarChart

            labels={data.map(item => item.label)}

            data={data.map(item => item.value)}

            colors={[

                "#6D28D9",

            ]}

            height={320}

            unit="%"

        />

    );

};

export default GradesTrendChart;