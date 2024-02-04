import React from 'react';

function Button2(props) {
    return (
        <button className="py-14 px-30 rounded-6 bg-primary text-white  cursor-pointer table:py-12 table:px-26 table:text-text16 tablemin:py-8 tablemin:px-8 ">
        {props.children}
      </button>
    );
}

export default Button2;