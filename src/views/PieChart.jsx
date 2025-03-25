import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["1", "2", "3"],
  datasets: [
    {
      label: "Distribución de Colores",
      data: [30, 50, 20], // Valores de cada categoría
      backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0"], // Colores de las porciones
      borderWidth: 1, // Borde de las porciones
    },
  ],
};

export default function PieChart() {
  return <Pie data={data} />;
}
