import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main'
import Error from '../components/Error/Error'
import Home from '../components/Home/Home';
import AllToy from '../components/AllToy/AllToy';
import AddToy from '../components/AddToy/AddToy';
import MyToy from '../components/MyToy/MyToy';
import Blogs from '../components/Blogs/Blogs';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/alltoys",
                element: <AllToy />
            },
            {
                path: "/addtoys",
                element: <AddToy />
            },
            {
                path: "/mytoys",
                element: <MyToy />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
    
]);

export default router;
