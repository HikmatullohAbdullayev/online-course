import React from 'react';
import IntroSection from './section/IntroSection';
import { Link } from 'react-router-dom';
import UIUX from './openCourse/pages/UIUX';
import OpenCoursesSection from './components/OpenCoursesSection';

function Courses(props) {
    return (
        <div> 
            <IntroSection/>
            {/* <Link to="uiux" >aaaaaaaa</Link> */}
            <OpenCoursesSection
             title="Web Design Fundamentals"
             text="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
             link="webdesing"
             img1="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb1.png"
             img2="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb2.png"
             img3="	https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb3.png"
             week="4 Weeks"
             level="Beginner"
             name="By John Smith"
             numberText={"Lorem ipsum dolor sit amet."}
            />
        </div>
    );
}

export default Courses;