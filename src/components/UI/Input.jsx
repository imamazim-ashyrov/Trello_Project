import React from "react";
import { styled } from "styled-components";
import Inputt from "@mui/material/OutlinedInput/OutlinedInput";

const Input = (props) => {
  return (
    <InputStyled
      style={props}
      size="small"
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;

const InputStyled = styled(Inputt)`
  & ::placeholder {
    font-size: 14px;
  }
`
