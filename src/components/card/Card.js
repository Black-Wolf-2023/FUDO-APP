import React from "react";
import "./card.css";

export const Card = ({ title, price, star, img }) => {
  return (
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
            <img src="./assets/icons/star.svg" alt="" />
            <img src="./assets/icons/star.svg" alt="" />
            <img src="./assets/icons/star.svg" alt="" />
            <img src="./assets/icons/star.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="card-info-link">
        See Now <img src="./assets/icons/fe_arrow-right.png" alt="" />
      </div>
    </div>
  );
};