import React from "react";
import { FaBell } from "react-icons/fa";
import userImg from "../assets/user.jpg";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between py-2 px-3 md:px-16 shadow-sm">
      <h1 className=" font-bold text-primary/90 text-xl md:text-3xl">
        Personal
      </h1>
      <div className="flex justify-center gap-1 md:gap-2 items-center">
        <FaBell className="w-5 h-5 md:w-6 md:h-6  opacity-80" />
        <img src={userImg} alt="" className="w-8 h-8 md:w-10 md:h-10" />
        <h2 className="text-md md:text-xl">Atharv</h2>
      </div>
    </div>
  );
};

export default Navbar;
