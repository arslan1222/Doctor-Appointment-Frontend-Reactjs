import React from "react";
import { specialityData } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const SpecialityMenu = () => {
  return (
    <motion.div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800"
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/2 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`}>
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SpecialityMenu;
