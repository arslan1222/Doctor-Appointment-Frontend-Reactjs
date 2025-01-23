import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // Extract unique specialities dynamically
  const specialities = [...new Set(doctors.map((doc) => doc.speciality))];

  const applyFilters = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [doctors, speciality]);

  return (
    <div className="px-4 sm:px-8 lg:px-16 my-10">
      <p className="text-gray-700 text-center text-lg mb-6">
        Browse through the doctors' specialities.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Filters Section */}
        <div>
          {specialities.map((spec, idx) => (
            <p
              key={idx}
              onClick={() =>
                speciality === spec
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec}`)
              }
              className={`pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-blue-100 hover:text-blue ${
                speciality === spec ? "bg-blue" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterDoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="con-border rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Updated Image Wrapper */}
              <div className="w-full aspect-w-1 aspect-h-1 bg-blue">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <p className="w-2 h-2 bg-green-600 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium truncate">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
