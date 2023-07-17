import React, { useState } from "react";
import AddTask from "./AddTask";
import { styled } from "styled-components";

const ListTasks = () => {

  const [inputActive, setInputActive] = useState(false)

  const inputFalse = () => {
    setInputActive(true)
  }

  const inputTrue = () => {
    setInputActive(false)
  }

  const as = () => {
    inputTrue()
  }

  return (
    <WrapperTasks onClick={as}>
      <AddTask inputTrue = {inputTrue} inputActive={inputActive}/>
    </WrapperTasks>
  );
};

export default ListTasks;

const WrapperTasks = styled.div`
  color: white;
  padding: 30px;
  height: calc(100% - 119px);
  overflow-x: scroll;
`