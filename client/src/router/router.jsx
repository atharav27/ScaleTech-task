import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import ContactInformation from '../components/ContactInformation';
import SchoolingInformation from '../components/SchoolingInformation';



const router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/contact-information" element={<ContactInformation/>} />
        <Route path="/schooling-information" element={<SchoolingInformation/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default router
    