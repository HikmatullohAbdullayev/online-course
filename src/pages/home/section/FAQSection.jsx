import React from "react";
import Accordion from "../../../components/Accordion";

function FAQSection(props) {
  return (
    <section className="container mx-auto mt-100 bg-white p-50 mobile530:p-20">
      <div className="flex flex-wrap justify-between items-start gap-50">
      <div className=" ">
        <h1 className="font-600 text-subTitle38 p-12">Frequently Asked Questions</h1>
        <p className="font-400 text-text16 p-8">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <button className="text-text14 font-500 px-20 py-14 border rounded-6 border-shadow mt-40" >See All FAQ’s</button>
      </div>

     <div className="flex flex-col gap-20">
     <Accordion 
      title="Can I enroll in multiple courses at once?" 
      content1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
       content2="Enrollment Process for Different Coursese" />
      <Accordion 
      title="Are the courses self-paced or do they have specific start and end dates?" 
      content1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
       content2="Enrollment Process for Different Coursese" />
      <Accordion 
      title="Are there any prerequisites for the courses?" 
      content1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
       content2="Enrollment Process for Different Coursese" />
      <Accordion 
      title="Can I download the course materials for offline access?" 
      content1="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience"
       content2="Enrollment Process for Different Coursese" />

     </div>
      </div>
    </section>
  );
}

export default FAQSection;

{
  /* 
<div className="p-4 bg-gray-200 rounded-lg">
<Accordion
title="Do you prefer Android or iOS"
answer="I like to use iOS products"
/>
<Accordion
title="Do you prefer writing CSS or Tailwind?"
answer="I like to use Tailwind"
/>
<Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
</div> */
}
