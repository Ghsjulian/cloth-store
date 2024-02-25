import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layouts;
