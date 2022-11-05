import React from "react";
import { Form } from "../small-components/Form";

export const Signin = () => {
  return (
    <Form
      inp__data={[
        <input type="text" placeholder="Full Name" required />,
        <input type="email" placeholder="Email @ .." required />,
        <input type="password" placeholder="Password" required />,
        <input type="password" placeholder="Confirm password" required />,
      ]}
      status={false}
    />
  );
};
