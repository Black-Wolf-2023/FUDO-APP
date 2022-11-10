import React, {useEffect, useState } from 'react'

export const Audio = ({status,rester}) => {
    function hidder(){
        rester(false);
    }
  return (
    <div className= {status ? 'audio-slid-poper' : 'audio-slid-poper audio-slid-poper-hider'} onClick={hidder} >
        <iframe  width="560" height="315" src="https://www.youtube.com/embed/XRXMMA4YZp0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
