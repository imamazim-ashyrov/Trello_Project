import React, { useState } from "react";
import AddTask from "./AddTask";
import { styled } from "styled-components";

const ListTasks = () => {
  const [inputActive, setInputActive] = useState(false);

  const inputFalse = () => {
    setInputActive(false);
  };
  const inputTrue = () => {
    setInputActive(true);
  };

  const clickHandler = () => {
    inputFalse();
  };

  return (
    <WrapperTasks onClick={clickHandler}>
      <AddTask
        inputFalse={inputFalse}
        inputTrue={inputTrue}
        inputActive={inputActive}
      />
    </WrapperTasks>
  );
};

export default ListTasks;

const WrapperTasks = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  padding: 30px;
  height: calc(100% - 119px);
  overflow-x: scroll;
`;
