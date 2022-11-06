import React from "react";
import { Form } from "../small-components/Form";
import "./form.css";

export const Login = () => {
  return (
    <Form
      inp__data={[
        <input type="number"  key={0} placeholder="ID" required />,
        <input type="password" key={1} placeholder="Password" required />,
      ]}
      status={true}
    />
  );
};
