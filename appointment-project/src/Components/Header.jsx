import React from "react";
import groupProfile from "../assets/group_profiles.png";
import arrowImg from "../assets/arrow_img.png";
import headerImg from "../assets/header_img.png";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20"
    initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
      {/* Two sections */}
      {/* Left side and Right side */}

      {/* ------ Left Section ------ */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]  ">
        <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light">
          <img className="w-28" src={groupProfile} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0  hover:scale-105 transition-all duration-300"
          href="#speciality"
        >
          Book Appointment
          <img className="w-3" src={arrowImg} alt="" />
        </a>
      </div>

      {/* ----- Right Swection ----- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={headerImg}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Header;
