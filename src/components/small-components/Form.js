import React from "react";
import { Link } from "react-router-dom";

export const Form = ({ inp__data, status }) => {
  return (
    <div className="register-container">
      <form className="login-form">
        <div className="form-title">
          <h1>{status ? "Login" : "Sign in"}</h1>
          <Link className="hide-link-style " to={status ? "/" : "/login"}>
            <span>{status ? "Home" : "Back"}</span>
            <img src="./assets/icons/fe_arrow-right.png" alt="" />
          </Link>
        </div>
        <div className="form-controller">
          {inp__data.map((element) => element)}
          {status ? (
            <div className="form-checkbox">
              <input type="checkbox" id="form-checkbox" />
              <label htmlFor="form-checkbox">Remember Me ?</label>
            </div>
          ) : null}
          <button>{status ? "Login" : "Sign in"}</button>
          {status ? (
            <Link className="hide-link-style">Forgot Password ?</Link>
          ) : null}
          <div className="hr"></div>
          {status ? (
            <div className="form-socail">
              <div>
                <img src="./assets/icons/facebook.svg" alt="" />
              </div>
              <div>
                <img src="./assets/icons/bird.png" alt="" />
              </div>
              <div>
                <img src="./assets/icons/instagram.svg" alt="" />
              </div>
            </div>
          ) : null}
          <p className="signin-link" style={{ color: "var(--main-color)" }}>
            {status ? "Need an account ?" : "You Already have  account ?"}
            <Link
              className="hide-link-style"
              to={status ? "/signin" : "/login"}
            >
              {status ? "Sign in" : "Login"}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};