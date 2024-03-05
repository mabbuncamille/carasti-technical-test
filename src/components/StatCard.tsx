import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface CardProps {
  title: string;
  amount: number;
  percentageChange: number;
  chartColor: string;
  trendData: number[];
}

const StatCard: React.FC<CardProps> = ({
  title,
  amount,
  percentageChange,
  chartColor,
  trendData,
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      colors: [chartColor],
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'numeric',
      range: trendData.length,
    },
  };

  const chartSeries = [
    {
      name: title,
      data: trendData,
    },
  ];

  return (
    <div className="card bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-700 text-sm font-medium">{title}</p>
          <p className="text-gray-900 text-xl font-bold">
            AED {amount.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-400">2023</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div
          className={`text-${
            percentageChange >= 0 ? 'green' : 'red'
          }-600 text-sm`}
        >
          {percentageChange >= 0 ? '↑' : '↓'} {Math.abs(percentageChange)}% vs
          last year
        </div>
        <div className="w-1/3">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
