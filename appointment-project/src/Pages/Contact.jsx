import React from "react";
import contactImage from "../assets/contact_image.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {


  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={contactImage} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            NEW BAKER STREET <br /> SUITE 335, SIALKOT, PAKISTAN
          </p>
          <p className="">
            Tel: (+92) 321-7077229 <br /> Email: arslanhaiderchand88@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">Careers at Prescripto</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>

          <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 mt-8 transition-colors duration-300 text-sm sm:text-base">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
