import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ContactInformation from "./components/ContactInformation";
import SchoolingInformation from "./components/SchoolingInformation"; 
import EmployeeDetails from "./components/EmployeeDetails";
import Hobbies from "./components/Hobbies";
import PreferedContact from "./components/PreferedContact";
import { FormDataContext } from "../src/context/context.js";

function App() {
  // const loadFormData = () => {
  //   const savedFormData = localStorage.getItem("formData");
  //   return savedFormData
  //     ? JSON.parse(savedFormData)
  //     : {
  //         contactInformation: {}, 
  //         schoolingInformation: {},
  //         employeeDetails: {},
  //         hobbies: {},
  //         preferedContact: {},
  //       };
  // };

 
  const [formData, setFormData] = useState({
    contectInformation: {},
    schoolingInformation: {},
    employeeDetails: {},
    hobbies: {},
    preferedContact: {},
  });

 
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleFormSubmit = (formName, newFormData) => {
    const combinedData = { ...formData, [formName]: newFormData };
    setFormData(combinedData);
    console.log(combinedData);
  };

  const [currentComponent, setCurrentComponent] =
    useState("ContactInformation");

  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <>
      <FormDataContext.Provider value={{ formData, handleFormSubmit }}>
        <Navbar />
        <div className="flex ">
          <div className=" w-[15%] md:w-[25%] h-screen border-r-2 border-secondary/80">
            <Sidebar handleButtonClick={handleButtonClick} />
          </div>

          <div className="">
            <main>
              {currentComponent === "ContactInformation" && (
                <ContactInformation />
              )}
              {currentComponent === "SchoolingInformation" && (
                <SchoolingInformation />
              )}
              {currentComponent === "EmployeeDetails" && <EmployeeDetails />}
              {currentComponent === "Hobbies" && <Hobbies />}
              {currentComponent === "PreferedContact" && <PreferedContact />}
            </main>
          </div>
        </div>
      </FormDataContext.Provider>
    </>
  );
}

export default App;
