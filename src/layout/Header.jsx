import  { useContext } from "react";
import VectorIcon from "../assets/icon/VectorIcon";
import Logo from "../assets/img/Logo.png";
import Nav from "../components/Nav";
import Button2 from "../components/Button2";
import { BurgerContext } from "../context/BurgerContext";
import { Link, NavLink, Navigate } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

function Header() {
const {open,setOpen} = useContext(BurgerContext)
const navigate = useNavigate()

const userData = JSON.parse(localStorage.getItem("userData"))
console.log(userData);

const clearData = ()=>{
  localStorage.clear()
  navigate("/signup")
}



  return (
    <div className="relative container  mx-auto  px-10   fixed top-0">
      <div className=" bg-primary rounded-6">
        <p className="flex items-center   justify-center text-text18 text-white   text-center px-2 py-8 table:text-text16 mobile530:text-text12 ">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        <span className="ml-16 mobile530:hidden fill-white ">
          <VectorIcon />
        </span> 
        </p>
      </div>
      <div className="flex items-center  p-0 relative  justify-between mt-20 mobile:py-0 mobile:p-0">
        <div className="flex items-center gap-50 mobile:gap-0">
          
          <Link to="/">
           <div className="  table:w-35 tablemin:w-30 tablemin:h-30 mobile530:w-20 mobile530:h-20">
             <img
            className=" w-full "
            src={Logo}
            alt="logo"
          />
           </div>
          </Link>
          
          <Nav />
        </div>
        <div className="flex justify-between items-center gap-10 tablemin:gap-6  mobile:gap-0">
      
         {  userData?  <span onClick={()=>clearData()}><Button2>LogOut</Button2></span> : <Navigate to="signup"/>}
         
          <button
          onClick={() => setOpen(!open)}
          className={` flex flex-col justify-center shadow-md bg-primary rounded-8 w-50 h-50 mobile:w-40 mobile:h-40 hidden ${open ? "mt-12 mr-12" : "" } z-20 cursor-pointer mobile3:flex mobil670:gap-0 mobile3:transition-all mobile3:duration-500 mobile3:ease-in-out `}
        >
          <span className=" mx-auto p-0 m-0 text-2xl text-white font-600 ">
            <ion-icon className="" name={open ? "close" : "menu"}></ion-icon>
          </span>
        </button>
       
        </div>
      </div>
    </div>
  );
}

export default Header;

