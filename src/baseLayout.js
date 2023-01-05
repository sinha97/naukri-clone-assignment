import React from "react";
import "./app.css";
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated } from "./components/helper";

const BaseLayout = ({ children }) => {
  let history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    history.push("/login");
  };

  return (
    <>
      <div className="upperContainer">
        <div className="navHeadContainer">
          <Link to="/">
            <p className="navHeader">MyJobs</p>
          </Link>
          {!isAuthenticated() ? (
            <button className="nav-item my-2 loginButton" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button className="rounded-circle" onClick={handleLogout}>
              {isAuthenticated().name.charAt(0).toUpperCase()}
            </button>
          )}
        </div>
      </div>
      <div className="lowerContainer"></div>
      <div className="allChildContainer">{children}</div>
    </>
  );
};

export default BaseLayout;
