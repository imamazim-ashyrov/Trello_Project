import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Home from "../pages/home/Home";
import Modal from "../UI/Modal";
import Menu from "../pages/menu/Menu";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignUp />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/test" element={<Menu/>}/>
      </Routes> 
    </div>
  );
};

export default Index;
