import React from 'react';

function OpenCoursesContent(props) {
    return (
      <div className="box">
          <section className="flex justify-between items-start gap-0 mb-100 border-b border-shadow pb-30 desktop:flex-wrap desktop:gap-20 desktop:bg-white">
        <h1 className="font-600 text-title48 max-w-[600px] p-10">
          {props.title}
        </h1>
        <p className="font-400 text-text18 max-w-[600px] p-10">
       {props.text}
        </p>
      </section>
      <section>
        <div className="image">
            <img src={props.img} alt="img" />
        </div>
      </section>
      </div>
    );
}

export default OpenCoursesContent;