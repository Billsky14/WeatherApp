import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" legacyBehavior>
          <Image
            className=""
            src="/UBJ.CUACA.svg"
            alt="logo-aplikasi"
            width={200}
            height={200}
            priority
          />
        </Link>
        <button
          className="text-white block md:hidden focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 w-full md:w-auto bg-blue-700 md:bg-transparent rounded-lg md:rounded-none mt-4 md:mt-0 p-4 md:p-0`}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} legacyBehavior>
                <a
                  className={`text-lg px-2 py-1 rounded-md block md:inline transition duration-300 transform ${
                    router.pathname === item.path
                      ? 'bg-white text-blue-800 font-bold scale-105'
                      : 'text-white hover:bg-black hover:scale-120'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}