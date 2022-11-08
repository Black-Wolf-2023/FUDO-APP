import React, { useEffect, useState } from 'react'
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import "./loader.css";

export const Loader = () => {
    let data = useSelector(state => state);
    let [status,changeStatus] = useState(false);

    useEffect(() => {
        if(data.length < 30) {
            changeStatus(false);
            document.querySelector('body').style.overflow = "hidden"
            return;
        } 
        changeStatus(true);
        document.querySelector('body').style.overflow = "auto";
    }, [data]);
  return (
    <div className= {status ?  "loader" : "loader activer"}>
        <Rings
        height="80"
        width="80"
        color="#eb5757"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
        />
    </div>
  )
}
