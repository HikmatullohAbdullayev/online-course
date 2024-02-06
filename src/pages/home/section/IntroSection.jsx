import React from 'react';
import ChaqIcon from "../../../../src/assets/icon/ChaqIcon"
import Zapier from "../../../../src/assets/img/zapier.png"
import Zoom from "../../../../src/assets/img/zoom.png"
import Amazon from "../../../../src/assets/img/amazon.png"
import Adobe from "../../../../src/assets/img/adobe.png"
import Sopotify from "../../../../src/assets/img/sopotify.png"
import Notion from "../../../../src/assets/img/notion.png"
import Netflix from "../../../../src/assets/img/netflix.png"

import Button1 from '../../../components/Button1';
import Button2 from '../../../components/Button2';

const imgData =[
    {
        id:1,
        url:"https://deluxe-kitsune-924f7c.netlify.app/zapier.png",
        alt:"img",
    },
    {
        id:2,
        url:"https://deluxe-kitsune-924f7c.netlify.app/zoom.png",
        alt:"img",
    },
    {
        id:3,
        url:"https://deluxe-kitsune-924f7c.netlify.app/amazon.png",
        alt:"img",
    },
    {
        id:4,
        url:"https://deluxe-kitsune-924f7c.netlify.app/adobe.png",
        alt:"img",
    },
    {
        id:5,
        url:"https://deluxe-kitsune-924f7c.netlify.app/sopotify.png",
        alt:"img",
    },
    {
        id:6,
        url:"https://deluxe-kitsune-924f7c.netlify.app/notion.png",
        alt:"img",
    },
    {
        id:7,
        url:"https://deluxe-kitsune-924f7c.netlify.app/netflix.png",
        alt:"img",
    },
]
function IntroSection(props) {
    return (
        <section className='container mx-auto mt-100'>
            {/* <div className="text-center ">
                <div className="flex justify-center items-center gap-10 max-w-[800px] mx-auto p-12 bg-white rounded-6 "> <span className=''><ChaqIcon/></span> <h1 className=' font-600 text-title48' ><span className='text-primary'>Unlock</span> Your Creative Potential</h1></div>
                <p className='mt-16 text-subTitle28 font-500'>with Online Design and Development Courses.</p>
                <p className='mt-16 text-text16 font-400'>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className="  flex justify-center items-center gap-5 mt-50 ">
                    <Button2>Explore Courses</Button2>
                    <Button1>View Pricing</Button1>  
                </div>
            </div> */}
            <ul  className='flex justify-around items-center  mx-auto w-full p-24 bg-white rounded-6 mt-100 desktop:overflow-x-scroll'>  
                {imgData.map((item) => (
                   
                    <li key={item.id} className='p-20'><img src={item.url} alt={item.alt} />  </li>
                ))}

            </ul>
        </section>
    );
}

export default IntroSection;