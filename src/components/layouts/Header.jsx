import React from "react";
import { styled } from "styled-components";
import Trello_logo from "../assets/icons/Trello_logo.svg.png";
import Buttonn from "../UI/Button";
import GoogleIcon from "../assets/icons/GoogleIcon.jpg";
import DownArrowIcon from "../assets/icons/DownArrowIcon.webp";
import CandyBox_Icon from "../assets/icons/CandyBox_Icon.png";

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <Menu_Icon>
          <img src={CandyBox_Icon} alt="" />
        </Menu_Icon>
        <TrelloIcon src={Trello_logo} alt="" />
        <NavLinks>
          <div>
            <span>Рабочие пространства</span>
            <img src={DownArrowIcon} alt="" />
          </div>
          <div>
            <span>Недавние</span>
            <img src={DownArrowIcon} alt="" />
          </div>
          <div>
            <span>В избранном</span>
            <img src={DownArrowIcon} alt="" />
          </div>
          <div>
            <span>Шаблоны</span>
            <img src={DownArrowIcon} alt="" />
          </div>
        </NavLinks>
        <Buttonn
          padding="0 35px"
          fontSize="12px"
          width="78px"
          height="31px"
          variant="contained"
        >
          Создать
        </Buttonn>
      </nav>
      <SearchAndSettings>
        <SearchInput>
          <svg filter="invert(70%)" width="24" height="24">
            <path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"></path>
          </svg>
          <input type="text" placeholder="Поиск" />
        </SearchInput>
        <span>
          <svg filter="invert(70%)" width="24" height="24">
            <path d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z"></path>
          </svg>
        </span>
        <span>
          <svg
            filter="invert(70%)"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"></path>
          </svg>
        </span>
        <span>
          <svg
            filter="invert(70%)"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12 20V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            ></path>
          </svg>
        </span>
        <span>
          <MyProfil src={GoogleIcon} alt="GoogleIcon" />
        </span>
      </SearchAndSettings>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  background-color: #1d2125;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & * {
    color: #9fadbc;
  }
  & nav {
    display: flex;
    align-items: center;
    width: 53%;
  }
`;

const Menu_Icon = styled.span`
  padding: 0 10px 0 15px;
  & img {
    cursor: pointer;
    width: 16px;
    height: 16px;
    filter: invert(70%);
  }
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & div {
    display: flex;
    padding: 7px 7px;
    border-radius: 3px;
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #2e3439;
    }
    & img {
      width: 14px;
      height: 12px;
      filter: invert(70%);
      padding: 0 4px;
    }
  }
`;

const TrelloIcon = styled.img`
  height: 27px;
  width: 91px;
  padding: 0 8px;
  margin-left: 5px;
  filter: invert(59%);
`;

const SearchAndSettings = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  & span {
    padding: 3px;
    border-radius: 100%;
    display: flex;
    &:hover {
      background-color: #41474d;
    }
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  color: white;
  border: 1px solid #616161;
  border-radius: 5px;
  background-color: #383737;
  padding: 0 0 0 4px;
  &:hover {
    background-color: #404040;
  }
  & input {
    padding: 0 0 0 5px;
    width: 100%;
    font-size: 15px;
    height: 32px;
    outline: none;
    border: none;
    background-color: #383737;
    &::placeholder {
      color: #9fadbc;
    }
    &:hover {
      background-color: #404040;
    }
  }
`;

const MyProfil = styled.img`
  height: 21px;
  width: 21px;
  filter: invert(70%);
`;
