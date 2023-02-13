import React from "react";
import { Link } from "react-router-dom";
import Home from "../page/home";
const Nav = () => {
    return (
        <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" >
                            <Link to='/' className="nav-link" >Agolin</Link>
                        </a>

                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">

                                <li className="nav-item active">
                                    <Link to='/login' className="nav-link" >Login</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to='/register' className="nav-link" >Register</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
        </div>
    );

};
export default Nav;