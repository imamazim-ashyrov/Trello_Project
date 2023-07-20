import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { styled } from "styled-components";
import Buttonn from "../../UI/Button";
import { Close, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addInnerTask } from "../../store/slices/TaskSlice";

const AddInnerTask = (props) => {
  const { tasks } = useSelector((state) => state.task);
  console.log(tasks);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const innerTaskValue = (e) => {
    setValue(e.target.value);
  };

  const data = tasks.find((el) => el.id === props.id);
  const clickHandler = () => {
    const obj = {
      id: props.id,
      innerTask: value,
    };
    if (value.trim().length > 0) {
      dispatch(addInnerTask(obj));
    }
    setValue("");
  };

  return (
    <Wrapper>
      <span>{props.title}</span>
      {data.innerTask.map((el) => (
        <InnerTask draggable={true}>
          <span>{el.innerTask}</span>
          <span className="edit"><Edit /></span>
        </InnerTask>
      ))}
      {!props.textareaActive && (
        <ButtonInnerTask>
          <Buttonn
            onClick={props.showTextarea}
            width="16em"
            variant="contained"
            backgroundColor="#000000"
          >
            <FaPlus />
            <span>Добавить карточку</span>
          </Buttonn>
        </ButtonInnerTask>
      )}

      {props.textareaActive && (
        <>
          <div>
            <textarea
              value={value}
              onChange={innerTaskValue}
              cols="24"
              rows="3"
              placeholder="Ввести заголовок для карточки"
            ></textarea>
          </div>
          <ButtonInerTask>
            <Buttonn onClick={clickHandler} variant="contained">
              <span>Добавить карточку</span>
            </Buttonn>
            <Close onClick={props.blockTextarea} />
          </ButtonInerTask>
        </>
      )}
    </Wrapper>
  );
};

export default AddInnerTask;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #000000;
  border-radius: 5px;
  margin: 10px 10px 0 10px;
  font-size: 16px;
  font-weight: 500;
  color: #b6b6b6;
  padding: 12px;
  & span {
    padding: 0px 10px;
  }
  & div {
    margin-top: 10px;
  }
  & textarea {
    width: 15em;
    border-radius: 7px;
    background-color: #181818;
    color: #b6b6b6;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 5px 10px;
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const InnerTask = styled.div`
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15em;
  padding: 5px 10px;
  border-radius: 5px;
  & .edit {
    width: 10px;
    padding: 2px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    /* background-color: #2b2b2b; */
  }
`;

const ButtonInnerTask = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #000000;
  &:hover {
    background-color: #292929;
  }
  & span {
    font-size: 11px;
  }
`;
const ButtonInerTask = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #000000;
  width: 15em;
  justify-content: space-between;
  & span {
    font-size: 11px;
  }
`;
