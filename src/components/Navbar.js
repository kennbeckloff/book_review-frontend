import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <nav className="uk-navbar-container">
      <div className="uk-navbar-right" id="nav-right">
        <ul className="uk-navbar-nav" id="nav">
         
            {Auth.loggedIn() ? (
            <>
              <Link to="/">Search Books</Link>
              <Link to="/want">Want To Read</Link>

              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/">Search Books</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
