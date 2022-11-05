import React from "react";
import { Form } from "../small-components/Form";
import "./form.css";

export const Login = () => {
  return (
    <Form
      inp__data={[
        <input type="number" placeholder="ID" required />,
        <input type="password" placeholder="Password" required />,
      ]}
      status={true}
    />
  );
};
