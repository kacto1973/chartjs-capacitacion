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

// Register necessary Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Sales",
      data: [30, 50, 70],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

export default function BarChart() {
  return <Bar data={data} />;
}
