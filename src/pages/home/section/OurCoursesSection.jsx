
import SectionTop from './components/SectionTop';
import CourseCard from './components/CourseCard';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


function OurCoursesSection() {

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className=" mt-100">
            <SectionTop link={"courses"} title={"Our Courses"} />

            <CourseCard />
        </section>
    );
}

export default OurCoursesSection;