import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import View from "./pages/viewProduct";
import eX from "./components/eX";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    exact
                    path="/"
                    element={<Layouts children={<Home />} />}
                />
                <Route path="/home" element={<Layouts children={<Home />} />} />
                <Route
                    path="/about"
                    element={<Layouts children={<About />} />}
                />
                <Route
                    path="/contact"
                    element={<Layouts children={<Contact />} />}
                />
                <Route path="/shop" element={<Layouts children={<Shop />} />} />
                <Route
                    path="/view-product/product/:id"
                    element={<Layouts children={<View />} />}
                />
                <Route path="/ex" element={<eX />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
