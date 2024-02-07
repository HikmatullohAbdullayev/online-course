import React from "react";
import Logo from "../assets/img/Logo.png"
import PhoneIcon from "../assets/icon/PhoneIcon"
import MailIcon from "../assets/icon/MailIcon"
import LocationIcon from "../assets/icon/LocationIcon"
import TwitterIcon from "../assets/icon/TwitterIcon"
import FacebookIcon from "../assets/icon/FacebookIcon"
import LinkdenIcon from "../assets/icon/LinkdenIcon"
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="mt-100 container mx-auto bg-white p-30 tablemin:p-18">
      <div className="flex justify-between items-start tablemin:flex tablemin:flex-col gap-40 tablemin:items-start tablemin: ">
        <div className="contact">
            <img src={Logo} alt="logo" />
          <Link to="/" ><p className="font-400 text-text16 flex items-center gap-4 mt-30"><span className="p-4"><MailIcon/></span> hello@skillbridge.com</p></Link>
          <Link to="/" ><p className="font-400 text-text16 flex items-center gap-4"><span className="p-4"><PhoneIcon/></span> +91 91813 23 2309</p></Link>
          <Link to="/" ><p className="font-400 text-text16 flex items-center gap-4"><span className="p-4"><LocationIcon/></span> Somewhere in the World</p></Link>
         
        </div>

        <div className="flex justify-between items-start gap-50 pb-30 tablemin:flex tablemin:flex-col">
       <div className="nav flex gap-40">
       <ul className="flex flex-col gap-8">
            <Link to="/"><h3 className="font-600 text-text18">Home</h3></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Benefits</li></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Our Courses</li></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Our Testimonials</li></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Our FAQ</li></Link>
            
          </ul>
          <ul className="flex flex-col gap-8">
            <Link to="/"><h3 className="font-600 text-text18">About Us</h3></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Company</li></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Achievements</li></Link>
            <Link to="#"><li className="font-600 text-text18 text-text">Our Goals</li></Link>
            
          </ul>
       </div>

          <div className="footer_soical">
            <p className="font-600 text-text18">Social Profiles</p>
          <div className="flex gap-10 mt-14">
<span className="p-10 bg-shadow rounded-6  "><Link><FacebookIcon/></Link></span>
<span className="p-10 bg-shadow rounded-6  "> <Link> <TwitterIcon/></Link></span>
<span className="p-10 bg-shadow rounded-6  "> <Link><LinkdenIcon/> </Link></span>
           
          </div>
        </div>
        </div>

       
      </div>
      <div className="pt-30 border-t border-shadow">
        <p className="text-text16 text-text text-center w-full py-8 ">© 2023 Skillbridge. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
