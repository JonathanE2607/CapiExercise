'use client';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState, useMemo } from 'react';
import './Charts.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const days = 18;
const labels = Array.from({ length: days }, (_, i) => `Jan ${i + 1}`);

const generateYearData = (year: string) => {
  const base = year === '2021' ? 5 : year === '2022' ? 10 : 15;
  return {
    labels,
    datasets: [
      {
        label: 'Aerobics',
        data: Array.from({ length: days }, () => Math.floor(Math.random() * 25) + base),
        backgroundColor: '#f87171',
        stack: 'activity',
        barThickness: 8,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Yoga',
        data: Array.from({ length: days }, () => Math.floor(Math.random() * 15) + base),
        backgroundColor: '#38bdf8',
        stack: 'activity',
        barThickness: 8,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Meditation',
        data: Array.from({ length: days }, () => Math.floor(Math.random() * 15) + base),
        backgroundColor: '#fbbf24',
        stack: 'activity',
        barThickness: 8,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      position: 'bottom' as const,
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        maxRotation: 45,
        minRotation: 45,
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 100,
      ticks: {
        callback(this: any, tickValue: string | number) {
          return `${tickValue}%`;
        },
      },
    },
  },
};

export default function SingleStackBarChart() {
  const [selectedYear, setSelectedYear] = useState('2023');


  const chartData = useMemo(() => generateYearData(selectedYear), [selectedYear]);

  return (
    <section className="chart-section">
      <header className="chart-header">
        <h2>Activity Growth</h2>
        <label htmlFor="year" className="chart-label">
          <span className="sr-only">Select Year</span>
          <select
            id="year"
            className="chart-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </label>
      </header>

      <div className="chart-container">
        <Bar data={chartData} options={options} />
      </div>
    </section>
  );
}
