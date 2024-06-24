import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaKickstarterK,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[--primary] text-white  ">
      <div className="container mx-auto lg:px-[100px] py-2 flex justify-center gap-10 ">
        <h1 className="flex items-center gap-2  hover:scale-105 duration-200 cursor-pointer font-semibold ">
       
            <span className="bg-white p-3 rounded-full text-[--primary] [box-shadow:inset_0_0_0_2px_#0367A6,_0_0_0_1px_#fff] ">
              <FaKickstarterK />
            </span>
            KOKITO
         
        </h1>

        <div className="flex gap-6 items-center text-xl ">
          <FaInstagram className=" cursor-pointer  duration-200 hover:scale-125 hover:text-[--text] " />
          <FaTelegramPlane className=" cursor-pointer  duration-200 hover:scale-125 hover:text-[--text] " />
          <FaLinkedinIn className=" cursor-pointer  duration-200 hover:scale-125 hover:text-[--text] " />
          <FaGithub className=" cursor-pointer  duration-200 hover:scale-125 hover:text-[--text] " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
