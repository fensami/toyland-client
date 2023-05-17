import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home/Home';
import Navbar from '../Components/Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default Main;