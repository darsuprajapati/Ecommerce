import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Item";

export default function Header() {
    const [show,setShow]= useState(false);
  return (
    <>
      <div className="container-fluid nav-bar sticky-top">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-4">
            <Link to='/'>
              <h1 className="text-primary fw-bold mb-0">
                Cater <span className="text-dark">Serve</span>
              </h1>
            </Link>
            <button onClick={()=> setShow(!show)} className="navbar-toggler py-2 px-3">
                <span className="fa fa-bars text-primary"></span>
            </button>
            <div className={show ? "navbar-collapse show" : "collapse navbar-collapse"}>
            <div className="navbar-nav mx-auto">
            {navList.map((nav,index)=>(
                <div key={index}>
                    <Link to={nav.path} className="nav-item nav-link">{nav.text}</Link>
                </div>
            ))}
            </div>
            <button className="btn-search btn btn-primary btn-md-square rounded-circle d-none d-lg-inline-flex">
            <i className="fas fa-search"></i>
          </button>
          <Link
                to="/cart"
                className="btn-cart btn btn-primary btn-md-square ms-4 rounded-circle d-none d-lg-inline-flex"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="btn-sm rounded-circle btn-danger d-none d-lg-inline-flex">
                  0
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
