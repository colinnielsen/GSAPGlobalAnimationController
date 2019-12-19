import React from 'react';
import styled from 'styled-components';
import { AnimationProvider, AnimationTimeline } from '../../animationTimeline/AnimationTimeline.js'
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
      <AnimationProvider>
         <AnimationTimeline />
         <GlobalCSS />
         <Viewport key='1'>
            <FirstSlideText />
            <LeftSlide />
            <RightSlide />
         </Viewport>
      </AnimationProvider>
   );
};

export default IndexPage;