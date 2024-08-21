import React from "react";

export default function Header() {

    return(
        <nav className="navbar">
            <div className="col-12 col-md-4  navLogo">
                <div className="navbar-brand">
                    <p>Home <i className="fa-solid fa-greater-than"></i> <span>Dashboard</span></p>
                </div>
            </div>
            <div className="col-12 col-md-4 text-center navSearch">
                <input className="form-control" type="search" placeholder="Search anything..."/>
            </div>
            <div className="col-12 col-md-2 text-right navNotify">
                <i className="fa-solid fa-bell"></i>
            </div>
            <div className="col-12 col-md-2 text-center navUser">
                <p><i className="fa-solid fa-user"></i>Login</p>
            </div>
        </nav>
    );
}