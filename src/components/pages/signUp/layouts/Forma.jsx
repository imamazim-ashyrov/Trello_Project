import React, { useState } from "react";
import { styled } from "styled-components";
import Buttonn from "../../../UI/Button";
import Input from "../../../UI/Input";
import GoogleIcon from "../../../assets/icons/GoogleIcon.jpg";
import Microsoft_icon from "../../../assets/icons/Microsoft_icon.svg.png";
import Apple_icon from "../../../assets/icons/Apple_icon.png";
import Slack_icon from "../../../assets/icons/Slack_icon.png";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Forma = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);

  const emailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (emailValue.trim().length > 4 && isPassword === false) {
      setIsPassword(true);
    }
    if (isPassword === true && passwordValue.trim().length > 4) {
      if (
        emailValue === "imamazim@gmail.com" &&
        passwordValue === "12345678"
      ) {
        setIsSpinner(true);
        setTimeout(() => {
          setIsSpinner(false);
          navigate("/home");
        }, 1500);
      } else {
        setErrorMessage(false);
        setIsSpinner(true);
        setTimeout(() => {
          setIsSpinner(false);
          setErrorMessage(true);
        }, 1500); 
      }
    }
  };

  return (
    <FormWrapper>
      {errorMessage && (
        <ErrorMessage>
          <span>Аккаунт с таким адресом электронной почты не существует</span>
        </ErrorMessage>
      )}
      <H1>Вход в Trello</H1>
      <Form onSubmit={clickHandler} isPassword={isPassword}>
        <Input
          onChange={emailHandler}
          width="100%"
          type="email"
          placeholder="Укажите адрес электронной почты"
        />
        {isPassword && (
          <Input
            onChange={passwordHandler}
            width="100%"
            type="password"
            placeholder="Введите пароль"
          />
        )}
        <Buttonn
          onClick={clickHandler}
          width="100%"
          variant="contained"
          background="#5AAC44"
        >
          {!isSpinner && <span>Продолжить</span>}
          {isSpinner && (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          )}
        </Buttonn>

        {!isPassword && (
          <>
            <span>ИЛИ</span>
            <A href="">
              <img src={GoogleIcon} alt="Google" />
              <span>Войти через Google</span>
            </A>
            <A href="">
              <img src={Microsoft_icon} alt="Microsoft" />
              <span>Войти через Microsoft</span>
            </A>
            <A href="">
              <img src={Apple_icon} alt="Apple" />
              <span>Войти через Apple</span>
            </A>
            <A href="">
              <img src={Slack_icon} alt="Apple" />
              <span>Войти через Slack</span>
            </A>
          </>
        )}
      </Form>
      <hr />
      <HelpLink>
        <a href="">Не удается войти?</a>
        <a href="">Зарегистрировать аккаунт</a>
      </HelpLink>
    </FormWrapper>
  );
};

export default Forma;

const ErrorMessage = styled.div`
  background-color: #eb5a46;
  border-radius: 4px;
  padding: 5px 15px;
  color: white;
`;

const FormWrapper = styled.div`
  width: 21%;
  font-weight: 300;
  font-size: 14px;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  padding: 25px 40px 50px 40px;
  & hr {
    margin: 25px 0 14px;
  }
`;

const H1 = styled.h1`
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-bottom: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.isPassword ? "190px" : "328px")};
  justify-content: space-around;
  align-items: center;
`;

const A = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  border-radius: 3px;
  box-shadow: 0 0 5px 0.1px #2c2c2c33;
  transition: 0.1s;
  & img {
    width: 19px;
  }
  & span {
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #505f79;
    padding: 3px;
    height: 32px;
    line-height: 32px;
  }
  &:hover {
    background-color: #fafafa;
  }
`;

const HelpLink = styled.div`
  display: flex;
  justify-content: space-around;
  & a {
    color: #5f5fe1;
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
  }
`;
