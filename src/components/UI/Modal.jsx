import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  const navigate = useNavigate()

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={() => navigate(-1)}></Backdrop>
      <ModalContent>{props.children}</ModalContent>
    </>,
    modalRoot
  );
};
export default Modal;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid;
  width: 100%;
  background-color: #000000;
  opacity: 30%;
  height: 100vh;
  overflow: hidden;
`;
const ModalContent = styled.div`
  background-color: #292929;
  box-shadow: 0 0 7px 0.01px #d1d1d1;
  padding: 30px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
