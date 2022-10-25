import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";
import steam from "./STEAM.png";
import aceLogo from "./needhamACE.png";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" href="#" to="/">
            <img src={aceLogo} alt="" width="150" height="150" />
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
                  <Link className="nav-link active" to="/">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Curriculum
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Blogs
                  </Link>
                </li>
              </div>

              <div className="btnContainer">
                <li className="nav-item">
                  <button class="btn btn-success" type="button">
                    <Link className="nav-link insideBtn " to="/">
                      Parent Portal
                    </Link>
                  </button>
                </li>

                {props.user ? (
                  <>
                    <li className="nav-item">
                      <button class="btn btn-primary" type="button">
                        <Link
                          className="nav-link insideBtn"
                          to=""
                          onClick={handleLogOut}
                        >
                          {props.user.name} Log Out
                        </Link>
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <button class="btn btn-primary" type="button">
                      <Link className="nav-link insideBtn" to="/login">
                        Admin Login
                      </Link>
                    </button>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div>{/* <img src={steam} alt="" className="imgIsolater" /> */}</div>
    </div>
  );
}
