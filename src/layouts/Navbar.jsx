import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const btnRef = useRef(null);
    const navRef = useRef(null);
    
    return (
        <>
            {/*        <!-- Header -->*/}
            <nav
                id="header"
                className="navbar navbar-expand-lg navbar-light shadow"
            >
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink
                        className="navbar-brand text-success logo h1 align-self-center"
                        to="/"
                    >
                        Shopping
                    </NavLink>

                    <button
                        ref={btnRef}
                        id="nav-btn"
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#templatemo_main_nav"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        ref={navRef}
                        className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav"
                    >
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <NavLink

                                        className="nav-link"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobileSearch"
                                        placeholder="Search ..."
                                    />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <NavLink
                                className="nav-icon d-none d-lg-inline"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#templatemo_search"
                            >
                                <i className="fa fa-fw fa-search text-dark mr-2"></i>
                            </NavLink>
                            <NavLink
                                className="nav-icon position-relative text-decoration-none"
                                to="#"
                            >
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                                <span
                                    className="position-absolute top-0 left-100
                                translate-middle badge rounded-pill bg-b
                                text-white"
                                >
                                    7
                                </span>
                            </NavLink>
                            <NavLink
                                className="nav-icon position-relative text-decoration-none"
                                to="#"
                            >
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                <span
                                    className="position-absolute top-0 left-100
                                translate-middle badge rounded-pill bg-b
                                text-white"
                                >
                                    +99
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Close Header -->*/}

            {/* modal Search*/}
            <div
                className="modal fade bg-white"
                id="templatemo_search"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        action=""
                        method="get"
                        className="modal-content modal-body border-0 p-0"
                    >
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="inputModalSearch"
                                name="q"
                                placeholder="Search ..."
                            />
                            <button
                                type="submit"
                                className="input-group-text bg-success text-light"
                            >
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Modal Search*/}
        </>
    );
};

export default Navbar;
