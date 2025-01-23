import React from 'react'
import appointImg from '../assets/appointment_img.png'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"


const Banner = () => {

    const navigate = useNavigate();


  return (
    <motion.div className='flex bg-primary rounded-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10'
    initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        {/* Left Side */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                <p>Book Appointment</p>
                <p className='mt-2'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm:text-base text-gray-600 px-6 py-2 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
        </div>


        {/* Right Side */}
        <div className='hidden md:block md:w-1/2 lg:w-[350px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={appointImg} alt="" />
        </div>
    </motion.div>
  )
}

export default Banner