import { Inter } from 'next/font/google';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';
import { FaRegUser, FaRegCalendarCheck } from 'react-icons/fa6';
import { LuWallet, LuMessageSquare } from 'react-icons/lu';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { GoQuestion } from 'react-icons/go';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from 'next/link';
import TextField from '@/components/TextField';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

const navigation = [
  { name: 'My Profile', icon: FaRegUser, href: '#' },
  { name: 'My Bookings', icon: FaRegCalendarCheck, href: '#' },
  { name: 'My Wallet', icon: LuWallet, href: '#' },
  { name: 'Settings', icon: FiSettings, href: '#' },
  { name: 'Support', icon: LuMessageSquare, href: '#' },
];

const tabs = [
  { name: 'Details', href: '#' },
  { name: 'Documents', href: '#' },
  { name: 'Referral', href: '#' },
  { name: 'Tolls & Fines Analytics', href: 'toll-fine-analytics' },
  { name: 'Plant a Tree', href: '#' },
  { name: 'Share Rewards', href: '#' },
  { name: 'Favourite Cars', href: '#' },
];

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/alex-suprun-avatar.jpg');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    // const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc('/alex-suprun-avatar.jpg'); // Set default image path here
    }
  };

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
          <h2 className="text-3xl font-bold">My Profile</h2>
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
              <h3 className="text-lg font-semibold">Personal info</h3>
              <span className="text-sm">
                Update your photo and personal details here.
              </span>
            </div>
            <hr className="w-full" />

            <div className="flex justify-between items-center py-4">
              <p className="font-semibold w-80">Name</p>
              <div className="flex-1 grid grid-cols-2 gap-6">
                <TextField label="First name" />
                <TextField label="Last name" />
              </div>
            </div>

            <hr className="w-full" />

            <div className="flex justify-between items-center py-4">
              <p className="font-semibold w-80">Email Address</p>
              <div className="flex-1">
                <TextField label="john@info.com" icon={HiOutlineMail} />
              </div>
            </div>

            <hr className="w-full" />

            <div className="flex justify-between items-center py-4">
              <div className="w-80">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">Your photo</p>
                  <GoQuestion />
                </div>
                <span className="text-sm">
                  This will be displayed on your profile.
                </span>
              </div>
              <div className="flex-1 flex space-x-4 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 relative">
                  <Image
                    src={imageSrc}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="relative">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    id="photo-upload"
                    className="absolute opacity-0 w-full h-full"
                    onChange={handleImageChange}
                    accept="image/svg+xml, image/png, image/jpeg, image/gif"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="block bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50 px-4 py-2 w-full"
                  >
                    Click to upload or drag and drop
                    <br />
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </label>
                </div>
              </div>
            </div>

            <hr className="w-full" />

            <div className="flex justify-between items-center py-4">
              <p className="font-semibold w-80">Date of birth</p>
              <div className="flex-1">
                <div></div>
                <TextField label="john@info.com" />
              </div>
            </div>

            <hr className="w-full" />

            <div className="flex justify-between items-center py-4">
              <p className="font-semibold w-80">Phone number</p>
              <div className="flex flex-1">
                <label
                  htmlFor="location-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Phone number
                </label>
                <button
                  id="dropdown-button-2"
                  data-dropdown-toggle="dropdown-search-city"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                  type="button"
                >
                  AE <RiArrowDropDownLine />
                </button>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="location-search"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <hr className="w-full" />

            <div className="relative flex justify-end py-4">
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Cancel
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
