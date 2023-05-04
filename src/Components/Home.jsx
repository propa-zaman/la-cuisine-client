import React from 'react';
import Banner from './Banner';
import ChefCard from './ChefCard';
import OurChef from './ourChef';
import Hero from './Hero';
import Carousal from './Carousal';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <OurChef></OurChef>
            <Hero></Hero>
            <Carousal></Carousal>
        </div>
    );
};

export default Home;