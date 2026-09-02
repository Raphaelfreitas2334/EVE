import "./EveRadarChart.css";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface EveRadarChartProps{

    labels:string[];

    data:number[];

    color?:string;

}

const EveRadarChart = ({
    labels,
    data,
    color="#6D28D9",
}: EveRadarChartProps) => {

    return(

        <div className="eve-radar-chart">

            <Radar

                data={{

                    labels,

                    datasets:[{

                        data,

                        borderColor:color,

                        backgroundColor:`${color}25`,

                        pointBackgroundColor:color,

                        pointBorderColor:"#fff",

                        pointRadius:4,

                    }],

                }}

                options={{

                    responsive:true,

                    maintainAspectRatio:false,

                    plugins:{

                        legend:{
                            display:false,
                        },

                    },

                    scales:{

                        r:{

                            beginAtZero:true,

                            suggestedMax:100,

                        },

                    },

                }}

            />

        </div>

    );

};

export default EveRadarChart;