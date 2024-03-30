"use client";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SimpleChart = () => {
  const chartData = {
    labels: ["Test 1", "Test 2"],
    datasets: [
      {
        label: "Sample Data",
        data: [10, 20],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SimpleChart;
