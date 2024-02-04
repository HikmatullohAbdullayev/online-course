import React from 'react';
import VectorIcon from '../assets/icon/VectorIcon';
import Logo from "../assets/img/Logo.png"
import { Link} from 'react-router-dom';
import LogInIcon from '../assets/icon/LogInIcon';
import HomeIcon from '../assets/icon/HomeIcon';
import BurgerMenu from '../components/BurgerMenu';

function Header(props) {
    return (
      <div className='relative'>
        <div className="flex items-center   justify-center bg-primary rounded-6">
          <p className="text-text18 text-white  text-center py-8 table:text-text16 ">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <span className="ml-16 ">
            <VectorIcon />
          </span>
        </div>
        <div className="flex items-center justify-between mt-20">
     
        <nav className='flex items-center gap-50 mobile3:gap-24'>
          <img className='table:w-45 tablemin:w-40 tablemin:h-40' src={Logo} alt="logo"/>
          {/* <ul className='flex  gap-24 tablemin:gap-16 '>

              <li className='font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary table:py-12 table:text-text16 mobile3:text-text12  '> Home  </li>
              <li className='font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary table:py-12 table:text-text16 mobile3:text-text12 '>  Courses  </li>
              <li className='font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary table:py-12 table:text-text16 mobile3:text-text12 '> About Us  </li>
              <li className='font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary table:py-12 table:text-text16 mobile3:text-text12 '>  Pricing  </li>
              <li className='font-400 text-text18 text-black py-14 cursor-pointer hover:text-primary table:py-12 table:text-text16 mobile3:text-text12 '>  Contact  </li>
                  
            </ul> */}
          </nav>
          <div className="flex gap-10 tablemin:gap-6 mobil670:hidden mobile:block">
            <button className='py-14 px-30 rounded-6  hover:bg-primary hover:text-white cursor-pointer table:py-12 table:px-26 text-text16 '>Sing Up</button>
            <button className='py-14 px-30 rounded-6 bg-primary text-white  cursor-pointer table:py-12 table:px-26 table:text-text16 tablemin:py-8 tablemin:px-8 '>Login</button>
          </div>
          <div className=" flex justify-between items-center hidden cursor-pointer mobil670:flex mobil670:gap-8 ">
           <button className=''><HomeIcon/></button>
            <button className=''><LogInIcon/></button>
            <button> x <span className='w-150 fixed right-[-120px] top-0'><BurgerMenu/></span></button>
          
          </div>

          
            
          
        </div>
      </div>
    );
}

export default Header;