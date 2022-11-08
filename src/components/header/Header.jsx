import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  let [header__activity, setActivity] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setActivity(true) : setActivity(false);
    });
  }, []);
  return (
    <>
      <nav className={header__activity ? "active-nav" : null}>
        <div className="container">
          <div className="nav-content">
            <Link className="hide-link-style" to="./">
              <div className="logo">
                <img
                  src={
                    header__activity
                      ? "./assets/icons/Logo-light.svg"
                      : "./assets/icons/Logo.svg"
                  }
                  alt=""
                />
              </div>
            </Link>
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
