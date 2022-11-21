import React from 'react';
import Header from '../components/header/Header';
import ShorterLinks from '../components/shorterLinks/ShorterLinks';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutBox>
      <Header></Header>
      <ShorterLinks></ShorterLinks>
    </LayoutBox>
  );
};

export default Layout;

const LayoutBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10%;
`;
