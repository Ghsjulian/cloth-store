import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeatureProducts from "../components/FeatureProducts";

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FeatureProducts />
        </>
    );
};

export default Home;
