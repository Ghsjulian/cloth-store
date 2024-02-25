import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            {/* Start Footer */}
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-white border-bottom pb-3 border-light logo">
                                Contact Info
                            </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="tel:010-020-0340"
                                    >
                                        010-020-0340
                                    </NavLink>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw"></i>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="mailto:info@company.com"
                                    >
                                        info@company.com
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">
                                Products
                            </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Luxury
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Sport Wear
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Men's Shoes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Women's Shoes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Popular Dress
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Gym Accessories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Sport Shoes
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">
                                Further Info
                            </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Shop Locations
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        FAQs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-decoration-none"
                                        to="#"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row text-light mb-4">
                        <div className="col-12 mb-3">
                            <div className="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <NavLink
                                        className="text-light text-decoration-none"
                                        target="_blank"
                                        to="http://facebook.com/"
                                    >
                                        <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                                    </NavLink>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <NavLink
                                        className="text-light text-decoration-none"
                                        target="_blank"
                                        to="https://www.instagram.com/"
                                    >
                                        <i className="fab fa-instagram fa-lg fa-fw"></i>
                                    </NavLink>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <NavLink
                                        className="text-light text-decoration-none"
                                        target="_blank"
                                        to="https://twitter.com/"
                                    >
                                        <i className="fab fa-twitter fa-lg fa-fw"></i>
                                    </NavLink>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <NavLink
                                        className="text-light text-decoration-none"
                                        target="_blank"
                                        to="https://www.linkedin.com/"
                                    >
                                        <i className="fab fa-linkedin fa-lg fa-fw"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" for="subscribeEmail">
                                Email address
                            </label>
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control bg-dark border-light"
                                    id="subscribeEmail"
                                    placeholder="Email address"
                                />
                                <div className="input-group-text btn-success text-light">
                                    Subscribe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 text-center bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright &copy; 2021 Company Name |
                                    Designed by
                                    <NavLink
                                        id="dev"
                                        rel="sponsored"
                                        to="https://ghsresume.netlify.app"
                                        target="_blank"
                                    >
                                        Ghs Julian
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </>
    );
};

export default Footer;
