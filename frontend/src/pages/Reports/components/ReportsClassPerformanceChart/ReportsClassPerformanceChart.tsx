import "./ReportsClassPerformanceChart.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    type ChartOptions,
    type ChartData,
    type TooltipItem,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "react-chartjs-2";

import type { ReportModel } from "../../data/mockReports";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ChartDataLabels,
);

interface ReportsClassPerformanceChartProps {
    reports: ReportModel[];
    limit?: number;
}

const ReportsClassPerformanceChart = ({
    reports,
    limit = 5,
}: ReportsClassPerformanceChartProps) => {

    // =========================================================
    // AGRUPAR RELATÓRIOS POR TURMA
    // =========================================================

    const grouped = new Map<string, ReportModel[]>();

    reports.forEach((report) => {
        if (!grouped.has(report.classroom)) {
            grouped.set(report.classroom, []);
        }

        grouped.get(report.classroom)?.push(report);
    });

    // =========================================================
    // CALCULAR DADOS DAS TURMAS
    // =========================================================

    const classes = Array.from(grouped.entries())
        .map(([classroom, students]) => {

            const average =
                students.length > 0
                    ? students.reduce(
                        (total, student) =>
                            total + Number(student.average),
                        0,
                    ) / students.length
                    : 0;

            return {
                classroom,
                students: students.length,
                average,
            };
        })
        .sort(
            (a, b) =>
                b.average - a.average,
        )
        .slice(0, limit);

    // =========================================================
    // LABELS
    // =========================================================

    const labels = classes.map(
        (item) => item.classroom,
    );

    // =========================================================
    // QUANTIDADE DE ALUNOS
    // =========================================================

    const studentsData = classes.map(
        (item) => item.students,
    );

    // =========================================================
    // MÉDIA DAS TURMAS
    // =========================================================

    const averageData = classes.map(
        (item) =>
            Number(
                item.average.toFixed(2),
            ),
    );

    // =========================================================
    // DADOS DO GRÁFICO MISTO
    //
    // BAR  = quantidade de alunos
    // LINE = média geral
    // =========================================================

    const data: ChartData<"bar" | "line"> = {
        labels,

        datasets: [
            {
                type: "bar",
                label: "Alunos",
                data: studentsData,

                backgroundColor: "#D8C8F7",
                borderColor: "#D8C8F7",

                borderWidth: 0,
                borderRadius: 8,

                yAxisID: "students",

                barPercentage: 0.55,
                categoryPercentage: 0.65,
            },

            {
                type: "line",
                label: "Média Geral",
                data: averageData,

                borderColor: "#6D28D9",
                backgroundColor: "#6D28D9",

                borderWidth: 3,

                tension: 0.35,

                yAxisID: "average",

                pointRadius: 5,
                pointHoverRadius: 7,

                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#6D28D9",
                pointBorderWidth: 3,
            },
        ],
    };

    // =========================================================
    // OPÇÕES
    // =========================================================

    const options: ChartOptions<"bar" | "line"> = {
        responsive: true,

        maintainAspectRatio: false,

        interaction: {
            mode: "index",
            intersect: false,
        },

        plugins: {

            // -------------------------------------------------
            // LEGENDA
            // -------------------------------------------------

            legend: {
                display: true,

                position: "top",

                labels: {
                    usePointStyle: true,

                    pointStyle: "rectRounded",

                    padding: 20,

                    color: "#374151",

                    font: {
                        size: 13,
                        weight: 500,
                    },
                },
            },

            // -------------------------------------------------
            // TOOLTIP
            // -------------------------------------------------

            tooltip: {
                backgroundColor: "#111827",

                titleColor: "#FFFFFF",

                bodyColor: "#FFFFFF",

                padding: 12,

                cornerRadius: 10,

                displayColors: true,

                callbacks: {

                    label: (
                        context: TooltipItem<
                            "bar" | "line"
                        >,
                    ) => {

                        if (
                            context.dataset.label ===
                            "Média Geral"
                        ) {
                            return ` Média: ${Number(
                                context.raw,
                            ).toFixed(2)}`;
                        }

                        return ` Alunos: ${context.raw}`;
                    },
                },
            },

            // -------------------------------------------------
            // DATA LABELS
            // -------------------------------------------------

            datalabels: {

                display: true,

                color: "#374151",

                font: {
                    size: 12,
                    weight: "bold",
                },

                formatter: (
                    value: number,
                    context,
                ) => {

                    if (
                        context.dataset.label ===
                        "Média Geral"
                    ) {
                        return Number(value)
                            .toFixed(2)
                            .replace(".", ",");
                    }

                    return value;
                },

                anchor: "end",

                align: "top",

                offset: 4,
            },
        },

        // =====================================================
        // ESCALAS
        // =====================================================

        scales: {

            // -------------------------------------------------
            // EIXO DA MÉDIA
            // -------------------------------------------------

            average: {
                type: "linear",

                position: "left",

                min: 0,

                max: 10,

                beginAtZero: true,

                grid: {
                    color: "#E5E7EB",

                    drawTicks: false,
                },

                border: {
                    display: false,
                },

                ticks: {
                    color: "#6B7280",

                    stepSize: 2,

                    font: {
                        size: 12,
                    },
                },

                title: {
                    display: false,
                },
            },

            // -------------------------------------------------
            // EIXO DE ALUNOS
            // -------------------------------------------------

            students: {
                type: "linear",

                position: "right",

                beginAtZero: true,

                suggestedMax:
                    Math.max(
                        10,
                        ...studentsData,
                    ) + 10,

                grid: {
                    drawOnChartArea: false,
                },

                border: {
                    display: false,
                },

                ticks: {
                    color: "#6B7280",

                    precision: 0,

                    font: {
                        size: 12,
                    },
                },
            },

            // -------------------------------------------------
            // EIXO X
            // -------------------------------------------------

            x: {
                grid: {
                    display: false,
                },

                border: {
                    display: false,
                },

                ticks: {
                    color: "#374151",

                    font: {
                        size: 13,

                        weight: 600,
                    },
                },
            },
        },

        // =====================================================
        // LAYOUT
        // =====================================================

        layout: {
            padding: {
                top: 15,

                right: 10,

                bottom: 5,

                left: 5,
            },
        },
    };

    // =========================================================
    // RENDER
    // =========================================================

    return (
        <div className="reports-class-performance-chart">

            <div className="reports-class-performance-chart__canvas">

                <Chart
                    type="bar"
                    data={data}
                    options={options}
                />

            </div>

            <button
                type="button"
                className="reports-class-performance-chart__link"
                onClick={() => {
                    console.log(
                        "Ver todas as turmas",
                    );
                }}
            >
                Ver todas as turmas

                <span>
                    →
                </span>
            </button>

        </div>
    );
};

export default ReportsClassPerformanceChart;