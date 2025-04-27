import React from "react";
import { NEW_ARRIVALS } from "../constants/data";

const NewArrivals = () => {
  return (
    <div className="mt-15 px-5 w-full text-text-primary">
      <div className="relative">
        <h1 className="font-primary relative z-50 text-xl">New Arrivals</h1>
        <img
          className="absolute -top-12 -left-14 z-20 w-[220px] h-[120px]"
          src="src/assets/brush.png"
          alt=""
        />
      </div>
      <div className="flex mt-7 gap-5 overflow-x-auto max-w-full no-scrollbar">
        {NEW_ARRIVALS.map((item, index) => (
          <div key={index} className="mb-10 flex-shrink-0 w-[300px]">
            <div className="w-full h-[200px] bg-itembg rounded-lg relative">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={item.img}
                alt={item.title}
              />
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <div className="flex gap-2 items-center">
              <h3 className="mt-2 font-bold text-2xl">
                {item.discount ? item.discount_Price : item.price}
              </h3>
              <h3 className="mt-2 font-bold text-2xl text-[#2f4858]/30 line-through">
                {item.discount && item.price}
              </h3>
              <div className="w-12 h-8 text-center">
                <div className="bg-white/30 rounded-2xl text-sm text-black/60 mt-2.5">
                  {item.discount &&
                    `-${Math.round(
                      ((parseFloat(item.price.slice(1)) -
                        parseFloat(item.discount_Price.slice(1))) /
                        parseFloat(item.price.slice(1))) *
                        100
                    )}%`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="px-13 py-3 text-text-primary font-secondary text-sm border border-white rounded-full mt-1 flex items-center gap-4 mx-auto">
        View More{" "}
      </button>
    </div>
  );
};

export default NewArrivals;
