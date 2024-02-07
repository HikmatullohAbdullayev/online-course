import React from 'react';
import SectionTop from './components/SectionTop';
import  testominalsData  from './data/TestominalsData.js';
import Img from  "../../../assets/img/sarah.png"

// grid grid-cols-2 
function OurTestimonialsSection(props) {
    return (
        <section className="container mx-auto mt-100"> 
              <SectionTop
        title={"Our Testimonials"} />
    <div   className="grid grid-cols-2  gap-20 mt-80 table:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]  mobile530:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {
            testominalsData.map((item) => (
                <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" key={item.id} className="flex flex-col p-20 bg-[#fcfcfd] rounded-6 hover:shadow-md">
                    <p className='p-30 bg-white rounded-6  shadow-md'>{item.content}</p>
                    <div className="flex justify-between items-center mt-16 table:justify-around " >
                        <div className="flex justify-between items-center gap-16">
                            <img src={item.img} alt="img" />
                            <h3>{item.name}</h3>
                        </div>
                        <p className=' p-10 bg-background cursor-pointer rounded-8 hover:bg-primary hover:text-white'> Read Full Story+</p>
                    </div>
                </div>
            ))
        }
    </div>

        </section>
    );
}

export default OurTestimonialsSection;