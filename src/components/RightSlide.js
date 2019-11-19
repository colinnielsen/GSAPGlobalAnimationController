import React, { useRef, useEffect } from 'react';
import { TweenMax, Expo, TimelineLite } from 'gsap';
import Image from './image';
import styled from 'styled-components';

const RightSlideContainer = styled.div`
   max-height: 100vh;
   height: 100vh;
   width: 50%;
   overflow-y: hidden;
   background-color: #666666;
   width: 50vw;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ImageContainer = styled.div`
   width: 40%;
   height: 70vh;
   left: 15%;
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

const ImageRevealBlock = styled.div`
   position: absolute;
   z-index: 3;
   width: 0%;
   right: 16%;
   height: 50vh; 
   background-color: #757575;
`;

const Controller = styled.div`
   height: 10vh;
   width: 50%;
   bottom: 0;
   position: absolute;
   background-color: #444;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 15px;
`;

const RightSlide = (props) => {
   const RightSlideRef = useRef(null);
   const imageContainerRef = useRef(null);
   const imageRevealBlockRef = useRef(null);
   const controllerRef = useRef(null);

   useEffect(() => {
      const timeline = new TimelineLite();
      timeline
         .delay(1)
         .add(
            TweenMax.from(RightSlideRef.current, 1.2, {
               width: '0%',
               ease: Expo.easeInOut
            })
         )
         .to(imageRevealBlockRef.current, 0, { right: '15%', width: '0%' })
         .to(imageRevealBlockRef.current, .75, { right: '15%', width: '20%', ease: Expo.easeOut })
         .from(imageContainerRef.current, 0, { opacity: 0, visibility: 'hidden' })
         .to(imageRevealBlockRef.current, .6, { right: '35%', width: '0%', ease: Expo.easeInOut })
         .add(
            TweenMax.from(controllerRef.current, 1, {
               width: '0%',
               ease: Expo.easeInOut
            })
         )
   });

   return (
      <RightSlideContainer ref={RightSlideRef}>
         <Menu>
            <li>shop</li>
            <li>location</li>
            <li>about</li>
         </Menu>
         <ImageContainer ref={imageContainerRef}>
            <ImageRevealBlock ref={imageRevealBlockRef} />
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <Controller ref={controllerRef}>
            1  /  3
         </Controller>
      </RightSlideContainer>
   );
}

export default RightSlide;