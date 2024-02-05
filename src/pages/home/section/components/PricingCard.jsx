import React from "react";
import chek from "../../../../../src/assets/img/check.png"
import no from "../../../../../src/assets/img/noCheck.png"

function PricingCard(props) {
  return (
    <div className="p-10 w-full text-center bg-background">
      <p className="font-500 text-[22px] rounded-6 bg-secondary w-full" >{props.title} Plan</p>
      <p className="text-name20 font-500">
        <strong className="font-600 text-number80">{props.number}</strong> /month
      </p>
      <p>Available Features</p>
      <ul>
        <li>
          {" "}
          <img src={chek} alt="" /> <p>{props.text1}</p>
          {console.log(props.text1)}
        </li>
       
      </ul>
      <p className="link"></p>
    </div>
  );
}

export default PricingCard;
