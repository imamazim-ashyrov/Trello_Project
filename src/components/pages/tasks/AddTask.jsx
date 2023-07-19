import React, { useState } from "react";
import { styled } from "styled-components";
import { FaPlus } from "react-icons/fa";
import Button from "../../UI/Button";
import { Close } from "@mui/icons-material";
import { addTask } from "../../store/slices/TaskSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTask = (props) => {
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  console.log(tasks);
  const [value, setValue] = useState("");

  const clickHandler = (e) => {
    props.inputTrue();
    e.stopPropagation();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const taskHandler = (e) => {
    e.preventDefault();
    const task = {
      id: Math.random(),
      title: value,
      innerTask: [],
    };
    // console.log(task);
    dispatch(addTask(task));
  };

  return (
    <>
      <WrapperTask state={props.inputActive} onClick={clickHandler}>
        {!props.inputActive && (
          <span>
            <FaPlus />
            Добавить список
          </span>
        )}
        {tasks.map((el) => {
          props.inputActive && (
            <InputWithButton onSubmit={taskHandler}>
              <input
                onChange={onChangeInput}
                placeholder="Ввести заголовок задачи"
              />
              <div>
                <Button
                  onClick={taskHandler}
                  padding="4px 13px"
                  fontSize="11px"
                  variant="contained"
                >
                  Добавить список
                </Button>
                <Close />
              </div>
            </InputWithButton>
          );
          <TitleTask>
            <span>{el.title}</span>
          </TitleTask>;
        })}
        {/* <AddInnerTask/> */}
      </WrapperTask>
    </>
  );
};

export default AddTask;

const WrapperTask = styled.div`
  background-color: ${(props) =>
    props.state === false ? "rgba(255, 255, 255, 0.4)" : "black"};
  width: 17em;
  padding: 12px 3px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  cursor: ${(props) => (props.state === false ? "pointer" : "")};
  transition: 0.1s;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: ${(props) =>
      props.state === false ? "rgba(255, 255, 255, 0.2)" : ""};
  }
  & span {
    color: white;
    display: flex;
    align-items: center;
    transition: 0.3s;
  }
`;

const TitleTask = styled.div`
  border: 1px solid;
`;

const InputWithButton = styled.form`
  color: white;
  & input {
    border: none;
    padding: 4px 15px;
    color: #a4a4a4;
    outline: 2px solid #7772e3;
    background-color: #1d1d1d;
    font-size: 15px;
    font-weight: 500;
    height: 25px;
    border-radius: 6px;
    &::placeholder {
      font-size: 14px;
    }
  }
  & div {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
  }
`;
