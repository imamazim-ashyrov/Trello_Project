import React, { useState } from "react";
import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa";
import Input from "../../UI/Input";
import Button from "../../UI/Button"

const AddTask = (props) => {

    console.log(props);

    const as = () => {
        props.inputTrue()
    }

  return (
    <>
      <WrapperTask state = {props.inputActive} onClick={as}>
        {!props.inputActive && <span>
          <FaPlus />
          Добавить список
        </span>}
        {props.inputActive && <InputWithButton>
            <Input placeholder='Ввести заголовок задачи'/>
            <Button padding='4px 13px' fontSize='11px' variant='contained'>Добавить список</Button>
        </InputWithButton>}
      </WrapperTask>
    </>
  );
};

export default AddTask;

const WrapperTask = styled.div`
  background-color: ${(props) => props.state === false ? 'rgba(255, 255, 255, 0.4)' : 'black'};
  width: 17em;
  padding: 10px 5px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  cursor: pointer;
  transition: 0.1s;
  align-items: center;
  flex-direction: column;
  &:hover {
  background-color: ${(props) => props.state === false ? 'rgba(255, 255, 255, 0.2)' : ""};
  }
  & span {
    color: white;
    display: flex;
    align-items: center;
  }
`;

const InputWithButton = styled.div`
    color: white;
`