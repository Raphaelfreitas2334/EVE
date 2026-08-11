import EveHorizontalBarChart from "../../../../components/UI/Chart/HorizontalBarChart";

interface AttendanceTrendChartProps {

    data: {

        label: string;

        value: number;

    }[];

}

const AttendanceTrendChart = ({

    data,

}: AttendanceTrendChartProps) => {

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

export default AttendanceTrendChart;