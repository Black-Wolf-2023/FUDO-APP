import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './Card'
import { Home } from './Home'

export const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/card' element = {<Card/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}
