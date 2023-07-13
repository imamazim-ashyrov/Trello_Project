import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Home from "../pages/home/Home";
import Modal from "../UI/Modal";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignUp />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/test" element={<Modal>
          <h1>Hello World</h1>
        </Modal>}/>
      </Routes> 
    </div>
  );
};

export default Index;
