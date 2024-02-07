import React from 'react';
import SectionTop from './components/SectionTop';
import CourseCard from './components/CourseCard';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


function OurCoursesSection(props) {

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className="container mx-auto mt-100">
            <SectionTop link={"courses"} title={"Our Courses"} />

            <CourseCard />
        </section>
    );
}

export default OurCoursesSection;