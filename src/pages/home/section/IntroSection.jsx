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
        url:{Zapier},
        alt:"img",
    },
    {
        id:2,
        url:{Zoom},
        alt:"img",
    },
    {
        id:3,
        url:{Amazon},
        alt:"img",
    },
    {
        id:4,
        url:{Adobe},
        alt:"img",
    },
    {
        id:5,
        url:{Sopotify},
        alt:"img",
    },
    {
        id:6,
        url:{Notion},
        alt:"img",
    },
    {
        id:7,
        url:{Netflix},
        alt:"img",
    },
]
function IntroSection(props) {
    return (
        <section className='container mx-auto mt-100'>
            <div className="text-center ">
                <div className="flex justify-center items-center gap-10 max-w-[800px] mx-auto p-12 bg-white rounded-6 "> <span className=''><ChaqIcon/></span> <h1 className=' font-600 text-title48' ><span className='text-primary'>Unlock</span> Your Creative Potential</h1></div>
                <p className='mt-16 text-subTitle28 font-500'>with Online Design and Development Courses.</p>
                <p className='mt-16 text-text16 font-400'>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className="  flex justify-center items-center gap-5 mt-50 ">
                    <Button2>Explore Courses</Button2>
                    <Button1>View Pricing</Button1>
                </div>
            </div>
            <ul  className='flex justify-around items-center mx-auto w-full p-24 bg-white rounded-6 mt-100'>  
                {imgData.map((item) => (
                   
                    <li key={item.id} className='p-20'><img src="data:image/jpeg;base64,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" alt={item.alt} />  </li>
                ))}

            </ul>
        </section>
    );
}

export default IntroSection;