import React from 'react';

function PriceButton(props) {
    return (
        <button className="py-14 px-30 rounded-6 border bg-white border-primary border-solid shadow-md hover:bg-primary hover:text-white cursor-pointer  ">
        {props.children}
       </button>
    );
}

export default PriceButton;