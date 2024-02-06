import React from "react";
import VectorTopIcon from "../../../../assets/icon/VectorTopIcon";
import cardData from "../data/BenefitData.js";

function BenefitCard(props) {
  return (
    <div className="grid   gap-10 mt-80 p-14 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]    ">
      {cardData?.map((item) => (
        <div
          className="card p-30 bg-white rounded-6  hover:shadow-md"
          key={item.id}
        >
          <p className="flex justify-end font-600  p-10 text-number80 table1170:text-number70">
            {item.number}
          </p>
          <h3 className="font-500 text-subTitle24 mb-14  p-6  table1170:text-name20">
            {item.title}
          </h3>
          <p className="font-400 text-text18 mb-50 p-6 text-text table1170:text-text16 mobile3:mb-20">
            {item.content}
          </p>
          <span className="flex justify-end p-  ">
            <VectorTopIcon />
          </span>
        </div>
      ))}
    </div>
  );
}

export default BenefitCard;
