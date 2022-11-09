import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import steam from "./STEAM.png";
import aceLogo from "./needhamACE.png";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" href="#" to="/">
            <img
              src={aceLogo}
              alt=""
              width="310"
              height="100"
              className="navbarPic"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="list-container">
                <li className="nav-item">
                  <a className="nav-link active" href="/#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/#curriculum">
                    Curriculum
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/#blog">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/contact">
                    Contact Us
                  </a>
                </li>
              </div>

              <div className="btnContainer">
                <li className="nav-item">
                  <button class="btn btn-primary" type="button">
                    <Link className="nav-link insideBtn " to="/">
                      Parent Portal
                    </Link>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}
