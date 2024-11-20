import React from 'react';
import Navbar from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainRoutes;