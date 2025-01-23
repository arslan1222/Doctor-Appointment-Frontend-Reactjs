import React from 'react'
import aboutImg from '../assets/about_image.png'
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      >
        <div className='text-center text-2xl pt-10 text-gray-700'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={aboutImg} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-800'>
            <p>Our doctor appointment platform offers a seamless experience for booking consultations with trusted healthcare professionals. Whether you're seeking a general check-up, specialized treatment, or expert medical advice, our system ensures you can connect with certified doctors quickly and efficiently. Designed to prioritize convenience, the platform allows you to explore doctor profiles, view their qualifications, and book slots at your preferred time.</p>
            <p>Committed to quality healthcare access, we bridge the gap between patients and professionals with a secure and reliable interface. All interactions are safeguarded to protect your personal information while enhancing your overall experience. From consultation booking to follow-up, we’re dedicated to simplifying your healthcare journey.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision is to revolutionize healthcare accessibility by creating a trusted, seamless, and user-friendly platform that connects patients with the best medical professionals. We aim to empower individuals to take charge of their health by providing quick and reliable access to quality care, anytime and anywhere.</p>
          </div>
        </div>
        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='flex flex-col con-border px-6 md:px-16 py-8 sm:py-12 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>EFFICIENCY</b>
            <p>Streamlined appointment scheduling that fits into your bury lifestyle.</p>
          </div>
          <div className='flex flex-col con-border px-6 md:px-16 py-8 sm:py-12 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>CONVINIENCE:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='flex flex-col con-border px-6 md:px-16 py-8 sm:py-12 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>PERSONALIZATION</b>
            <p>Tailored recommendation and reminders to help you stay on to of your health.</p>
          </div>
        </div>
    </motion.div>
  )
}

export default About