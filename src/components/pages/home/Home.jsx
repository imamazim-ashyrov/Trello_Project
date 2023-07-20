import React from "react";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Home = () => {
  const { url } = useSelector((state) => state.backgroundImage);

  return (
    <Wrapper url={url}>
      <Header />
      <Main />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center bottom;
`;
