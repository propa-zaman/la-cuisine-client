import React from 'react';
import Banner from './Banner';
import ChefCard from './ChefCard';
import OurChef from './ourChef';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <OurChef></OurChef>
        </div>
    );
};

export default Home;