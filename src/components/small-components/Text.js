import React from "react";

export const Text = ({ title, head_1, head_2, align }) => {
  return (
    <div className="container">
      <div style={{ textAlign: align, margin: "100px 0" , backgroundColor:"#fff"}}>
        <p
          style={{
            color: "var(--main-color)",
            fontWeight: "600",
            marginTop: "100px",
          }}
        >
          {title}
        </p>
        <h2 className="head-2-text" style={{ color: "var(--text-color)" }}>
          {head_1}
        </h2>
        <h2 className="head-2-text" style={{ color: "var(--text-color)" }}>
          {head_2}
        </h2>
      </div>
    </div>
  );
};
