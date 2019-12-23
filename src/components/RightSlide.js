import React, { useRef, useEffect, useContext } from 'react';
import { TweenMax, Expo, TimelineLite } from 'gsap';
import { AnimationTimelineContext } from '../../animationTimeline/AnimationTimeline';
import Image from './image';
import styled from 'styled-components';

const RightSlideContainer = styled.div`
   max-height: 100vh;
   height: 100vh;
   width: 0%;
   overflow-y: hidden;
   background-color: #666666;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ImageContainer = styled.div`
   width: 40%;
   height: 70vh;
   left: 15%;
   visibility: hidden;
`;

const Menu = styled.ul`
   position: absolute;
   top: 2%;
   right: 5%;
   display:flex;
   flex-flow: row nowrap;
   font-size: 20px;
   color: #fff;
`;

const Controller = styled.div`
   height: 10%;
   width: 0%;
   bottom: 0;
   position: absolute;
   background-color: #444;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 15px;
   visibility: hidden;
`;

const ImageRevealBlock = styled.div`
   position: absolute;
   z-index: 3;
   width: 0%;
   top: 15vh;
   height: 28vw; 
   background-color: #757575;
`;

const RightSlide = () => {
   const [components, setComponents] = useContext(AnimationTimelineContext);

   const RightSlideRef = useRef(null);
   const imageContainerRef = useRef(null);
   const imageRevealBlockRef = useRef(null);
   const controllerRef = useRef(null);

   useEffect(() => {
      const comp = components[RightSlide.name];
      const isPaused = comp && comp.paused ? comp.paused : false;
      if (!isPaused) {
         const timeline = new TimelineLite();
         timeline
            .add(
               TweenMax.to(RightSlideRef.current, 1.2, {
                  width: '50%',
                  ease: Expo.easeInOut
               })
            )
            .to(imageRevealBlockRef.current, 0, { right: '15%',width: '0%' })
            .to(imageRevealBlockRef.current, .75, { right: '15%', width: '20%', ease: Expo.easeOut })
            .to(imageContainerRef.current, 0, { opacity: 1, visibility: 'visible' })
            .to(imageRevealBlockRef.current, .6, { right: '35%', width: '0%', ease: Expo.easeInOut })
            .add(
               TweenMax.to(controllerRef.current, 1, {
                  visibility: 'visible',
                  width: '50%',
                  ease: Expo.easeInOut
               })
            )
      }
   });

   return (
      <RightSlideContainer ref={RightSlideRef}>
         <Menu>
            <li>shop</li>
            <li>location</li>
            <li>about</li>
         </Menu>
         <ImageRevealBlock ref={imageRevealBlockRef} />
         <ImageContainer ref={imageContainerRef}>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <Controller ref={controllerRef}>
            1  /  3
         </Controller>
      </RightSlideContainer>
   );
}

export default RightSlide;