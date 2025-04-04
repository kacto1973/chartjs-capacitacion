import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useEffect, useState } from "react";

// Register necessary Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [reactivos, setReactivos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reactivos");
        const data = await response.json();
        setReactivos(data);
      } catch (error) {
        console.error("Error al obtener los reactivos:", error);
      }
    };

    fetchData();
  }, []);

  const quantities = [];

  for (let i = 0; i < reactivos.length; i++) {
    quantities.push(reactivos[i].cantidad);
  }

  const names = [];

  for (let i = 0; i < reactivos.length; i++) {
    names.push(reactivos[i].nombre);
  }

  const data = {
    labels: names,
    datasets: [
      {
        label: "Cantidad de Reactivos",
        data: quantities,
        backgroundColor: "rgba(43, 19, 148, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "x", // Esto convierte el gráfico en horizontal
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true, // Activa el título
        text: "Reactivos / Cantidades 🧪", // Texto del título
        font: {
          size: 18, // Tamaño del texto
        },
        color: "black", // Color del texto
      },
    },
  };

  return <Bar data={data} options={options} />;
}
