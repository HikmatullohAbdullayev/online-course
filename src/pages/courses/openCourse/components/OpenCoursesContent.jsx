import React from 'react';
import NumberCard from './NumberCard';

function OpenCoursesContent(props) {
    return (
      <div className="box">
          <section className="flex justify-between items-start gap-0 mb-100 border-b border-shadow pb-30 desktop:flex-wrap desktop:gap-20 desktop:bg-white mobil670:mb-40">
        <h1 className="font-600 text-title48 max-w-[600px] p-10 mobil670:text-title36">
          {props.title}
        </h1>
        <p className="font-400 text-text18 max-w-[600px] p-10">
       {props.text}
        </p>
      </section>
      <section className='mb-100 mobil670:mb-40'>
        <div className=" p-10 ">
            <img className='w-full h-[20%]' src={props.img} alt="img" />
        </div>
      </section>
     <section className='flex flex-wrap gap-20 justify-around items-start mobil670:gap-16'>
     <NumberCard 
      number="01"
      title="Introduction to UI/UX Design"
      lesson1Title="Understanding UI/UX Design Principles"
      lesson1="Lesson 01"
      lesson1Time="45 Minutes"
      lesson2Title="Importance of User-Centered Design"
      lesson2="Lesson 02"
      lesson2Time="1 Hour"
      lesson3Title="Visual Hierarchy and Layout Design"
      lesson3="Lesson 03"
      lesson3Time="1 Hour"
      />
     <NumberCard 
      number="02"
      title="User Research and Analysis"
      lesson1Title="Conducting User Research and Interviews"
      lesson1="Lesson 01"
      lesson1Time="1 Hour"
      lesson2Title="Analyzing User Needs and Behavior"
      lesson2="Lesson 02"
      lesson2Time="1 Hour"
      lesson3Title="Creating User Personas and Scenarios"
      lesson3="Lesson 03"
      lesson3Time="45 Minutes"
      />
     <NumberCard 
      number="03"
      title="Wireframing and Prototyping"
      lesson1Title="Introduction to Wireframing Tools and Techniques"
      lesson1="Lesson 01"
      lesson1Time="1 Hour"
      lesson2Title="Creating Low-Fidelity Wireframes"
      lesson2="Lesson 02"
      lesson2Time="1 Hour"
      lesson3Title="Prototyping and Interactive Mockups"
      lesson3="Lesson 03"
      lesson3Time="1 Hour"
      />
     <NumberCard 
      number="04"
      title="Visual Design and Branding"
      lesson1Title="Color Theory and Typography in UI Design"
      lesson1="Lesson 01"
      lesson1Time="1 Hour"
      lesson2Title="Visual Hierarchy and Layout Design"
      lesson2="Lesson 02"
      lesson2Time="1 Hour"
      lesson3Title="Creating a Strong Brand Identity"
      lesson3="Lesson 03"
      lesson3Time="45 Minutes"
      />
     <NumberCard 
      number="05"
      title="Usability Testing and Iteration"
      lesson1Title="Usability Testing Methods and Techniques"
      lesson1="Lesson 01"
      lesson1Time="1 Hour"
      lesson2Title="Analyzing Usability Test Results"
      lesson2="Lesson 02"
      lesson2Time="45 Minutes"
      lesson3Title="Iterating and Improving UX Designs"
      lesson3="Lesson 03"
      lesson3Time="45 Minutes"
      />
     </section>
      </div>
    );
}

export default OpenCoursesContent;