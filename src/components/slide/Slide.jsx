import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Zoom } from "react-reveal";
import { data__fetcher } from "../../redux/actions/Get__data__actions";
import "./slide.css";

export const Slide = ({ children }) => {
  let card__slider = useRef();
  let dispatch = useDispatch();
  let data = useSelector(state => state);

  function slide__left() {
    card__slider.current.scrollLeft -= 300;
  }
  function slide__right() {
    card__slider.current.scrollLeft += 300;
  }
  useEffect(() => {
    dispatch(data__fetcher());
  },[])
  return (
    <div className="container">
      <div className="arrows">
        <Zoom left>
          <span onClick={slide__left}>
            <img src="./assets/icons/fe_arrow-left.svg" alt="" />
          </span>
        </Zoom>
        <Zoom left>
          <span onClick={slide__right}>
            <img src="./assets/icons/fe_arrow-right.svg" alt="" />
          </span>
        </Zoom>
      </div>
      <div className="card-parent" ref={card__slider}>
        {children}
      </div>
    </div>
  );
};