import "./EveBarChart.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

interface EveBarChartProps {

    labels: string[];

    data: number[];

    title?: string;

    color?: string;

}

const EveBarChart = ({
    labels,
    data,
    title,
    color = "#6D28D9",
}: EveBarChartProps) => {

    return (

        <div className="eve-bar-chart">

            <Bar

                data={{

                    labels,

                    datasets: [

                        {

                            label: title,

                            data,

                            backgroundColor: color,

                            borderRadius: 8,

                        },

                    ],

                }}

                options={{

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {

                            display: false,

                        },

                    },

                }}

            />

        </div>

    );

};

export default EveBarChart;