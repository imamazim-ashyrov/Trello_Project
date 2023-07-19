import React, { useState } from "react";
import AddTask from "./AddTask";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const ListTasks = () => {

  const {tasks} = useSelector(state => state.task)
  const [inputActive, setInputActive] = useState(false)
  console.log(inputActive);

  const inputFalse = () => {
    setInputActive(false)
  }
  const inputTrue = () => {
    setInputActive(true)
  }

  const clickHandler = () => {
    inputFalse()
  }

  return (
    <WrapperTasks onClick={clickHandler}>
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