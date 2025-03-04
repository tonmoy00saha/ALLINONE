import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noNavbar = location.pathname.includes('login')|| location.pathname.includes('signup');
    return (
        <div>
            
            {noNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;