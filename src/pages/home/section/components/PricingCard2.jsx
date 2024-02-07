import React from "react";
import chek from "../../../../../src/assets/img/check.png"
import no from "../../../../../src/assets/img/noCheck.png"

const pricieDataPro = {
    text1:"Access to selected free courses.",
    text2:"Limited course materials and resources. ",
    text3:"Basic community support. ",
    text4:"No certification upon completion. ",
    text5:"Ad-supported platform. ",
    text6:"AcAccess to exclusive Pro Plan community forums.cess ",
    text7:"Early access to new courses and updates. ",
}

function PricingCard(props) {
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="p-10 w-full rounded-6 text-center bg-background">
      <p className="font-500 text-[22px] rounded-6 bg-secondary2 w-full py-12" >ProPlan</p>
      <p className="text-name20 font-500 py-50">
        <strong className="font-600 text-number80">79$</strong> /month
      </p>
      <ul className="p-30  bg-white rounded-6 table1080:p-18">
      <p className="font-500 text-[20px] ">Available Features</p>
        <li className="flex justify-start items-center px-20 gap-10 mt-16 border border-text rounded-6 py-10  table1170:px-15 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text1}</p>
        </li>
        <li className="flex justify-start items-center px-20 gap-10 mt-16 border border-text rounded-6 py-10  table1170:px-15 ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text2}</p>
        </li>
        <li className="flex justify-start items-center px-20  gap-10 mt-16 border border-text rounded-6 py-10 table1170:px-15  ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text3}</p>
        </li>
        <li className="flex justify-start items-center px-20  gap-10 mt-16 border border-text rounded-6 py-10 table1170:px-15  ">
          {" "}
          <img src={chek} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text4}</p>
        </li>
        <li className="flex justify-start items-center px-20 gap-10 mt-16 border border-text rounded-6 py-10  table1170:px-15 ">
          {" "}
          <img src={no} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text5}</p>
        </li>
        <li className="flex justify-start items-center px-20  gap-10 mt-16 border border-text rounded-6 py-10 table1170:px-15  ">
          {" "}
          <img src={no} alt="" /> <p className="font-400 text-text18 ">{pricieDataPro.text6}</p>
        </li>
       
      </ul>
      <p className="font-600 text-text18 bg-primary text-white rounded-6 py-20 mt-5 hover:shadow-xl">Get Started</p>
    </div>
  );
}

export default PricingCard;
