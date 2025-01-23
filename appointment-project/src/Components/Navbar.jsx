import React, { useState } from 'react'
import logo from '../assets/logo.png'
import profilePic from '../assets/profile_icon1.jpg'
import dropdown from '../assets/dropdown.png'
import {NavLink, useNavigate} from 'react-router-dom'
import openIcon from '../assets/open_menu1.png'
import clossIcon from '../assets/cross_icon.svg'



const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);  // When we have token it means we are logged in if we have not token then we are logged out.
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} src={logo} alt="" className='w-36 cursor-pointer'  />
        <ul className='hidden md:flex items-start gap-5 fornt-medium'>
          <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img src={profilePic} alt="" className='w-8 rounded-full' />
                <img src={dropdown} alt="" className='w-3' />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='mim-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
            </div>
            : <button onClick={()=> navigate('/login')} className='bg-primary text-white border-none px-3 py-1.5 rounded-full font-light block md:hidden text-xs'>
            <span className='hidden sm:inline'>Create Account</span>
            <span className='inline sm:hidden'>Account</span></button>
          }
          <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={openIcon} alt="" />
          {/* Mobile Display */}

          <div onClick={()=>setShowMenu(false)} className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-8 py-6 cursor-pointer'>
              <img className='w-36' src={logo} alt="" />
              <img className='w-6' onClick={()=>setShowMenu(false)} src={clossIcon} alt="" />
            </div>
            <ul onClick={()=>setShowMenu(false)} className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
              <NavLink to='/' onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded full inline-black'>HOME</p></NavLink>
              <NavLink to='/doctors' onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded full inline-black'>ALL DOCTORS</p></NavLink>
              <NavLink to='/about' onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded full inline-black'>ABOUT</p></NavLink>
              <NavLink to='/contact' onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded full inline-black'>CONTACT</p></NavLink>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar