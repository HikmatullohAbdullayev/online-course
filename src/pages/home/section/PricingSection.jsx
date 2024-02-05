import React from 'react';
import Button1 from '../../../components/Button1';
import Button2 from '../../../components/Button2';
import PricingCard from './components/PricingCard';
import { PricieDataFree } from './data/PricieData';
import { PricieDataPro } from './data/PricieData';

function PricingSection(props) {
    return (
        <section className="container mx-auto mt-100">
            <div className="flex justify-between items-center ">
            <div className="max-w-[1000px]">
                <h1 className='font-600 text-title48 mb-6'>Our Pricing</h1>
                <p className='font-400 text-text18 text-text'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className="flex justify-center items-center gap-20 p-10 rounded-6 bg-white">
                <Button2>Monthly</Button2>
                <Button1>Yearly</Button1>
                
            </div>
        </div>

        <div className="flex justify-center py-50 px-30 gap-20 items-center bg-white">
        <PricingCard number={"$0"} title={"Free"} freeData={PricieDataFree}/>
        <PricingCard number={"$79"} title={"Pro"} proData={PricieDataPro}/>
        </div>


        </section>
    );
}

export default PricingSection;