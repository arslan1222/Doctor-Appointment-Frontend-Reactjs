import React, { useContext } from 'react'
import {AppContext} from '../Context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext);

  return (
    <div>
        <p className='pd-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
        <div>
          {doctors.slice(0,3).map((item, index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 bg-indigo' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-zinc-700 font-medium mt-1'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-sx'>Address:</p>
                <p>{item.address.line1}</p>
                <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 31, December | 9:00 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm-min-45 py-1 con-border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm-min-45 px-6 py-1 con-border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyAppointments