import Link from "next/link";

export async function Footer() {
  return (
    <div>
      <footer className="bg-[#272727]">
        <div className="container px-6 py-12 mx-auto">
          <div className="flex justify-between">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-300 xl:text-2xl">
                ILETISIM
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-4 text-gray-400">
                <span>
                  Loryma Resort | Turunç Mahallesi | 93.Sk. No. 2A | 48740{" "}
                  <br /> Marmaris | Muğla | Türkiye
                </span>
                <span>+90 252 476 77 77</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start space-y-2 px-12">
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Cerez Politikası
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  KVKK
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Mesafeli Satış Sözleşmesi
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-500"
                >
                  Fact Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#222222] ">
        <div className="container px-6 py-6 mx-auto">
          <div className="flex items-center justify-between my-8">
            <a href="#">
              <h1 className="text-xl text-gray-400 tracking-wide">
                Copyright 2023 <span className="text-gray-200"><br className="md:hidden" />Vihobook</span> <br className="md:hidden" />
                All rights reserved.
              </h1>
            </a>

            <div className="flex items-center px-6">
              <a
                href="#"
                className="mx-2 text-gray-400 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
