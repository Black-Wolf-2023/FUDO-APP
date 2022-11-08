import React from "react";
import { Reveal } from "react-reveal";
import { TextImg } from "../small-components/TextImg";
import "./services.css";

export const Servieces = () => {
  return (
    <div className="serv-container">
      <div className="container flex serv-content">
        <Reveal top>
          <TextImg
            header="Easy To Order"
            title_1="You only need a few steps in "
            title_2="ordering food"
            img_src="./assets/main-img/fav-1.png"
          />
        </Reveal>
        <Reveal bottom>
          <TextImg
            header="Fastest Delivery"
            title_1="Delivery that is always ontime"
            title_2="even faster"
            img_src="./assets/main-img/fav-2.svg"
          />
        </Reveal>
        <Reveal bottom>
          <TextImg
            header="Best Quality"
            title_1="Not only fast for us quality is also "
            title_2="number one"
            img_src="./assets/main-img/fav-3.svg"
          />
        </Reveal>
      </div>
    </div>
  );
};
