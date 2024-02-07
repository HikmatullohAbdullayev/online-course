import React from 'react';

function IntroSection(props) {
    return (
        <section className='flex justify-between items-start gap-0 mb-100 border-b border-shadow pb-30 desktop:flex-wrap desktop:gap-20 desktop:bg-white'> 
            <h1 className='font-600 text-title48 max-w-[600px] p-10'>Online Courses on Design and Development</h1>
            <p className='font-400 text-text18 max-w-[600px] p-10'>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
        </section>
    );
}

export default IntroSection;