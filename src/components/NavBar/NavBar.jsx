import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/orders">About</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">Curriculum</Link>
      &nbsp; | &nbsp;
      {props.user ? (
        <>
          <span>Welcome, {props.user.name}</span>
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <button>
          <Link to="/login">Admin Login</Link>
        </button>
      )}
    </nav>
  );
}
