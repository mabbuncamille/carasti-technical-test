import Link from 'next/link';
import { ReactNode } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

type Props = {
  children?: React.ReactNode;
};

const navigation = [
  { name: 'Browse cars', href: '#' },
  { name: 'Help & Resources', href: '#' },
  { name: 'Carasti for Business', href: '#' },
  { name: 'Gift Vouchers', href: '#' },
];

const columnOneLinks = [
  { href: '#', text: 'How it works' },
  { href: '#', text: 'Available cars' },
  { href: '#', text: 'Plant a Tree' },
  { href: '#', text: 'Carasti for Business' },
  { href: '#', text: 'EVs' },
];

const columnTwoLinks = [
  { href: '#', text: 'About us' },
  { href: '#', text: 'News' },
  { href: '#', text: 'FAQs' },
  { href: '#', text: 'Contact us' },
];

const columnThreeLinks = [
  { href: '#', text: 'Terms & Conditions' },
  { href: '#', text: 'Privacy Policy' },
];

export default function MainLayout({ children }: Props) {
  const createLinkList = (links: any) => {
    return (
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {links.map((link: any) => (
          <li key={link.text} className="mb-4">
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between p-6">
          <div>carasti</div>
          <div className="lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a href={item.href} key={item.name}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-white mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex justify-between items-start">
            <div className="grid gap-8 sm:gap-6 grid-cols-3">
              {createLinkList(columnOneLinks)}
              {createLinkList(columnTwoLinks)}
              {createLinkList(columnThreeLinks)}
            </div>
            <div>{/* App Store Buttons and Logo */}</div>
          </div>
          <hr />
          <div className="flex items-center py-4">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.tiktok.com" aria-label="TikTok">
                <FaTiktok className="text-2xl" />
              </a>
            </div>
            <div className="ml-8">© 2023 Carasti Holding LTD.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
