import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const DashboardHome = () => {
  // Sample data – replace with API data later
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 10, 24, 18, 30],
        borderColor: '#4f46e5', // Indigo
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      {/* Banner */}
      <div className="bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white mb-6 shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-sm sm:text-base mt-1">
          Track your orders, listings, and activity trends.
        </p>
      </div>

      {/* Chart */}
      <div className="bg-base-100 rounded-xl p-4 shadow-md">
        <Line data={data} options={options} />
      </div>
    </motion.section>
  );
};

export default DashboardHome;
