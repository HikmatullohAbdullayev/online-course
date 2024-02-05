import React from 'react';
import VectorTopIcon from "../../../../assets/icon/VectorTopIcon"
import  cardData  from '../data/BenefitData.js';


function BenefitCard(props) {
    return (
        <div className='grid grid-cols-3 gap-20 mt-80'>
            {
                cardData.map((item) =>(
                    <div className="card p-50 bg-white rounded-6  hover:shadow-md" key={item.id}>
                        <p className='flex justify-end font-600 text-number80'>{item.number}</p>
                        <h3 className='font-500 text-subTitle24 mb-14'>{item.title}</h3>
                        <p className='font-400 text-text18 mb-50 text-text'>{item.content}</p>
                        <span className='flex justify-end   '><VectorTopIcon/></span>
                    </div>
                ))
            }
            
        </div>
    );
}

export default BenefitCard;