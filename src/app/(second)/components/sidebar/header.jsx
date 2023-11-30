"use client";

import { TbLayoutNavbarCollapse } from "react-icons/tb";

export const Header = () => {
  return (
    <div>
      <div className="relative flex flex-row items-center h-11 hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg focus:outline-none cursor-pointer">
        <span className="inline-flex justify-center items-center ml-4">
          <TbLayoutNavbarCollapse size={20} />
        </span>
        <span className="ml-2 text-md tracking-wide truncate">Header</span>
      </div>
    </div>
  );
};
