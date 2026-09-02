import "./EveLineChart.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
);

interface EveLineChartProps {

    title?: string;

    labels: string[];

    data: number[];

    color?: string;

    min?: number;

    max?: number;

    stepSize?: number;

}

const EveLineChart = ({

    title,

    labels,

    data,

    color = "#6D28D9",

    min = 0,

    max = 10,

    stepSize = 2,

}: EveLineChartProps) => {

    return (

        <div className="eve-line-chart">

            {title && (
                <h3>
                    {title}
                </h3>
            )}

            <div className="eve-line-chart-wrapper">

                <Line

                    data={{

                        labels,

                        datasets: [
                            {
                                data,

                                borderColor: color,

                                backgroundColor: `${color}20`,

                                borderWidth: 3,

                                fill: true,

                                tension: 0.35,

                                pointRadius: 5,

                                pointHoverRadius: 7,

                                pointBackgroundColor: color,

                                pointBorderColor: "#FFFFFF",

                                pointBorderWidth: 2,
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

                            tooltip: {

                                callbacks: {

                                    label: context => {

                                        const value =
                                            context.parsed.y;

                                        return ` Média: ${Number(value).toFixed(2)}`;

                                    },

                                },

                            },

                        },

                        scales: {

                            x: {

                                grid: {
                                    display: false,
                                },

                                border: {
                                    display: false,
                                },

                            },

                            y: {

                                min,

                                max,

                                ticks: {

                                    stepSize,

                                },

                                border: {
                                    display: false,
                                },

                            },

                        },

                    }}

                />

            </div>

        </div>

    );
};

export default EveLineChart;