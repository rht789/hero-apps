import React from "react";
import { Outlet } from "react-router";
import Home from "../../Pages/Home/Home";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <Navbar></Navbar>

        <Outlet />

        <Footer></Footer>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Root;
