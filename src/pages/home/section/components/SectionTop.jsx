import React from 'react';

function SectionTop(props) {
    return (
        <>
       <div className="flex justify-between items-center ">
            <div className="max-w-[1000px]">
                <h1 className='font-600 text-title48 mb-6'>{props.title}</h1>
                <p className='font-400 text-text18 text-text'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <p className='py-18 px-24 bg-white rounded-6 shadow-sm cursor-pointer font-500 text-text18 hover:bg-primary hover:text-white'>View All</p>
        </div>
        </>
    );
}

export default SectionTop;
