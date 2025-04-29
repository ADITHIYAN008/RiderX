import React, { useEffect, useRef } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TESTIMONIALS } from "../constants/data";

const renderStars = (ratingStr) => {
  const rating = parseFloat(ratingStr.split("/")[0]);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="size-5 mr-2 text-yellow-300" />
      ))}
      {hasHalfStar && <FaStarHalf className="size-5 text-yellow-300" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="size-5 text-yellow-300" />
      ))}
    </>
  );
};

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 1; // Change this value to control speed

    const interval = setInterval(() => {
      container.scrollLeft += scrollSpeed;

      // If scrolled to end of first duplicate, reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 5); // every 20ms, smooth feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-13 mx-4 mt-7 text-text-primary overflow-hidden">
      <div className="relative mb-7">
        <h1 className="font-primary ml-2 relative z-50 text-xl">
          OUR HAPPY CUSTOMERS
        </h1>
        <img
          className="absolute -top-12 -left-15 z-20 w-[290px] h-[120px]"
          src="src/assets/brush.png"
          alt=""
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 no-scrollbar"
        style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
          <div
            key={index}
            className="px-5 py-5 border border-white rounded-3xl max-w-[330px] h-auto flex-shrink-0 text-text-secondary"
          >
            <div className="flex mb-4">{renderStars(item.stars)}</div>
            <h3 className="flex mb-3 font-bold gap-2 items-center ">
              <img
                className="w-6 h-6 rounded-full"
                src={item.avatar}
                alt="profile pic"
              />
              {item.name}
              <IoCheckmarkCircle size={18} className="text-white" />
            </h3>
            <p className="text-[12px]">"{item.paragraph}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
