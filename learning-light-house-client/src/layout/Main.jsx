import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <ScrollRestoration/>
        </div>
    );
}

export default Main;
