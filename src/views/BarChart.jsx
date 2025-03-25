/*
Práctica de la Capacitación:

1ra práctica (gráfica en 
-Los alumnos clonan el repositorio que tenemos 
-será un proyecto en react para que simplemente corran npm run dev en la consola
-explicamos el funcionamiento del código línea por línea
 */

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,s
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const randomNumbers = [];

for (let i = 0; i < 12; i++) {
  let num = Math.floor(Math.random() * 100);
  randomNumbers.push(num);
}

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales per Month",
      data: randomNumbers,
      backgroundColor: "rgba(43, 19, 148, 0.5)",
    },
  ],
};

const options = {
  indexAxis: "y", // Esto convierte el gráfico en horizontal
  responsive: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
