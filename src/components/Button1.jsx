import React from 'react';

function Button1(props) {
    return (
        <button className="py-14 px-30 rounded-6 border bg-white border-primary border-solid shadow-md hover:bg-primary hover:text-white cursor-pointer table:py-10 table:px-12 table:text-text14 mobile::p-6 ">
       {props.children}
      </button>
    );
}

export default Button1;