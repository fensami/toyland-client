import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Navbar/Navbar';
import Footer from '../Components/Pages/Footer/Footer';


const Main = () => {
    return (
        <div >
            <Navbar ></Navbar>
           
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;