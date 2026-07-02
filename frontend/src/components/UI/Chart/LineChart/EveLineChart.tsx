import "./EveLineChart.css";

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

interface EveLineChartProps {
  title?: string;

  labels: string[];

  data: number[];

  color?: string;
}

const EveLineChart = ({
  title,
  labels,
  data,
  color = "#6D28D9",
}: EveLineChartProps) => {
  return (
    <div className="eve-line-chart">

      {title && (
        <h3>{title}</h3>
      )}

      <Line
        data={{
          labels,

          datasets: [
            {
              label: title,

              data,

              borderColor: color,

              backgroundColor: `${color}20`,

              fill: true,

              tension: 0.35,

              pointRadius: 4,

              pointHoverRadius: 6,
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

          scales: {
            x: {
              grid: {
                display: false,
              },
            },

            y: {
              beginAtZero: true,
            },
          },
        }}
      />

    </div>
  );
};

export default EveLineChart;