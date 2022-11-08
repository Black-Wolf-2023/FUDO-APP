import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fade, Reveal } from "react-reveal";
import { Card } from "../card/Card";
import { Footer } from "../footer/Footer";
import { Loader } from "../loader/Loader";
import { Main } from "../main/Main";
import { Review } from "../review/Review";
import { Servieces } from "../servieces/Servieces";
import { Slide } from "../slide/Slide";
import { Text } from "../small-components/Text";

export const Home = () => {
  let data = useSelector(state => state);
  let slide__data__1 = data.filter((e,index) => index > 12);
  let slide__data__2 = data.filter((e,index) => index < 12);
  return (
    <>
      <Main />
      <Reveal bottom>
        <Text
          title="WHAT WE SERVE"
          head_1="Your Favorite Food"
          head_2="Delivery Partner"
          align="center"
        />
      </Reveal>
      <Servieces />
      <Fade left>
        <Text
          title="OUR MENU"
          head_1="Foods That Always"
          head_2="Makes You Fall In Love"
          align="left"
        />
      </Fade>
      <Slide>
        {slide__data__1.map(e =>  <Card star={Math.ceil(Math.random() * 5)} price={(Math.random() * 100).toFixed(2)} key={e['tracking-id']} title={e.display.displayName} img={e.display.categoryImage} />)}
      </Slide>
      <Slide>
      {slide__data__2.map(e =>  <Card star={Math.ceil(Math.random() * 5)} key={e['tracking-id']} price={(Math.random() * 100).toFixed(2)} title={e.display.displayName} img={e.display.categoryImage} />)}
      </Slide>
      <Review />
      <Footer />
      <Loader/>
    </>
  );
};
