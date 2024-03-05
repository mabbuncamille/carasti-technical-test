import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';
import { FaRegUser, FaRegCalendarCheck } from 'react-icons/fa6';
import { LuWallet, LuMessageSquare } from 'react-icons/lu';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import StatCard from '@/components/StatCard';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const navigation = [
  { name: 'My Profile', icon: FaRegUser, href: '#' },
  { name: 'My Bookings', icon: FaRegCalendarCheck, href: '#' },
  { name: 'My Wallet', icon: LuWallet, href: '#' },
  { name: 'Settings', icon: FiSettings, href: '#' },
  { name: 'Support', icon: LuMessageSquare, href: '#' },
];

const tabs = [
  { name: 'Details', href: '/' },
  { name: 'Documents', href: '#' },
  { name: 'Referral', href: '#' },
  { name: 'Tolls & Fines Analytics', href: '#' },
  { name: 'Plant a Tree', href: '#' },
  { name: 'Share Rewards', href: '#' },
  { name: 'Favourite Cars', href: '#' },
];

export default function TollAndFineAnalytics() {
  const doughnutChartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Paid', 'Unpaid'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const doughnutChartSeries: number[] = [3900, 1300];

  const finesTrend = [10, 23, 45, 32, 34, 52, 41];
  const salikChargesTrend = [20, 30, 28, 40, 36, 43, 38];
  const damagesTrend = [5, 15, 10, 20, 18, 25, 22];

  return (
    <MainLayout>
      <Head>
        <title> My Profile | Carasti </title>
      </Head>

      <div className="flex mx-auto space-x-6 mt-8 max-w-7xl ">
        {/* LEFT MY PROFIL NAV */}
        <aside className="bg-white w-64 py-8 px-4 rounded-lg">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name} className="pl-2">
                <Link
                  href={item.href}
                  className="flex items-center p-2 hover:bg-gray-100 hover:rounded-md"
                >
                  <item.icon className="text-xl" />
                  <span className="ms-3 font-semibold text-sm">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="bg-white flex-1 p-8">
          <h2 className="text-3xl font-bold">Tolls & Fines Analytics</h2>
          <div className="border bg-[#F9FAFB] rounded-md p-1 mt-6">
            <ul className="flex">
              {tabs.map((item) => (
                <li
                  key={item.name}
                  className="px-4 py-2 rounded-md hover:bg-white"
                >
                  <Link href={item.href}>
                    <p className="font-semibold text-sm ">{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5">
            <div className="py-4 mt-4">
              <h3 className="text-lg font-semibold">Tolls & Fines</h3>
              <span className="text-sm">View your analytics here.</span>
            </div>
            <hr className="w-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col space-y-4">
                <div className="border p-3 rounded-xl">
                  <p className="text-sm">Lifetime total</p>
                  <p className="text-lg font-bold">
                    5,200 <span className="text-sm text-gray-600">AED</span>
                  </p>
                </div>
                <div className="border rounded-xl p-8">
                  <ReactApexChart
                    options={doughnutChartOptions}
                    series={doughnutChartSeries}
                    type="donut"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <StatCard
                  title="Fines"
                  amount={3000}
                  percentageChange={-10}
                  chartColor="#10B981"
                  trendData={finesTrend}
                />
                <StatCard
                  title="Salik Charges"
                  amount={1200}
                  percentageChange={40}
                  chartColor="#EF4444"
                  trendData={salikChargesTrend}
                />
                <StatCard
                  title="Damages"
                  amount={1000}
                  percentageChange={-10}
                  chartColor="#3B82F6"
                  trendData={damagesTrend}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
