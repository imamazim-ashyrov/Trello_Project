import React from "react";
import Aside from "./Aside";
import { styled } from "styled-components";
import ListTasks from "../pages/tasks/ListTask";
import NavMain from "./NavMain";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Wrapper>
      <Aside />
      <main>
        <NavMain/>
        <ListTasks/>
      </main>
      <Outlet/>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;  
  font-size: 14px;
  & main {
    width: 80.6%;
  }
`;