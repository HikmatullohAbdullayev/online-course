import React from 'react';
import BannerImg from "../../../assets/img/banner.png"
function BannerSection(props) {
    return (
        <section className='container mx-auto mt-80'>
            <img className='w-full' src={BannerImg} alt="img" />
        </section>
    );
}

export default BannerSection;