import React from "react";
import { BIKE_CATEGORIES } from "../constants/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const BikeCategories = () => {
  return (
    <div className="mt-15 px-5 w-full text-text-primary">
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
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeIn",
            }}
            key={index}
            className="mb-10 flex-shrink-0 w-[350px]"
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BikeCategories;
