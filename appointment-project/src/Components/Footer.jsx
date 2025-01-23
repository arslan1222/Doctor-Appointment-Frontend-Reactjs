import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='md:ms-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 my-30 text-sm'>
            {/* Left Side */}
            <div>
                <img className='mb-5 w-40' src={logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>We are committed to making healthcare more accessible and convenient for everyone. From booking appointments to connecting with trusted professionals, we strive to simplify your journey toward better health.</p>
            </div>
            {/* Center */}

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* Right Side */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>(+92) 321-7077229</li>
                    <li>arslanhaiderchand88@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* Copyright */}
        <div>
           <p className='py-5 text-sm text-center'>&copy; Copyright 2025 Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
