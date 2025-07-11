"use client";
import styles from "@/app/Components/DataDisplay/card.module.css";

import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler,
  Tooltip
);

export default function ChardCardRed() {
  const gradientRef = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Visitors",
        data: [10, 30, 20, 80, 50, 70],
        fill: true,
        tension: 0.4,
        borderColor: "#f59e0b",
        pointRadius: 0,
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(252, 165, 165, 0.5)");
          gradient.addColorStop(1, "rgba(254, 202, 202, 0.05)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Line options={options} data={data} />
    </div>
  );
}
