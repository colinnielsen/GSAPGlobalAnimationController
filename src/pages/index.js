import React from 'react';
import styled from 'styled-components';
import GlobalCSS from '../global.css.js';
import IntroSlide from '../components/IntroSlide';
import LookBookSlide from '../components/LookBookSlide';
import SecondSlide from '../components/SecondSlide';

const Viewport = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Viewport2 = styled(Viewport)`
  display: inline-block;
`;

const IndexPage = () => (
  <>
    <Viewport key='1'>
      <GlobalCSS />
      <IntroSlide />
      <LookBookSlide />
    </Viewport>
    <Viewport2 key='2'>
      <SecondSlide />
    </Viewport2>
  </>
);

export default IndexPage;