import React from "react";
import VectorTopIcon from "../../../../assets/icon/VectorTopIcon";
import cardData from "../data/BenefitData.js";

function BenefitCard(props) {
  return (
    <div className="grid   gap-10 mt-80 p-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]  mobile530:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  ">
      {cardData?.map((item) => (
        <div
          className="card p-10 bg-white rounded-6  hover:shadow-md"
          key={item.id}
        >
          <p className="flex justify-end font-600  p-0 text-number80 table1170:text-number70">
            {item.number}
          </p>
          <h3 className="font-500 text-subTitle24 mb-14  p-  table1170:text-name20">
            {item.title}
          </h3>
          <p className="font-400 text-text18 mb-50 p- text-text table1170:text-text16 mobile3:mb-20">
            {item.content}
          </p>
          <span className="flex justify-end   ">
            <VectorTopIcon />
          </span>
        </div>
      ))}
    </div>
  );
}

export default BenefitCard;
