"use client";

import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { useState } from "react";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <header className="w-full text-gray-700 top-0 z-50 bg-white shadow-sm fixed body-font">
      <div className="md:container flex justify-between items-center z-20 py-8 px-6 mx-auto">
        <div className="flex items-center font-medium text-[#0c3b59] title-font mb-0">
          <div>
            <div className="flex justify-start items-center">
              <Link href="/">
                <h1 className="flex justify-center items-center text-2xl font-medium">
                  Lorem Hotel
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center font-tilt justify-center text-lg md:ml-auto">
          <div className="flex justify-center items-center text-[#0c3b59]">
            <div>
              <div>
                <span className="relative flex cursor-pointer px-2 py-2 flex-row items-center h-11 focus:outline-none">
                  <span className="block py-2 border-b lg:border-0 lg:p-0 space-x-4">
                    <Link href="/rooms">Odalar</Link>
                    <Link href="/restaurant">Restoran</Link>
                    <Link href="/poolbeach">Havuz & Sahil</Link>
                    <Link href="/spa">Spa</Link>
                    <Link href="/activities">Aktiviteler</Link>
                    <Link href="/salon">Salon</Link>
                    <Link href="/facility">Tesis</Link>
                    <Link href="/dashboard">Dashboard</Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <nav className="hidden lg:flex items-center font-tilt justify-center text-lg ml-4">
          <div className="flex justify-center items-center text-[#0c3b59]">
            <Link href="/">
              <span className="relative flex cursor-pointer flex-row items-center focus:outline-none">
                <BsFillTelephoneFill size={16} className="" />
                <span className="block py-2 px-2 lg:hover-bg-transparent lg-border-0 lg-p-0">
                  +90 555 555 55 55
                </span>
              </span>
            </Link>
          </div>
          <div className="flex justify-center items-center text-[#0c3b59]">
            <Link href="/">
              <span className="relative flex cursor-pointer flex-row items-center focus:outline-none">
                <span className="block py-2 px-2 lg:hover-bg-transparent lg-border-0 lg-p-0">
                  <BiWorld size={16} className="" />
                </span>
                TR
              </span>
            </Link>
          </div>
        </nav>

        <nav className="lg:hidden flex items-center font-tilt justify-center text-lg md:ml-auto lg:order-2">
          <div className="flex justify-center items-center text-[#0c3b59]">
            <button
              onClick={toggleDropdown}
              class="inline-flex items-center p-2 mr-4 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div class={`${openDropdown ? "block" : "hidden"}`}>
              <div class="lg:hidden">
                {openDropdown && (
                  <div className="absolute right-0 bg-gray-100 text-[#0c3b59] py-2 px-4 mx-4 mt-6 space-y-2 rounded-lg">
                    <Link href="/rooms">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Odalar
                      </span>
                    </Link>
                    <Link href="/restaurant">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Restoran
                      </span>
                    </Link>
                    <Link href="/poolbeach">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Havuz & Sahil
                      </span>
                    </Link>
                    <Link href="/spa">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Spa
                      </span>
                    </Link>
                    <Link href="/activities">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Aktiviteler
                      </span>
                    </Link>
                    <Link href="/salon">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Salon
                      </span>
                    </Link>
                    <Link href="/facility">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Tesis
                      </span>
                    </Link>
                    <Link href="/dashboard">
                      <span className="block border-b border-gray-100 px-2 py-1 hover:bg-gray-200 rounded">
                        Dashboard
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
