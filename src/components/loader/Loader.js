import React, { useEffect, useState } from 'react'
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import "./loader.css";

export const Loader = () => {
    let data = useSelector(state => state);
    let [status,changeStatus] = useState(false);
    useEffect(() => {
        if(data.length < 22) {
            changeStatus(false);
            return;
        } 
        changeStatus(true);
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
