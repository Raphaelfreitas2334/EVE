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

interface EveDoughnutChartProps{

    labels:string[];

    data:number[];

    colors?:string[];

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
}: EveDoughnutChartProps) => {

    return(

        <div className="eve-doughnut-chart">

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