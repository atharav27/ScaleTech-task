import React, { useContext, useState, useEffect } from "react";
import { FormDataContext } from "../context/context.js";

const EmployeeDetails = () => {
  const { formData, handleFormSubmit } = useContext(FormDataContext);
  const [localFormData, setLocalFormData] = useState({
    jobTitle: "",
    employmentStatus: "",
    skills: [],
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { id, name, value, checked, type } = e.target;

    if (name === "skills") {
      if (checked) {
        setLocalFormData({
          ...localFormData,
          skills: [...localFormData.skills, id],
        });
      } else {
        setLocalFormData({
          ...localFormData,
          skills: localFormData.skills.filter((skill) => skill !== id),
          unchecked,
        });
      }
    } else if (type === "radio") {
      setLocalFormData({
        ...localFormData,
        employmentStatus: value,
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [id]: value,
      });
    }
    console.log(localFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit("employeeDetails", localFormData);
  };

  return (
    <div className=" mx-8 sm:pl-20  mt-8 sm:mr-10">
      <h1 className="text-lg mt-6 font-medium">Employee Details</h1>
      <form onSubmit={handleSubmit} className="pl-8 mt-6">
        <div className="flex flex-col">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Current Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            onChange={handleChange}
            value={localFormData.jobTitle}
            placeholder="Enter your current job title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required={false}
          />
        </div>

        <div className="flex flex-col">
          <fieldset className="mt-4">
            <legend className="block text-sm font-medium text-gray-700">
              Employment Status
            </legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="employed"
                  name="employmentStatus"
                  onChange={handleChange}
                  value="employed"
                  checked={localFormData.employmentStatus === "employed"}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="employed"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Employed
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="unemployed"
                  name="employmentStatus"
                  onChange={handleChange}
                  value="unemployed"
                  checked={localFormData.employmentStatus === "unemployed"}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="unemployed"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Unemployed
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="student"
                  name="employmentStatus"
                  onChange={handleChange}
                  value="student"
                  checked={localFormData.employmentStatus === "student"}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="student"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Student
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="retired"
                  name="employmentStatus"
                  onChange={handleChange}
                  value="retired"
                  checked={localFormData.employmentStatus === "retired"}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="retired"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Retired
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mt-4">
            <legend className="block text-sm font-medium text-gray-700">
              Skills
            </legend>
            <div className="mt-2 space-y-2">
              {[
                { label: "Programming", value: "programming" },
                { label: "Project Management", value: "projectManagement" },
                { label: "Design", value: "design" },
                { label: "Data Analysis", value: "dataAnalysis" },
                { label: "Communication", value: "communication" },
              ].map((skill) => (
                <div className="flex items-center" key={skill.value}>
                  <input
                    type="checkbox"
                    id={skill.value}
                    name="skills"
                    onChange={handleChange}
                    checked={localFormData.skills.includes(skill.value)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={skill.value}
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {skill.label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
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

export default EmployeeDetails;
