import React from 'react';
import  courseData  from '../data/CourseData';

function CourseCard(props) {
    return (
        <div className='grid   gap-30 mt-80 p-14 grid-cols-[repeat(auto-fill,minmax(330px,1fr))]'>
            {
                courseData.map((item) => (
                    <div className='flex  flex-col p-40 bg-white rounded-6 gap-30  hover:shadow-md ' key={item.id}>
                        <div className='w-auto h-auto rounded-6  mx-auto'><img className=' w-full h-full rounded-6   object-cover' src={item.img} alt="img" /></div>
                        <div className="flex justify-between items-center">
                        <div className="flex">
                            <p className='font-400 text-text18 text-text '>{item.week}</p>
                            <p className='font-400 text-text18 text-text '>{item.level}</p>
                            </div>
                            <h4 className='font-500 text-[20px] '>{item.name}</h4>
                        </div>
                        <h3 className='text-subTitle24 font-600'>{item.tetle}</h3>
                        <p className='font-400 text-text18 text-text '>{item.content}</p>
                        <p className='font-400 text-text18 text-text text-center bg-[#f7f7f8] py-18 rounded-6 px-24 cursor-pointer hover:shadow-md  hover:bg-primary hover:text-white'>Get it Now</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseCard;