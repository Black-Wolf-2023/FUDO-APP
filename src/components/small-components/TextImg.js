import React from "react";

export const TextImg = ({ header, title_1, title_2, img_src }) => {
  return (
    <>
      <div className="text-cont" style={{ textAlign: "center" }}>
        <div className="text-img">
          <img src={img_src} alt="" />
        </div>
        <div className="head-3-text">{header}</div>
        <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
          {title_1}
        </p>
        <p style={{ color: "var(--text-color)", fontWeight: "500" }}>
          {title_2}
        </p>
      </div>
    </>
  );
};
