import React from 'react';
import Banner from './Banner';
import OurChef from './ourChef';
import Hero from './Hero';
import Carousal from './Carousal';
import useTitle from '../hooks/useTitle';


const Home = () => {
    useTitle('Home');
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