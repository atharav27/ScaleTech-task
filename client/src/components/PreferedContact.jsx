import React, { useState, useContext, useEffect } from "react";
import { FormDataContext } from "../context/context.js";

const PreferedContact = () => {
  const { formData, handleFormSubmit } = useContext(FormDataContext);
  const [localFormData, setLocalFormData] = useState({
    preferedContact: "email",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { value, id, type } = e.target;
    if (type === "radio") {
      setLocalFormData({
        ...localFormData,
        preferedContact: value,
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit("preferedContact", localFormData);
  };
  return (
    <div className=" mx-8 sm:pl-20  mt-8 sm:mr-10">
      <h1 className="text-lg mt-6 font-medium">Prefered Contact</h1>
      <form onSubmit={handleSubmit} className="pl-8 mt-6">
        <div className="flex flex-col">
          <legend className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </legend>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="email"
                name="preferedContact"
                value="email"
                onChange={handleChange}
                checked={localFormData.preferedContact === "email"}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label
                htmlFor="email"
                className="ml-2 block text-sm text-gray-900"
              >
                Email
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="phone"
                name="preferedContact"
                value="phone"
                onChange={handleChange}
                checked={localFormData.preferedContact === "phone"}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label
                htmlFor="phone"
                className="ml-2 block text-sm text-gray-900"
              >
                Phone
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="sms"
                name="preferedContact"
                value="sms"
                checked={localFormData.preferedContact === "sms"}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label htmlFor="sms" className="ml-2 block text-sm text-gray-900">
                SMS
              </label>
            </div>
          </div>
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

export default PreferedContact;
