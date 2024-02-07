import React, { useEffect } from 'react';
import ChaqIcon from "../../../../src/assets/icon/ChaqIcon"
import Zapier from "../../../../src/assets/img/zapier.png"
import Zoom from "../../../../src/assets/img/zoom.png"
import Amazon from "../../../../src/assets/img/amazon.png"
import Adobe from "../../../../src/assets/img/adobe.png"
import Sopotify from "../../../../src/assets/img/sopotify.png"
import Notion from "../../../../src/assets/img/notion.png"
import Netflix from "../../../../src/assets/img/netflix.png"
import Aos from 'aos';
import "aos/dist/aos.css"


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
  
]


function IntroSection(props) {

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className='container mx-auto mt-100 flex flex-col items-center'>
            <div data-aos="fade-up" data-aos-duration="400" className="text-center ">
                <div className="flex justify-center items-center gap-10 max-w-[800px] mx-auto p-12 bg-white rounded-6 "> <span className='mobil670:w-50 mobil670:h-50 m-4
                '><ChaqIcon/></span> <h1 className=' font-600 text-title36 mobile3:text-subTitle28 mobile530:text-text16  ' ><span className='text-primary'>Unlock</span> Your Creative Potential</h1></div>
                <p className='mt-16 text-subTitle28  p-8 font-500 mobile3:text-name20 mobile530:text-text14'>with Online Design and Development Courses.</p>
                <p className='mt-16 text-text16 font-400 mobil670:text-text12'>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className="  flex justify-center items-center gap-5 mt-50 ">
                    <Button2>Explore Courses</Button2>
                    <Button1>View Pricing</Button1>  
                </div>
            </div>
          {/* <div className="max-w-[1280px] "> */}
          <div  className='grid gap-20   w-[100%]   py-24 bg-white rounded-6 mt-100   grid-cols-[repeat(auto-fill,minmax(180px,1fr))]  mx-auto desktop1220:grid desktop1220:grid-cols-3 mobile530:grid mobile530:grid-cols-2 '>  
                {imgData.map((item) => (
                   
                    <div key={item.id} className='p-20'>
                        <img className='w-auto mx-auto' src={item.url} alt={item.alt} /> 
                         </div>
                ))}

            </div>
          {/* </div> */}
        </section>
    );
}

export default IntroSection;