import React from "react";
import { styled } from "styled-components";
import TrelloBackground_Img from "../../assets/images/TrelloBackground_Img.png"

import Select from "./layouts/Select";
import Forma from "./layouts/Forma";
import Footer from "./layouts/Footer";

const SignUp = () => {

  return (
    <Wrapper>
      <TrelloImg
        alt="Trello"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
      />
      <Section>
        <Forma />
        <FormLink>
          <span>Политика конфиденциальности</span>
          <span>Условия использования</span>
        </FormLink>
        <Select />
      </Section>
      <Hr />
      <Footer />
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  height: 99vh;
  overflow-y: scroll;
  background-image: url(${TrelloBackground_Img});
  background-position: center bottom;
  background-size: cover;
`

const TrelloImg = styled.img`
  color: #4d4d4d;
  font-weight: 300;
  line-height: 1.44em;
  font-size: 14px;
  display: block;
  height: 43px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  width: 27%;
`;

const FormLink = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-around;
  margin: 16px 0;
  & span {
    font-size: 12px;
    color: #4479c9;
    cursor: pointer;
  }
  :hover {
    text-decoration: underline;
  }
`;
