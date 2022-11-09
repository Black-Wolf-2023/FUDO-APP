import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Fade } from 'react-reveal';
import { Link, useParams } from 'react-router-dom'
import "./food.css";

export const FoodInfo = () => {
  
  let {id} = useParams();
  let data = useSelector(state => state);
  let filter__data = data.filter(e => e.strCategory == id);



  return (
    <Fade bottom cascade>
      <div className='meal-container flex'>
        <div className='meal-img'>
          <img src={filter__data[0].strCategoryThumb} alt="" width="500px"/>
        </div>
        <div className='meal-info'>
          <h1 className='head-1-text'>{filter__data[0].strCategory}</h1>
          <p className='main-text'>{filter__data[0].strCategoryDescription}</p>
        </div>
        <Link to="/" className="hide-link-style food-card-backer">
          <span>Back</span>
        </Link>
      </div>
    </Fade>
  )
}
