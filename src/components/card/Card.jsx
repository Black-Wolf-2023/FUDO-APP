import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, star, img , id}) => {
  return (
    <Fade bottom cascade>
      <div className="card-container">
        <div className="card">
        <Link className="hide-link-style" to={`Food${id}`}>
          <div
                className="card-content"
                style={{background: `url(${img})`,backgroundPosition: "center center",backgroundSize: "cover",}}>
                <div className="crad-info-garp">
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
              </div>
        </Link>
        </div>
      </div>
    </Fade>
  );
};
