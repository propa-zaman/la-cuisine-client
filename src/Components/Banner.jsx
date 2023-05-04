import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
       <div className='container mx-auto'>
         <div className="banner flex items-center justify-between bg-neutral-content text-secondary-focus px-4 py-2">
            <div className="banner-image">
                <img src={banner} alt="Banner Image" />
            </div>
            <div className="banner-title ml-4">
                <h1 className="text-5xl font-bold">La cuisine française: <br /> Des saveurs authentiques</h1>
            </div>
        </div>
       </div>
    );
};

export default Banner;