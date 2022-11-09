import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodInfo } from "../food-Info/FoodInfo";
import { Header } from "../header/Header";
import { Home } from "../home/Home";
import { Login } from "../log/Login";
import { Signin } from "../log/Signin";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Food:id" element={<FoodInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
