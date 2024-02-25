import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"

if(Home){
    alert(typeof Home)
}

const Router = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route index exact path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default Router;
