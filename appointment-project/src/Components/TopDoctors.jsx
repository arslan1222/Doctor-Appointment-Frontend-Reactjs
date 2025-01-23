import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-8 text-gray-900 px-4 sm:px-8 md:px-10 lg:px-20">
      <h1 className="text-xl sm:text-2xl font-medium text-center">
        Top Doctors to Book
      </h1>
      <p className="text-sm sm:text-base text-center max-w-md">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="con-border rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-full aspect-w-1 aspect-h-1 sm:aspect-h-4 bg-blue">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-base sm:text-lg font-medium truncate">
                {item.name}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full mt-8 hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
      >
        More..
      </button>
    </div>
  );
};

export default TopDoctors;
