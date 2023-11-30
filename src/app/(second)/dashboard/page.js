import Image from "next/image";

export const metadata = {
  title: `Dashboard`,
};

export default function Page() {
  return (
    <div className="">
      <div className="h-full ml-14 mb-10 md:ml-64">
        {/* 4lü kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <h1 className="text-blue-600">Logo</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl">5213</p>
              <p>Total Ziyaretci</p>
            </div>
          </div>
          <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <h1 className="text-blue-600">Logo</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl">123</p>
              <p>Gunluk Ziyaretci</p>
            </div>
          </div>
          <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <h1 className="text-blue-600">Logo</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl">14</p>
              <p>Gunluk Kiralanan Oda</p>
            </div>
          </div>
          <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <h1 className="text-blue-600">Logo</h1>
            </div>
            <div className="text-right">
              <p className="text-2xl">$1,475</p>
              <p>Gunluk Gelir</p>
            </div>
          </div>
        </div>
        {/* 2li kartlar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          {/* sosyal kismi */}
          <div className="relative border-b-2 border-gray-400 bg-neutral-700 flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Istatistikler
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Oda Adi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Kiralanma Sayisi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                        Digerlerine Gore Oranlar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        A
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        6
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">30%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-500">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        B
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        3
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">15%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        C
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">10%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        D
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        5
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">25%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-400">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        E
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        4
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">20%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* aktivite kismi */}
          <div className="relative border-b-2 border-gray-400 flex flex-col min-w-0  break-words bg-neutral-700 w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Son Aktiviteler
                  </h3>
                </div>
              </div>
              <div className="block w-full">
                <div className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bugun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <span className="w-9 h-9 text-indigo-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-300 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                      <span className="w-9 h-9 text-red-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="px-4 bg-neutral-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Dun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3"></div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2li kartlar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          {/* sosyal kismi */}
          <div className="relative border-b-2 border-gray-400 bg-neutral-700 flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Istatistikler
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Oda Adi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Kiralanma Sayisi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                        Digerlerine Gore Oranlar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        A
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        6
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">30%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-500">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        B
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        3
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">15%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        C
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">10%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        D
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        5
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">25%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-400">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        E
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        4
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">20%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* aktivite kismi */}
          <div className="relative border-b-2 border-gray-400 flex flex-col min-w-0  break-words bg-neutral-700 w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Son Aktiviteler
                  </h3>
                </div>
              </div>
              <div className="block w-full">
                <div className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bugun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <span className="w-9 h-9 text-indigo-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-300 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                      <span className="w-9 h-9 text-red-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="px-4 bg-neutral-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Dun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3"></div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 2li kartlar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          {/* sosyal kismi */}
          <div className="relative border-b-2 border-gray-400 bg-neutral-700 flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Istatistikler
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Oda Adi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Kiralanma Sayisi
                      </th>
                      <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                        Digerlerine Gore Oranlar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        A
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        6
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">30%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-500">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        B
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        3
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">15%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        C
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        2
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">10%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        D
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        5
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">25%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-400">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <th className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        E
                      </th>
                      <td className="border-t-0 text-white px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        4
                      </td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-white">20%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-300">
                              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* aktivite kismi */}
          <div className="relative border-b-2 border-gray-400 flex flex-col min-w-0  break-words bg-neutral-700 w-full shadow-lg rounded-md">
            <div className="rounded-t mb-0 px-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-200">
                    Son Aktiviteler
                  </h3>
                </div>
              </div>
              <div className="block w-full">
                <div className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bugun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <span className="w-9 h-9 text-indigo-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-300 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                      <span className="w-9 h-9 text-red-50"></span>
                    </div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="px-4 bg-neutral-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Dun
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3"></div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, voluptates.
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <span className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                            Goruntule
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
