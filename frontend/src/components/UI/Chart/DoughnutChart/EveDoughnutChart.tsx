import "./EveDoughnutChart.css";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

interface EveDoughnutChartProps {

    labels: string[];

    data: number[];

    colors?: string[];

    height?: number;

    /**
     * Tamanho do furo interno.
     * Ex:
     * "70%"
     * "80%"
     */
    cutout?: string | number;

    /**
     * Posição da legenda.
     */
    legendPosition?:
        | "top"
        | "left"
        | "bottom"
        | "right";

}

const EveDoughnutChart = ({

    labels,

    data,

    colors = [

        "#6D28D9",

        "#22C55E",

        "#F59E0B",

        "#EF4444",

        "#3B82F6",

    ],

    height = 350,

}: EveDoughnutChartProps) => {

    return(

        <div
            className="eve-doughnut-chart"
            style={{ height }}
        >

            <Doughnut

                data={{

                    labels,

                    datasets:[{

                        data,

                        backgroundColor:colors,

                        borderWidth:0,

                    }],

                }}

                options={{

                    responsive:true,

                    maintainAspectRatio:false,

                    plugins:{

                        legend:{
                            position:"bottom",
                        },

                    },

                }}

            />

        </div>

    );

};

export default EveDoughnutChart;