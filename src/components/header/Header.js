import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src="./assets/icons/Logo.svg" alt="" />
            </div>
            <div className="btns">
              <Link to="signin">
                <img src="./assets/icons/login-dark.svg" alt="" /> Sign in
              </Link>
              <Link to="login">
                <img src="./assets/icons/login-light.svg" alt="" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
