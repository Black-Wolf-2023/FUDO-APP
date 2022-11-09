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
  let slide__data__1 = data.filter((e,index) => index > 7);
  let slide__data__2 = data.filter((e,index) => index < 7);


  return (
    <Fade bottom cascade>
      <div className="root-dom">
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
              {slide__data__1.map(e =>  <Card id = {e.strCategory} star={Math.ceil(Math.random() * 5)} price={(Math.random() * 100).toFixed(2)} key={Date.now() / Math.random()*362} title={e.strCategory} img={e.strCategoryThumb} />)}
            </Slide>
            <Slide>
              {slide__data__2.map(e =>  <Card id = {e.strCategory} star={Math.ceil(Math.random() * 5)} price={(Math.random() * 100).toFixed(2)} key={Date.now() / Math.random()*362} title={e.strCategory} img={e.strCategoryThumb} />)}              </Slide>
            <Review />
            <Footer />
            <Loader/>
          </div>
    </Fade>
    
  );
};
