import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import verfiedIcon from "../assets/verified_icon.png";
import doctorInfo from "../assets/doctor_info.png";
import RelatedDoctors from "../Components/RelatedDoctors";


const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDoctorSlots([])

    // Getting current date

    let today = new Date();

    for(let i=0; i<7; i++){
      // Getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i);
      
      // Setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate()+i);

      endTime.setHours(21,0,0,0);

      // Setting hours
      if(today.getDate === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

        // Add slot to array

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Increament time by 30 minute
        currentDate.setMinutes(currentDate.getMinutes()+30);
      }

      setDoctorSlots(prev => ([...prev, timeSlots]))

    }


  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{
    getAvailableSlots();
  }, [docInfo])

  useEffect(()=>{
    getAvailableSlots();

  }, [docInfo])

  useEffect(()=>{
  }, [docSlots])

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="w-full bg-primary sm:max-w-72 rounded"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Doctor information */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={verfiedIcon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt--1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 con-border border text-xs rounded-full ">{docInfo.experience}</button>
            </div>
            {/* About doctor */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img className="w-3" src={doctorInfo} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1" >{docInfo.about}</p>
            </div>
            <p className="mt-4 font-medium text-gray-900">Appointment Fee: <span className="text-gray-700">{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>

        {/* Booking SLots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 item-center w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots.map((item, index)=>(
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-5 min-w-14 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
            </div>
            <div className="flex items-center gap-3 w-ful overflow-x-scroll mt-4">
              {docSlots.length && docSlots[slotIndex].map((item, index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-4 py-1.5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>{item.time.toLowerCase()}</p>
              ))}
          </div>
              <div>
                <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-8 hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">Book an Appointment</button>
              </div>
        </div>
        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
