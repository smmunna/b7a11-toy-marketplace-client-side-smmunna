import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Shop from './Shop/Shop';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery/>
            <Shop/>
        </div>
    );
}

export default Home;
