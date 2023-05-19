import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Shop from './Shop/Shop';
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Learning Lighthouse</title>
            </Helmet>
            
            <Banner />
            <Gallery />
            <Shop />
        </div>
    );
}

export default Home;
