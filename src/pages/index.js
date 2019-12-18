import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { store } from '../../animationTimeline/AnimationTimeline.js'
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
      <Provider store={store}>
         <GlobalCSS />
         <Viewport key='1'>
            <FirstSlideText />
            <LeftSlide />
            <RightSlide />
         </Viewport>
      </Provider>
   );
};

export default IndexPage;