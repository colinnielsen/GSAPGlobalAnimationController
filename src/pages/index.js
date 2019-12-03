import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalCSS from '../global.css.js';
import FirstSlideText from '../components/FirstSlideText';
import LeftSlide from '../components/LeftSlide';
import RightSlide from '../components/RightSlide';

const Viewport = styled.section`
   height: 100vh;
   display: flex;
   flex-direction: row;
`;

const IndexPage = () => {
   return (
      <>
         <GlobalCSS />
         <Viewport key='1'>
            <FirstSlideText />
            <LeftSlide />
            <RightSlide />
         </Viewport>
      </>
   );
};

export default IndexPage;