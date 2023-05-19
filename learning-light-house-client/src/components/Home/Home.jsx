import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Shop from './Shop/Shop';
import { Helmet } from "react-helmet";
import EngToys from './EngToys/EngToys';
import Business from './Business/Business';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Learning Lighthouse</title>
            </Helmet>
            
            <Banner />
            <Gallery />
            <Shop />
            <EngToys/>
            <Business/>
        </div>
    );
}

export default Home;
