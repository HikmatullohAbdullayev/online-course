import  { useEffect } from 'react';
import IntroSection from "./section/IntroSection"
import BannerSection from "./section/BannerSection"
import BenefitsSection from "./section/BenefitsSection"
import OurCoursesSection from "./section/OurCoursesSection"
import OurTestimonialsSection from "./section/OurTestimonialsSection"
import FAQSection from "./section/FAQSection"
import Aos from 'aos';
import "aos/dist/aos.css"



function Home() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
        <IntroSection/>
        <div data-aos="zoom-in"><BannerSection/></div>
       
        <BenefitsSection/>
        <OurCoursesSection/>
        <OurTestimonialsSection/>
        <FAQSection/>
        </>
    );
}

export default Home;