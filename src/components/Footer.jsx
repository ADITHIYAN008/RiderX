import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-text-primary mb-26 grid grid-cols-2 gap-10 px-5">
        <div>
          <h2 className="uppercase font-bold font-primary text-xl mb-3">
            Support
          </h2>
          <ul className="text-[12px] text-nowrap flex flex-col gap-2 text-text-primary/80">
            <li className="cursor-pointer">Franchise Enquiry</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Warranty Registration</li>
            <li className="cursor-pointer">Warranty Claim</li>
            <li className="cursor-pointer">Payments</li>
            <li className="cursor-pointer">Cancellations & Returns</li>
            <li className="cursor-pointer">Frequently Asked Questions</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase font-bold font-primary text-xl mb-3">
            About
          </h2>
          <ul className="text-[12px] text-nowrap flex flex-col gap-2 text-text-primary/80">
            <li className="cursor-pointer">Corporate Profile</li>
            <li className="cursor-pointer">Product Catalogue</li>
            <li className="cursor-pointer">Store Locator</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase font-bold font-primary text-xl mb-3">
            Policy
          </h2>
          <ul className="text-[12px] text-nowrap flex flex-col gap-2 text-text-primary/80">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms and Conditions</li>
            <li className="cursor-pointer">Warranty Policy</li>
            <li className="cursor-pointer">Shipping Policy</li>
          </ul>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="flex justify-center items-center text-text-primary/60 text-[10px] gap-1">
          Shop.co
          <FaRegCopyright /> 2000 - 2027, All Rights Reserved
        </h2>
        <div className="h-[0.2px] w-[350px] mt-4 bg-text-primary/30 mx-auto"></div>
        <div className="flex gap-1 justify-center mt-3">
          <img className="w-10 h-7" src="src/assets/visa.png" alt="visa" />
          <img className="w-10 h-7" src="src/assets/master.png" alt="master" />
          <img className="w-10 h-7" src="src/assets/paypal.png" alt="paypal" />
          <img
            className="w-10 h-7"
            src="src/assets/applepay.png"
            alt="applepay"
          />
          <img className="w-10 h-7" src="src/assets/gpay.png" alt="gpay" />
        </div>
      </div>
    </>
  );
};

export default Footer;
