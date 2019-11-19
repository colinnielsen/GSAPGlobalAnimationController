import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalCSS from '../global.css.js';
import FirstSlideText from '../components/FirstSlideText';
import LeftSlide from '../components/LeftSlide';
import RightSlide from '../components/RightSlide';
import SecondSlide from '../components/SecondSlide';

const Viewport = styled.section`
   height: 100vh;
   display: flex;
   flex-direction: row;
`;

const Viewport2 = styled(Viewport)`
   display: inline-block;
`;

class IndexPage extends Component {
   constructor() {
      super();
      this.state = {
         pauseFirstSlideTextAnimation: false,
         pauseLeftSlideAnimation: false,
         pauseRightSlideAnimation: false
      }
   }

   render() {
      return (
         <>
            <GlobalCSS />
            <Viewport key='1'>
               <FirstSlideText />
               <LeftSlide />
               <RightSlide />
            </Viewport>
            <Viewport2 key='2'>
               <SecondSlide />
            </Viewport2>
         </>
      );
   }
};

export default IndexPage;