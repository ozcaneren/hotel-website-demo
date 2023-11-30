"use client";

import { RiTeamLine } from "react-icons/ri";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Teams = () => {
  return (
    <div>
      <div className="relative flex flex-row items-center h-11 hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg focus:outline-none cursor-pointer">
        <span className="inline-flex justify-center items-center ml-4">
          <RiTeamLine size={20} />
        </span>
        <span className="ml-2 text-md tracking-wide truncate">Ekip</span>
      </div>
    </div>
  );
};
