import React from "react";

export const List = ({ data, title }) => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>{title}</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontWeight: "500",
          color: "var(--text-color)",
          cursor: "pointer",
          marginBottom: "80px",
        }}
      >
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
