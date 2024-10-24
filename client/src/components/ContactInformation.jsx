import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../context/context.js";
// import { useNavigate } from "react-router-dom";

const ContactInformation = () => {
  const { formData, handleFormSubmit } = useContext(FormDataContext);
  // const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const [localFormData, setLocalFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLocalFormData({
      ...localFormData,
      [e.target.id]: e.target.value,
    });
    console.log(localFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit("contectInformation", localFormData);
  };

  return (
    <div className=" mx-8 sm:pl-20  mt-8 sm:mr-10">
      <h1 className="text-lg  font-medium">Contact Information</h1>

      <form onSubmit={handleSubmit} className="pl-8 mt-6">
        <div className=" flex flex-col mt-2 ">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            value={localFormData.fullName}
            required
            className="mt-1 px-3 w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>

          <input
            id="address"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
            value={localFormData.address}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            value={localFormData.state}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select your state</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            <option value="Texas">Texas</option>
            <option value="Washington">Washington</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleChange}
            value={localFormData.phoneNumber}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-end">
          <button
            type="submit"
            className=" mt-4 px-5 py-1  rounded bg-primary/20"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
