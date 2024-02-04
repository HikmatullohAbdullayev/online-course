import React, { useContext, useState } from "react";
import VectorIcon from "../assets/icon/VectorIcon";
import Logo from "../assets/img/Logo.png";
import Nav from "../components/Nav";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import { BurgerContext } from "../assets/context/BurgerContext";


function Header(props) {
const {open,setOpen} = useContext(BurgerContext)

  return (
    <div className="relative fixed top-4">
      <div className="flex items-center   justify-center bg-primary rounded-6">
        <p className="text-text18 text-white  text-center py-8 table:text-text16 ">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </p>
        <span className="ml-16 ">
          <VectorIcon />
        </span>
      </div>
      <div className="flex items-center relative justify-between mt-30">
        <div className="flex gap-50">
          <img
            className="table:w-45 tablemin:w-40 tablemin:h-40"
            src={Logo}
            alt="logo"
          />
          <Nav />
        </div>

        <div className="flex gap-10 tablemin:gap-6  mobile:block">
          <Button1> Sing Up</Button1>
          <Button2>Login</Button2>
          <button
          onClick={() => setOpen(!open)}
          className={` flex flex-col justify-center bg-primary rounded-8 w-50 h-50 hidden ${open ? "mt-12 mr-12" : "" } z-20 cursor-pointer mobile3:flex mobil670:gap-8 mobile3:transition-all mobile3:duration-500 mobile3:ease-in-out `}
        >
          <span className=" mx-auto  text-3xl text-white font-600 ">
            <ion-icon className="" name={open ? "close" : "menu"}></ion-icon>
          </span>
        </button>
       
        </div>
      </div>
    </div>
  );
}

export default Header;

