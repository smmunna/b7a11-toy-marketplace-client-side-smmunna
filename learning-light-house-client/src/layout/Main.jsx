import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration/>
        </div>
    );
}

export default Main;
