import React, { useState, useContext } from "react";
import { BurgerContext } from "../assets/context/BurgerContext";
import { NavLink } from "react-router-dom";

function Nav(props) {
    const {open, setOpen} = useContext(BurgerContext)
  return (
    <nav className="flex items-center gap-50 p-14 mobile3:gap-12 mobile3:p-14  ">
        
      <ul
        className={`flex rounded-6  gap-24  tablemin:gap-16 mobile3:absolute mobile3:top-0 mobile3:left-0 mobile3:flex mobile3:flex-col mobile3:gap-0  mobile3:p-20 mobile3:bg-secondary mobile3:z-10 mobile3:w-full   mobile3:transition-all mobile3:duration-500 mobile3:ease-in-out  ${
          open?"mobile3:top-0 ":" mobile3:top-[-500px]"
        } `}
        >
        <li className="font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary mobile3:hover:text-white rounded-6 table:py-12 table:text-text16 mobile3:text-text12  mobile3:mt-[80px] mobile3:hover:bg-primary mobile3:p-6 ">
         <NavLink to="/"> Home</NavLink>
        </li>
        <li className="font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary mobile3:hover:text-white rounded-6  table:py-12 table:text-text16 mobile3:text-text12  mobile3:hover:bg-primary mobile3:p-6  ">
        <NavLink to="/courses"> Courses</NavLink>
        </li>
        <li className="font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary mobile3:hover:text-white rounded-6  table:py-12 table:text-text16 mobile3:text-text12  mobile3:hover:bg-primary mobile3:p-6  ">
        <NavLink to="/about">  About Us</NavLink>
         
        </li>
        <li className="font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary mobile3:hover:text-white rounded-6  table:py-12 table:text-text16 mobile3:text-text12  mobile3:hover:bg-primary mobile3:p-6  ">
          Pricing
        </li>
        <li className="font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary mobile3:hover:text-white rounded-6  table:py-12 table:text-text16 mobile3:text-text12  mobile3:hover:bg-primary mobile3:p-6  ">
          Contact
        </li>
       
      </ul>
    </nav>
  );
}

export default Nav;
