import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, annotationPlugin);

const ScatterChart = () => {
  const dataset1 = [
    { x: -10, y: 0 },
    { x: 0, y: 10 },
    { x: 10, y: 5 },
    { x: 0.5, y: 5.5 },
  ];

  const dataset2 = [
    { x: -5, y: -5 },
    { x: 5, y: 5 },
    { x: 10, y: -10 },
    { x: -10, y: 10 },
  ];

  // Calculamos el promedio de Y
  const allYValues = [...dataset1, ...dataset2].map((point) => point.y);
  const avgY =
    allYValues.reduce((sum, value) => sum + value, 0) / allYValues.length;

  const data = {
    datasets: [
      {
        label: "Dataset 1",
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Dataset 2",
        data: dataset2,
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
    },
    plugins: {
      annotation: {
        annotations: {
          averageLine: {
            type: "line",
            yMin: avgY,
            yMax: avgY,
            borderColor: "red",
            borderWidth: 2,
            label: {
              content: `Promedio: ${avgY.toFixed(2)}`,
              enabled: true,
              position: "end",
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
