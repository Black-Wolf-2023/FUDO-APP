import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./card.css";

export const Card = ({ title, price, star, img }) => {
  return (
    <Fade bottom cascade>
      <div className="card">
          <div
            className="card-content"
            style={{
              background: `url(${img})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="card-title">{title}</div>
            <div className="card-info">
              <div className="price">
                <span>$</span> {price}
              </div>
              <div className="card-star">
                {Array.apply(null, { length: star }).map((e, i) => (
                  <img src="./assets/icons/star.svg" alt="" key={Date.now() / Math.random() * 12038 }  />
                ))}
              </div>
            </div>
          </div>
          <div className="card-info-link">
            See Now <img src="./assets/icons/fe_arrow-right.png" alt="" />
          </div>
      </div>
    </Fade>
  );
};
