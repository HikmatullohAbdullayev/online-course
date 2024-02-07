import React from 'react';
import SectionTop from './components/SectionTop';
import CourseCard from './components/CourseCard';

function OurCoursesSection(props) {
    return (
        <section className="container mx-auto mt-100">
            <SectionTop link={"courses"} title={"Our Courses"} />

            <CourseCard/>
        </section>
    );
}

export default OurCoursesSection;