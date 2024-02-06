import React from 'react';

function PriceButton2(props) {
    return (
        <button className="py-14 px-30 rounded-6 bg-primary text-white  shadow-md cursor-pointer ">
        {props.children}
      </button>
    );
}

export default PriceButton2;