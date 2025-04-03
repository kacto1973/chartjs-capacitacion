import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const randomNumbers = [];

for (let i = 0; i < 3; i++) {
  let num = Math.floor(Math.random() * 100);
  randomNumbers.push(num);
}

const data = {
  labels: ["Edad: 18", "Edad: 20", "Edad: 19"],
  datasets: [
    {
      label: "Distribución de Colores",
      data: randomNumbers, // Valores de cada categoría
      backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0"], // Colores de las porciones
      borderWidth: 1, // Borde de las porciones
    },
  ],
};

const options = {};

export default function PieChart() {
  return <Pie data={data} options={options} />;
}
