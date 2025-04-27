import React from "react";
import { BIKE_CATEGORIES } from "../constants/data";
import { FaArrowRightLong } from "react-icons/fa6";

const BikeCategories = () => {
  return (
    <div className="mt-15 px-5 w-full text-text-primary mb-40">
      <div className="relative">
        <h1 className="font-primary relative z-50 text-xl">Bike Categories</h1>
        <img
          className="absolute -top-12 -left-14 z-20 w-[220px] h-[120px]"
          src="src/assets/brush.png"
          alt=""
        />
      </div>
      <div className="flex flex-col mt-7 overflow-x-auto max-w-full no-scrollbar">
        {BIKE_CATEGORIES.map((item, index) => (
          <div key={index} className="mb-10 flex-shrink-0 w-[350px]">
            <div className="w-full h-[200px] bg-itembg rounded-lg relative">
              <a href="#">
                <img
                  className="rounded-lg cursor-pointer object-cover w-full h-full"
                  src={item.img}
                  alt={item.title}
                />
              </a>
            </div>
            <a
              href="#"
              className="mt-5 cursor-pointer flex items-center gap-4 font-bold"
            >
              {item.title} <FaArrowRightLong />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeCategories;
