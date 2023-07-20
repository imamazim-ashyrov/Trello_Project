import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Home from "../pages/home/Home";
import Menu, { Images } from "../pages/menu/Menu";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignUp />} />
        <Route path="/home" element={<Home />}>
          <Route path="menu" element={<Menu />} >
            <Route path="images" element={<Images/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Index;
