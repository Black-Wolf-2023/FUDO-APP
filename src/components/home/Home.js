import React from "react";
import { Card } from "../card/Card";
import { Main } from "../main/Main";
import { Servieces } from "../servieces/Servieces";
import { Slide } from "../slide/Slide";
import { Text } from "../small-components/Text";

export const Home = () => {
  return (
    <>
      <Main />
      <Text
        title="WHAT WE SERVE"
        head_1="Your Favorite Food"
        head_2="Delivery Partner"
        align="center"
      />
      <Servieces />
      <Text
        title="OUR MENU"
        head_1="Foods That Always"
        head_2="Makes You Fall In Love"
        align="left"
      />
      <Slide>
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
      </Slide>
      <Slide>
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
        <Card price={19} title={"Pizza Chesse"} img="./assets/icons/food.png" />
      </Slide>
    </>
  );
};
