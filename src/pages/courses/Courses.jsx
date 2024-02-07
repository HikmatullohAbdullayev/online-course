import React from "react";
import IntroSection from "./section/IntroSection";
import { Link } from "react-router-dom";
import UIUX from "./openCourse/pages/UIUX";
import OpenCoursesSection from "./openCourse/components/OpenCoursesSection";

function Courses(props) {
  return (
    <div>
      <IntroSection />
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
      <OpenCoursesSection
        title="UI/UX Design"
        text="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
        link="uiux"
        img1="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile1.png"
        img2="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile2.png"
        img3="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile3.png"
        week="6 Weeks"
        level="Intermediate"
        name="By Emily Johnson"
        numberText={"Lorem ipsum dolor sit amet."}
      />
      <OpenCoursesSection
        title="Graphic Design for Beginners"
        text="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
        link="desingbeginner"
        img1="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesDesing1.png"
        img2="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesDesing2.png"
        img3="	https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesDesing3.png"
        week="10 Weeks"
        level="Beginner"
        name="By Sarah Thompson"
        numberText={"Lorem ipsum dolor sit amet."}
      />

      <OpenCoursesSection
        title="Mobile App Development"
        text="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
        link="mobile"
        img1="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile1.png"
        img2="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile2.png"
        img3="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesMobile3.png"
        week="8 Weeks"
        level="Intermediate"
        name="By David Brown"
        numberText={"Lorem ipsum dolor sit amet."}
      />

      <OpenCoursesSection
        title="By David Brown"
        text="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
        link="webdev"
        img1="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb1.png"
        img2="https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb2.png"
        img3="	https://deluxe-kitsune-924f7c.netlify.app/ImageCoursesWeb3.png"
        week="10 Weeks"
        level="Intermediate"
        name="By Michael Adams"
        numberText={"Lorem ipsum dolor sit amet."}
      />
    </div>
  );
}

export default Courses;
