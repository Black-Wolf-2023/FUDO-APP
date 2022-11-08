import React from "react";
import { Fade } from "react-reveal";
import { Text } from "../small-components/Text";
import "./review.css";

export const Review = () => {
  return (
    <>
      <div className="container">
        <div className="rev-content flex">
          <Fade left>
            <div className="rev-img">
              <img
                src="./assets/main-img/reviews-img.svg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="rev-info">
              <div className="rev-header">
                <p style={{ color: "var(--main-color)" }}>WHAT THEY SAY</p>
                <h1
                  className="head-2-text"
                  style={{ color: "var(--text-color)" }}
                >
                  What Our Customers
                </h1>
                <h1
                  className="head-2-text"
                  style={{ color: "var(--text-color)" }}
                >
                  Say About Us
                </h1>
              </div>
              <p className="main-text">
                Fudo is the best. Besides the many and delicious meals, the
                service is also very good, especially in the very fast delivey. I
                highly recommend Fudo to you.
              </p>
              <div className="rev-user">
                <div className="rev-user-img">
                  <img src="./assets/main-img/user-1.png" alt="" />
                </div>
                <div className="user-rev-info">
                  <h3>Theresa Jordan</h3>
                  <p style={{ color: "var(--gray-color" }}>Food Enthusiast</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};
