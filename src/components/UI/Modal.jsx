import React from "react";
import { styled } from "styled-components";

const Modal = (props) => {
  console.log(props);
  return (
    <>
      <Backdrop></Backdrop>
      <ModalContent>{props.children}</ModalContent>
    </>
  );
};
export default Modal;
const Backdrop = styled.div`
  border: 1px solid;
  width: 100%;
  background-color: black;
  opacity: 30%;
  height: 98vh;
  overflow-y: hidden;
`;
const ModalContent = styled.div`
  border: 1px solid;
  position: absolute;
  top: 0;
`;
