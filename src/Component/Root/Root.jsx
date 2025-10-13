import React from 'react';
import { Outlet } from 'react-router';
import Home from '../../Pages/Home/Home';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet/>
          <Footer></Footer>
        </div>
    );
};

export default Root;