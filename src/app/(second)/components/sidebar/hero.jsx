import { FaPager } from "react-icons/fa";

export const Hero = () => {
  return (
    <div>
      <div className="relative flex flex-row items-center h-11 hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg focus:outline-none cursor-pointer">
        <span className="inline-flex justify-center items-center ml-4">
          <FaPager size={20} />
        </span>
        <span className="ml-2 text-md tracking-wide truncate">
          Hero Section
        </span>
      </div>
    </div>
  );
};
