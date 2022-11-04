import React from "react";
import { TextImg } from "../small-components/TextImg";
import "./services.css";

export const Servieces = () => {
  return (
    <div className="serv-container">
      <div className="container flex serv-content">
        <TextImg
          header="Easy To Order"
          title_1="You only need a few steps in "
          title_2="ordering food"
          img_src="./assets/main-img/fav-1.png"
        />
        <TextImg
          header="Fastest Delivery"
          title_1="Delivery that is always ontime"
          title_2="even faster"
          img_src="./assets/main-img/fav-2.svg"
        />
        <TextImg
          header="Best Quality"
          title_1="Not only fast for us quality is also "
          title_2="number one"
          img_src="./assets/main-img/fav-3.svg"
        />
      </div>
    </div>
  );
};
