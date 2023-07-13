import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <img
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
        width="150"
      />
      <FooterLinks>
        <span>Шаблоны</span>
        <span>Цены</span>
        <span>Приложения</span>
        <span>Вакансии</span>
        <span>Блог</span>
        <span>Разработчики</span>
        <span>О нас</span>
        <span>Помощь</span>
      </FooterLinks>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    padding: 30px 0 10px 0px;

  }
`

const FooterLinks = styled.div`
  display: flex;
  width: 42%;
  justify-content: space-around;
  padding: 25px;
  flex-wrap: wrap;
  & span {
    color: #8f9193;
    font-size: 14px;
    cursor: pointer;
  }
`