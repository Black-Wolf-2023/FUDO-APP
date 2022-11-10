import React from "react";
import "./main.css";
import {Fade, Slide} from 'react-reveal';

export const Main = ({status}) => {
  function sender(){
    status(true);
  }
  return (
    <div className="container">
      <div className="main-content flex">
        <div className="main-info">
          <Slide left>
            <h1 className="head-1-text">
              Be The Fastest <br /> In Delivering <br /> Your <span> Food</span>
            </h1>
            <p className="main-text ">
              Our job is to filling your tummy with delicious
            </p>
            <p> food and with fast and free delivery</p>
          </Slide>
          <Slide right>
            <div className="main-btns">
                <button className="main-text">
                  More than Faster <img src="./assets/icons/friutes.png" alt="" />
                </button>
                <button className="main-text" onClick={sender}>
                  <div className="main-paly-icon-img">
                    <img src="./assets/icons/play.svg" alt="" />
                  </div>{" "}
                  Watch Video
                </button>
            </div>
          </Slide>
          </div>
          <Slide left>
            <div className="customer-info flex">
            <div className="customers">
              <div className="customer-img">
                <img src="./assets/main-img/user-1.png" alt="" />
              </div>
              <div className="customer-img">
                <img src="./assets/main-img/user-2.png" alt="" />
              </div>
              <div className="customer-img">
                <img src="./assets/main-img/user-3.png" alt="" />
              </div>
            </div>
            <div className="text-info">
              <h4>Our Happy Customers</h4>
              <span className="customer-data">
                <img src="./assets/icons/star.svg" alt="" />
                4.8 <span className="customers-reviewer">(12.5k Reviewer)</span>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};
