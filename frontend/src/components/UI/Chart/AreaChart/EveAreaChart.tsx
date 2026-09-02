import "./EveAreaChart.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

interface EveAreaChartProps {

    labels:string[];

    data:number[];

    color?:string;

}

const EveAreaChart = ({
    labels,
    data,
    color="#6D28D9",
}: EveAreaChartProps) => {

    return(

        <div className="eve-area-chart">

            <Line

                data={{

                    labels,

                    datasets:[{

                        data,

                        fill:true,

                        borderColor:color,

                        backgroundColor:`${color}25`,

                        tension:.4,

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

                }}

            />

        </div>

    );

};

export default EveAreaChart;