"use client";

import Link from "next/link";
import { BsFillTelephoneFill, BsFillFlagFill } from "react-icons/bs";

export function Header() {
  return (
    <header className="w-full text-gray-700 top-0 z-50 bg-white shadow-sm fixed body-font">
      <div className="container flex flex-col items-center z-20 py-8 px-6 mx-auto md:flex-row">
        <div className="flex items-center mb-4 font-medium text-[#0c3b59] title-font md:mb-0">
          <div>
            <div className="flex justify-start items-center">
              <Link href="/">
                <h1 className="font-tilt text-2xl font-medium">
                  <span className="text-[#0c3b59]">K</span>ayra
                  <span className="text-[#0c3b59]">T</span>ur
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex items-center font-tilt justify-center text-lg md:ml-auto">
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
                  </span>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <nav className="flex items-center font-tilt justify-center text-lg ml-4">
          <div className="flex justify-center items-center text-[#0c3b59]">
            <Link href="/login">
              <span className="relative flex cursor-pointer flex-row items-center focus:outline-none">
                <BsFillTelephoneFill size={16} className="" />
                <span className="block py-2 px-2 lg:hover-bg-transparent lg-border-0 lg-p-0">
                  +90 555 555 55 55
                </span>
              </span>
            </Link>
          </div>
          <div className="flex justify-center items-center text-[#0c3b59]">
            <Link href="/login">
              <span className="relative flex cursor-pointer flex-row items-center focus:outline-none">
                <span className="block py-2 px-2 lg:hover-bg-transparent lg-border-0 lg-p-0">
                  <BsFillFlagFill size={16} className="" />
                </span>
                TR
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
