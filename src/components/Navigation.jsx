import React from "react";
import { NavLink } from "react-router-dom";
import {NavItem} from "react-bootstrap";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">

                    <NavLink className="navbar-brand" to="/">
                        Meniscus Cell Atlas
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/browser">
                                    Cell browser
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portrait">
                                    Cell type portrait
                                </NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink className="nav-link" to="/regulon">
                                    Regulon
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/download">
                                    Resources
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link" href="#">Manuscript</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:chensj16@mails.tsinghua.edu.cn">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;