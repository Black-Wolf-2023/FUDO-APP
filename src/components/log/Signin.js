import React from "react";
import { Form } from "../small-components/Form";

export const Signin = () => {
  return (
    <Form
      inp__data={[
        <input key={0} type="text" placeholder="Full Name" required />,
        <input key={1} type="email" placeholder="Email @ .." required />,
        <input key={2} type="password" placeholder="Password" required />,
        <input key={3} type="password" placeholder="Confirm password" required />,
      ]}
      status={false}
    />
  );
};
