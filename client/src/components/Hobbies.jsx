import React, { useState, useContext, useEffect } from "react";
import { FormDataContext } from "../context/context.js";

const Hobbies = () => {
  const { formData, handleFormSubmit } = useContext(FormDataContext);

  const [localFormData, setLocalFormData] = useState({
    favoriteHobby: "",
    techInterest: 0,
    sportsParticipation: "yes",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { type, value, id } = e.target;
    if (type === "radio") {
      setLocalFormData({
        ...localFormData,
        sportsParticipation: value,
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [id]: value,
      });
    }
  };

  const handleTechInterestChange = (e) => {
    setLocalFormData({
      ...localFormData,
      techInterest: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit("hobbies", localFormData);
  };

  return (
    <div className=" mx-8 sm:pl-20  mt-8 sm:mr-10">
      <h1 className="text-lg  mt-6 font-medium">Hobbies and Interests</h1>
      <form onSubmit={handleSubmit} className="pl-8 mt-6">
        <div className="flex flex-col mt-3">
          <label
            htmlFor="favoriteHobby"
            className="block text-sm font-medium text-gray-700"
          >
            Favorite Hobby
          </label>
          <input
            type="text"
            id="favoriteHobby"
            name="favoriteHobby"
            onChange={handleChange}
            value={localFormData.favoriteHobby}
            placeholder="Enter your favorite hobby"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label
            htmlFor="techInterest"
            className="block text-sm font-medium text-gray-700"
          >
            Level of Interest in Technology
          </label>
          <input
            type="range"
            id="techInterest"
            name="techInterest"
            min="1"
            max="10"
            step="1"
            value={localFormData.techInterest}
            onChange={handleTechInterestChange}
            className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="mt-2 text-sm text-gray-700">
            Current Level of Interest: {localFormData.techInterest}
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <legend className="block text-sm font-medium text-gray-700">
            Do you participate in any sports?
          </legend>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="yes"
                name="sportsParticipation"
                value="yes"
                onChange={handleChange}
                checked={localFormData.sportsParticipation === "yes"}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="yes" className="ml-2 block text-sm text-gray-900">
                Yes
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="no"
                value="no"
                name="sportsParticipation"
                onChange={handleChange}
                checked={localFormData.sportsParticipation === "no"}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="no" className="ml-2 block text-sm text-gray-900">
                No
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

export default Hobbies;
