import React from 'react';
import IntroSection from "./section/IntroSection"
import BannerSection from "./section/BannerSection"
import BenefitsSection from "./section/BenefitsSection"
import OurCoursesSection from "./section/OurCoursesSection"
import OurTestimonialsSection from "./section/OurTestimonialsSection"
import PricingSection from "./section/PricingSection"
import FAQSection from "./section/FAQSection"


function Home(props) {
    return (
        <>
        <IntroSection/>
        <BannerSection/>
        <BenefitsSection/>
        <OurCoursesSection/>
        {/* <OurTestimonialsSection/>
        <PricingSection/>
        <FAQSection/> */}
        </>
    );
}

export default Home;