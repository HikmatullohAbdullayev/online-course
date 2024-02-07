import React from 'react';
import { Link } from 'react-router-dom';

function SectionTop(props) {
    return (
        <>
       <div className="flex justify-between flex-col mobil2:flex mobil2:flex-col mobil2:items-start ">
            <div className=" w-full px-20 flex justify-between items-center mb-6  ">
                <h1 className='font-600 text-title48 mb-6 table:text-title36 mobile530:text-subTitle28'>{props.title}</h1>
                <Link to={props.link}><p className='py-18 px-24 bg-white rounded-6 shadow-sm cursor-pointer font-500 text-text18 hover:bg-primary hover:text-white table:py-14 table:px-18 tablemin:py-8 tablemin:px16 tablemin:text-text16 mobile530:text-text14 mobil2:hidden'>View All</p></Link>
             
            </div>
          <div className="max-w-[1000px] w-full p-20 ">  <p className='font-400 text-text18 text-text w-full mobile530:text-text14'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          
          </div>
          <p className=' hidden py-18 px-24 ml-20 bg-white rounded-6 shadow-sm cursor-pointer font-500 text-text18 hover:bg-primary hover:text-white table:py-14 table:px-18 tablemin:py-8 tablemin:px16 tablemin:text-text16 mobile530:text-text14 mobil2:block'>View All</p>
        </div>
        </>
    );
}

export default SectionTop;



/* <div className="flex justify-between items-start ">
            <div className="max-w-[1000px] w-full px-20 table1170:w-[800px] table:max-w-[600px] tablemin:w-[500px] ">
                <h1 className='font-600 text-title48 mb-6 table:text-title36 '>{props.title}</h1>
                <p className='font-400 text-text18 text-text w-full'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <p className='py-18 px-24 bg-white rounded-6 shadow-sm cursor-pointer font-500 text-text18 hover:bg-primary hover:text-white table:py-14 table:px-18 tablemin:py-8 tablemin:px16 tablemin:text-text16'>View All</p>
        </div> */