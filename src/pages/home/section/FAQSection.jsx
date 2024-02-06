import React from 'react';
import Accordion from '../../../components/Accordion';

function FAQSection(props) {
    return (
        <div className='container mx-auto mt-100 '>
          <div className="title"><h1>Frequently Asked Questions</h1>
<p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
<button>See All FAQ’s</button></div>

<Accordion title="ajlkjk" content1="qwerty" content2="ytrewq" />
        </div>
    );
}

export default FAQSection;






{/* 
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
</div> */}