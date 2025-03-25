import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  const randomData = [];

  for (let i = 0; i < 100; i++) {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    //let r = Math.floor(Math.random() * 100);
    let r = 13;
    randomData.push({ x, y, r });
  }

  const ventasPorRegion = [
    { region: "Norte", clientes: 150, ventas: 30000, mercado: 50 },
    { region: "Sur", clientes: 100, ventas: 25000, mercado: 40 },
    { region: "Este", clientes: 180, ventas: 40000, mercado: 60 },
    { region: "Oeste", clientes: 130, ventas: 27000, mercado: 45 },
    { region: "Centro", clientes: 200, ventas: 45000, mercado: 70 },
  ];

  const data = {
    datasets: [
      {
        label: "Ventas por Región",
        data: ventasPorRegion.map(({ clientes, ventas, mercado }) => ({
          x: clientes,
          y: ventas,
          r: mercado, // Representa el tamaño del mercado en esa región
        })),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Norte
          "rgba(54, 162, 235, 0.5)", // Sur
          "rgba(75, 192, 192, 0.5)", // Este
          "rgba(255, 206, 86, 0.5)", // Oeste
          "rgba(153, 102, 255, 0.5)", // Centro
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const { x, y, r } = context.raw;
            return `x: ${x}, y: ${y}, r: ${r}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bubble data={data} options={options} />;
};

export default BubbleChart;
