import { Action } from "@remix-run/router";
import React from "react";
import axios from "axios";

export const Get__data = (
  state = [],
  action
) => {
  switch (action.type) {
    case "GET__DATA":
      return [...action.paylod]
      break;
    default :
      return state;
      break;
  }
};
