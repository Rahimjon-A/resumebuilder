import React from "react";
import { FaUser } from "react-icons/fa";

const Sitebar = ({ sidebar, setSidebar }) => {
  return (
    <div className=" flex flex-col gap-4">
      <div
        onClick={() => setSidebar(1)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 1 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>
      <div
        onClick={() => setSidebar(2)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 2 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>{" "}
      <div
        onClick={() => setSidebar(3)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 3 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>{" "}
      <div
        onClick={() => setSidebar(4)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 4 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>{" "}
      <div
        onClick={() => setSidebar(5)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 5 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>{" "}
      <div
        onClick={() => setSidebar(6)}
        className={`w-[45px] h-[45px] cursor-pointer rounded-lg  ${
          sidebar === 6 ? "bg-[crimson]" : "bg-[#1486cc]"
        } text-white flex  justify-center items-center`}
      >
        <FaUser size={20} />
      </div>
    </div>
  );
};

export default Sitebar;
