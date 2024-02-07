import React from 'react';
import { Link } from 'react-router-dom';
import coursesData from "../data/numberData.js"

function OpenCoursesSection(props) {
    return (
        <section className='bg-white mb-100'>
            <div className="p-40 flex justify-between items-center mobil2:flex-col mobil2:items-start">
            <div className="content p-20 ">
                <h2 className='font-600 text-name20 p-6'>{props.title} </h2>
            <p className='font-400 text-text16 text-text p-4'> {props.text}</p></div>
            <Link to={props.link}>
            <p className='font-400 text-text14 py-14 px-16 border border-shadow rounded-6  text-nowrap hover:bg-primary hover:text-white'> View Course</p>
            </Link>
            </div>
            <div className="images">
                <div className="grid grid-cols-3  gap-10 mx-auto  p-10 mb-20 w-full ">
                    <img className=' object-contain  w-full' src={props.img1} alt="img" />
                    <img className=' object-contain  w-full' src={props.img2} alt="img" />
                    <img className=' object-contain  w-full' src={props.img3} alt="img" />
                </div>
                <div className="flex justify-between items-center mb-20 mobile530:flex-col mobile530:items-start mobile530: gap-10">
                    <div className="flex justify-around items-start gap-10 ">
                        <p className='font-400 text-text14 py-14 px-16 border border-shadow rounded-6  text-nowrap hover:bg-primary hover:text-white' >{props.week} </p>
                        <p className='font-400 text-text14 py-14 px-16 border border-shadow rounded-6  text-nowrap hover:bg-primary hover:text-white'>{props.level} </p>
                    </div>
                    <p className='font-500 text-text18 p-6 '>{props.name} </p>
                </div>
                {/* [repeat(auto-fill,minmax(300px,1fr))] */}
                <p>Curriculum</p>
                <div className="grid grid-cols-6 gap-0 p-20 w-full mx-auto border rounded-6 border-shadow  table1080:grid table1080:grid-cols-3 table1080:gap-18 mobile3:grid mobile3:grid-cols-2 ">
                    {coursesData.map((item ,index) => (

                        <div key={index} className="number w-full  rounded-8 py-10 px-30 border-r border-shadow  table1080:bg-shadow table1080:px-20 ">
                        <p className='font-extrabold text-[40px] p-6'>{item.number}</p>
                        <p className='font-500 text-text16 p-6'>{props.numberText} </p>
                    </div>
                        ))}
                </div>
            </div>


        </section>
    );
}

export default OpenCoursesSection;