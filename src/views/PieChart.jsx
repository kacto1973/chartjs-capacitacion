import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
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
        label: "Distribución de Colores",
        data: quantities, // Valores de cada categoría
        backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0"], // Colores de las porciones
        borderWidth: 1, // Borde de las porciones
      },
    ],
  };

  const options = {};
  return <Pie data={data} options={options} />;
}
