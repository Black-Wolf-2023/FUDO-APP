import { Action } from "@remix-run/router";
import React from "react";
import axios from "axios";

export const Get__data = (
  state = [{ id: 0, name: "Abdalrhman", title: "test" }],
  action
) => {
  switch (action.type) {
    case "GET__DATA":
      return [...state,...action.paylod]
      break;
    default :
      return state;
      break;
  }
};
