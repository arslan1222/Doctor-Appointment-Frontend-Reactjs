import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality, docId}) => {

    const navigate = useNavigate();

    const {doctors} = useContext(AppContext);

    const [relDoctors, setRelDoctors] = useState([]);

    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsDate = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoctors(doctorsDate)
        }


    },[doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/2 text-center text-sm'>Simply browse through our extenxive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 cursor-pointer'>
            {relDoctors.slice(0, 5).map((item, index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='con-border rounded-xl overflow-hidden cursoer-pointer hover:translate-y-[-10px] translation-all duration-500'>
                    <img className='bg-blue' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green'>
                        <p className='w-2 h-2 bg-green rounded-full '></p> <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0.0)}} className='bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-8 hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base'>more..</button>
    </div>
  )
}

export default RelatedDoctors