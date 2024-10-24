import React from "react";
import { IoMdContact } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Sidebar = ({ handleButtonClick }) => {
  return (
    <div className="px-2 py-4">
      <button
        className="  py-2  w-full "
        onClick={() => handleButtonClick("ContactInformation")}
      >
        <div className=" flex    items-center  justify-between  ">
          <h2 className="text-md hidden md:block font-semibold md:text-lg">
            Contact Information
          </h2>
          <IoMdContact className="text-primary/90 mx-auto md:mx-0  w-9 h-9 md:w-8 md:h-8" />
        </div>
      </button>
      <button
        className="   py-2  w-full "
        onClick={() => handleButtonClick("SchoolingInformation")}
      >
        <div className=" flex justify-between    items-center">
          <h2 className=" hidden md:block text-md font-semibold md:text-lg">
            Schooling Information
          </h2>
          <FaIdCard  className="text-primary/90 mx-auto md:mx-0  w-7 h-7" />
        </div>
      </button>

      <button
        className="  py-2  w-full "
        onClick={() => handleButtonClick("EmployeeDetails")}
      >
        <div className=" flex  justify-between  items-center     ">
          <h2 className="hidden md:block text-md font-semibold md:text-lg">Employee Details</h2>
          <FaSuitcase  className="text-primary/90 mx-auto md:mx-0  w-7 h-7 " />
        </div>
      </button>
      <button
        className="   py-2 w-full "
        onClick={() => handleButtonClick("Hobbies")}
      >
        <div className=" flex   justify-between   items-center     ">
          <h2 className="hidden md:block text-md font-semibold md:text-lg">
            Hobbies and Interest
          </h2>
          <FaGraduationCap  className="text-primary/90 mx-auto md:mx-0  w-9 h-9" />
        </div>
      </button>
      <button
        className="   py-2 w-full "
        onClick={() => handleButtonClick("PreferedContact")}
      >
        <div className=" flex   justify-between   items-center     ">
          <h2 className="hidden md:block text-md font-semibold md:text-lg">Prefered Contact</h2>
          <FaHeart  className="text-primary/90 mx-auto md:mx-0 w-7 h-7 " />
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
