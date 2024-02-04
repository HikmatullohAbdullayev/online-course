import React from 'react';

function Button1(props) {
    return (
        <button className="py-14 px-30 rounded-6  hover:bg-primary hover:text-white cursor-pointer table:py-12 table:px-26 text-text16 ">
       {props.children}
      </button>
    );
}

export default Button1;