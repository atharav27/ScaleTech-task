import React, { useState, useContext , useEffect} from "react";
import { FormDataContext } from "../context/context.js";

const SchoolingInformation = () => {
  const { formData, handleFormSubmit } = useContext(FormDataContext);
  const [gpa, setGpa] = useState(0.0);
  const [localFormData, setLocalFormData] = useState({
    qualification: "",
    graduationYear: "",
    subjects: [],
    gpa: 0,
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setLocalFormData((prev) => ({
        ...prev,
        subjects: [...prev.subjects, id],
      }));
    } else {
      setLocalFormData((prev) => ({
        ...prev,
        subjects: prev.subjects.filter((subject) => subject !== id), //
      }));
    }

    console.log(localFormData.subjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit("schoolingInformation", localFormData);
  };

  const handleGpaChange = (event) => {
    setGpa(event.target.value);
    setLocalFormData((prev) => ({
      ...prev,
      gpa: event.target.value,
    }));
  };

  return (
    <div className="  mx-8 sm:pl-20  mt-8 sm:mr-10">
      <h1 className="text-lg  mt-6 font-medium">Schooling Information</h1>
      <form onSubmit={handleSubmit} className="pl-8 mt-6">
        <div className="flex flex-col mt-2">
          <label
            htmlFor="qualification"
            className="block text-sm font-medium text-gray-700"
          >
            Highest Qualification
          </label>
          <select
            id="qualification"
            name="qualification"
            onChange={(e) =>
              setLocalFormData({
                ...localFormData,
                qualification: e.target.value,
              })
            }
            value={localFormData.qualification}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select your qualification</option>
            <option value="High School">High School</option>
            <option value="Associate Degree">Associate Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="graduationYear"
            className="block text-sm font-medium text-gray-700"
          >
            Graduation Year
          </label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            placeholder="Enter graduation year"
            min="1950"
            max="2024"
            onChange={(e) =>
              setLocalFormData({
                ...localFormData,
                graduationYear: e.target.value,
              })
            }
            value={localFormData.graduationYear}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <fieldset className="mt-4">
            <legend className="block text-sm font-medium text-gray-700">
              Subjects Studied
            </legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="math"
                  name="subjects"
                  onChange={handleChange}
                  checked={localFormData.subjects.includes("math")}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="math"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Mathematics
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="physics"
                  name="subjects"
                  onChange={handleChange}
                  checked={localFormData.subjects.includes("physics")}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="physics"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Physics
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="chemistry"
                  name="subjects"
                  onChange={handleChange}
                  checked={localFormData.subjects.includes("chemistry")}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="chemistry"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Chemistry
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="biology"
                  name="subjects"
                  onChange={handleChange}
                  checked={localFormData.subjects.includes("biology")}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="biology"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Biology
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="cs"
                  name="subjects"
                  onChange={handleChange}
                  checked={localFormData.subjects.includes("cs")}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="cs"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Computer Science
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="gpa"
            className="block text-sm font-medium text-gray-700"
          >
            Grade Point Average (GPA)
          </label>
          <input
            type="range"
            id="gpa"
            name="gpa"
            min="0"
            max="4"
            step="0.1"
            value={localFormData.gpa}
            onChange={handleGpaChange}
            className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="mt-2 text-sm text-gray-700">Current GPA: {gpa}</div>
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

export default SchoolingInformation;
