import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import BikeImage from "../assets/Bike8.png";

const HeroSection = () => {
  return (
    <>
      <div className="relative mt-10">
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: 7,
          }}
          end={{
            y: 0,
          }}
          // Moves the arrow to the right
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-32 h-12 top-40 left-4 rounded-2xl bg-text-primary/30 backdrop-blur-3xl text-text-primary/80 text-xs flex justify-center items-center font-secondary text-left pl-4"
        >
          Your Ride, Your Adventure.
          <div className="flex absolute bottom-2 left-20">
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
          </div>
        </motion.div>

        <div className="absolute left-10 font-primary text-text-primary/30 text-6xl backdrop-blur-3xl">
          <motion.h1
            initial={{
              x: 0,
              y: 35,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
          >
            ERGONOMIC
          </motion.h1>
          <motion.h1
            initial={{
              x: 0,
              y: 35,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
          >
            CONTROL AT HAND
          </motion.h1>
        </div>

        <div className="relative overflow-hidden">
          <motion.img
            initial={{ y: 35, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="z-0"
            src={BikeImage}
            alt="A stylish ergonomic bike with advanced features"
          />
          <motion.h1
            initial={{
              x: 0,
              y: 35,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            className="absolute z-10 bottom-0 left-12 font-primary text-5xl text-text-primary"
          >
            RIDE BEYOND LIMITS.
          </motion.h1>
        </div>

        <div className="absolute right-11 bottom-36 w-24 h-10 border border-text-primary/40 rounded-xl text-xs flex items-center justify-center text-text-primary/70">
          Carbon Fiber
        </div>
        <div className="absolute right-[177px] bottom-[166px] w-px h-30 -rotate-45 bg-text-primary/40"></div>
        <div className="absolute w-1 h-1 right-[218px] bottom-[267px] border border-text-primary/40 rounded-full"></div>

        <div className="absolute right-7 top-36 w-24 h-10 border border-text-primary/40 rounded-xl text-xs flex items-center justify-center text-text-primary/70 text-wrap max-w-[80px]">
          Suspension Fork
        </div>
        <div className="absolute top-[160px] right-34 w-px h-16 -rotate-[110deg] bg-text-primary/40"></div>
        <div className="absolute w-1 h-1 right-[166px] top-[201.5px] border border-text-primary/40 rounded-full"></div>
      </div>

      <div className="text-text-primary px-5 mt-8">
        <motion.p
          initial={{
            x: 0,
            y: 35,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          className="text-[10px] text-text-primary/70"
        >
          Choose from a variety of models tailored to your specific riding style
          and preferences—whether it’s for city commuting, mountain trails, or
          long-distance touring.
        </motion.p>
        <button className="px-7 py-3 text-text-primary font-secondary text-sm border border-white rounded-full mt-8 flex items-center gap-4 mx-auto">
          Explore Bikes{" "}
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              x: 10,
            }}
            end={{
              x: 0,
            }}
            // Moves the arrow to the right
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowRightLong />
          </motion.div>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
