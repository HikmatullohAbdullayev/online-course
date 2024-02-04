import React from 'react';

function Button2(props) {
    return (
        <button className="py-14 px-30 rounded-6 bg-primary text-white  shadow-md cursor-pointer table:py-10 table:px-12 table:text-text14 tablemin:py-8 tablemin:px-8 mobile530:p-6">
        {props.children}
      </button>
    );
}

export default Button2;