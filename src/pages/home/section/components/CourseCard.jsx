import React from 'react';
import  courseData  from '../data/CourseData';

function CourseCard(props) {
    return (
        <div className='grid   gap-30 mt-80 p-14 grid-cols-[repeat(auto-fill,minmax(330px,1fr))]'>
            {
                courseData.map((item) => (
                    <div className='flex  flex-col p-40 bg-white rounded-6 gap-30  hover:shadow-md  mobil2:p-16 ' key={item.id}>
                        <div className='w-auto h-auto rounded-6  mx-auto'><img className=' w-full h-full rounded-6   object-cover' src={item.img} alt="img" /></div>
                        <div className="flex justify-between items-center mobile530:flex-col mobile530:justify-start mobile530:items-start">
                        <div className="flex gap-10">
                            <p className='font-400 text-text18 text-text  border shadow-md rounded-6 px-14 py-10 mobile530:py-6 mobile530:px-4 '>{item.week}</p>
                            <p className='font-400 text-text18 text-text  border shadow-md rounded-6 px-14 py-10 mobile530:py-6 mobile530:px-4  '>{item.level}</p>
                            </div>
                            <h4 className='font-500 text-[20px] py-14'>{item.name}</h4>
                        </div>
                        <h3 className='text-subTitle24 font-600 '>{item.tetle}</h3>
                        <p className='font-400 text-text18 text-text p-16 mobil2:p-4 '>{item.content}</p>
                        <p className='font-400 text-text18 text-text text-center bg-[#f7f7f8] py-18 rounded-6 px-24 cursor-pointer hover:shadow-md  hover:bg-primary hover:text-white mobile530:py-14 mobile530:px-10 '>Get it Now</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseCard;