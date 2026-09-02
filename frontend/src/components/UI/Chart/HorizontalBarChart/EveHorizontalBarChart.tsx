import "./EveHorizontalBarChart.css";

import {

    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartEvent,
    type ActiveElement,
 

} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar } from "react-chartjs-2";

import { useMemo } from "react";

import type { EveHorizontalBarChartProps } from "./types";

ChartJS.register(

    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    ChartDataLabels,

);

const DEFAULT_COLORS = [

    "#3B82F6",
    "#7C3AED",
    "#F59E0B",
    "#22C55E",
    "#EF4444",
    "#06B6D4",
    "#EC4899",
    "#64748B",
    "#0EA5E9",
    "#84CC16",

];

const EveHorizontalBarChart = ({

    labels,
    data,
    colors = DEFAULT_COLORS,
    unit = "",
    height = 340,

}: EveHorizontalBarChartProps) => {

    const backgroundColors = useMemo(() => {

        return data.map(

            (_, index) => colors[index % colors.length]

        );

    }, [colors, data]);

    const chartData = {

        labels,

        datasets: [

            {

                data,

                backgroundColor: backgroundColors,

                borderRadius: 10,

                borderSkipped: false,

                borderWidth: 0,

                hoverBorderWidth: 0,

                hoverBackgroundColor: backgroundColors,

                barThickness: 22,

                maxBarThickness: 26,

                categoryPercentage: 0.72,

                barPercentage: 0.82,

            },

        ],

    };

    const options: ChartOptions<"bar"> = {

        responsive: true,

        maintainAspectRatio: false,

        indexAxis: "y",

        animation: {

            duration: 800,

        },

        interaction: {

            mode: "nearest",

            intersect: true,

        },

        plugins: {

            legend: {

                display: false,

            },

            tooltip: {

                backgroundColor: "#111827",

                titleColor: "#FFFFFF",

                bodyColor: "#FFFFFF",

                cornerRadius: 10,

                displayColors: false,

                padding: 12,

                callbacks: {

                    label(context) {

                        const value = Number(context.raw);

                        return `${value.toLocaleString("pt-BR")} ${unit}`;

                    },

                },

            },

            datalabels: {

                color: "#111827",

                anchor: "end",

                align: "right",

                offset: 12,

                clamp: false,

                clip: false,

                font: {

                    size: 13,

                    weight: "bold",

                },

                formatter(value: number) {

                    return `${value.toLocaleString("pt-BR")} ${unit}`;

                },

            },

        },

        layout: {

            padding: {

                top: 8,
                bottom: 8,
                left: 0,
                right: 40,

            },

        },
            scales: {

            x: {

                beginAtZero: true,

                grace: "10%",

                border: {

                    display: false,

                },

                grid: {

                    color: "#E5E7EB",

                    drawTicks: false,

                },

                ticks: {

                    color: "#6B7280",

                    padding: 8,

                    font: {

                        size: 12,

                        weight: 500,

                    },

                    callback(value) {

                        return Number(value).toLocaleString("pt-BR");

                    },

                },

            },

            y: {

                border: {

                    display: false,

                },

                grid: {

                    display: false,

                },

                ticks: {

                    color: "#374151",

                    padding: 10,

                    font: {

                        size: 13,

                        weight: 600,

                    },

                },

            },

        },

        onHover(event, elements) {

            const target = event.native?.target as HTMLCanvasElement | undefined;

            if (!target) {

                return;

            }

            target.style.cursor = elements.length > 0 ? "pointer" : "default";

        },

        onClick(
            _event: ChartEvent,
            elements: ActiveElement[]
        ) {

            if (elements.length === 0) {

                return;

            }

            const index = elements[0].index;

            console.log({

                label: labels[index],

                value: data[index],

            });

        },

    };

    return (

        <div
            className="eve-horizontal-bar-chart"
            style={{

                height,

            }}
        >

            <Bar

                data={chartData}

                options={options}

            />

        </div>

    );

};

export default EveHorizontalBarChart;