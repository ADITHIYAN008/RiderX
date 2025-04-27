import React, { useState } from "react";
import Herosection from "./Herosection";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="w-full text-center bg-primary text-black">
        <div className="flex justify-between  items-center p-5">
          <h1 className="font-primary text-3xl text-text-primary">RIDERX</h1>
          <div className="relative">
            {/* Menu Icon */}
            <HiOutlineMenuAlt3
              className={`absolute right-2 -top-3 text-3xl cursor-pointer text-text-primary transition-all duration-500 transform ${
                isOpen
                  ? "opacity-0 scale-50 rotate-45"
                  : "opacity-100 scale-100 rotate-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />

            {/* Close Icon */}
            <IoClose
              className={`absolute right-2 -top-3 text-3xl cursor-pointer text-text-primary transition-all duration-500 transform ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-50 rotate-45"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div>
          <Herosection />
        </div>
        <div
          className={`absolute top-20 p-10 right-5 w-[360px] bg-text-primary/25 backdrop-blur-3xl text-text-primary min-h-[350px] rounded-2xl transition-all duration-500 origin-top-right ${
            isOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-0 invisible"
          }`}
        >
          <ul className="flex flex-col gap-9">
            <li className="flex items-center text-shadow-lg justify-between cursor-pointer">
              <h2>ROAD BIKE</h2>
              <FaArrowRightLong />
            </li>
            <li className="flex items-center text-shadow-lg justify-between cursor-pointer">
              <h2>MOUNTAIN BIKE</h2>
              <FaArrowRightLong />
            </li>
            <li className="flex items-center text-shadow-lg justify-between cursor-pointer">
              <h2>BMX BIKE</h2>
              <FaArrowRightLong />
            </li>
            <li className="flex text-shadow-lg items-center justify-between cursor-pointer">
              <h2>BIKE ACCESSORIES</h2>
              <FaArrowRightLong />
            </li>
            <li className="flex text-shadow-lg items-center justify-between cursor-pointer">
              <h2>CONTACT US</h2>
              <FaArrowRightLong />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
