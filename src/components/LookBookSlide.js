import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Expo, TimelineLite } from 'gsap';
import Image from '../components/image';
import styled from 'styled-components';

const LookBookSlide = () => {
   const LookBookSlideContainer = styled.div`
      max-height: 100vh;
      height: 100vh;
      width: 50%;
      // left: 50%;
      float: right;
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
      transform: translate(15%);
   `;

   const Controller = styled.div`
      height: 10vh;
      width: 50%;
      bottom: 0;
      position: absolute;
      background-color: darkslategrey;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
   `;

   const ImageRevealBlock = styled.div`
      position: absolute;
      z-index: 3;
      width: 0%;
      right: 16%;
      top: 16%;
      transform: translate(15%);
      height: 26.7vw; 
      background-color: #757575;
   `;

   const lookBookSlideRef = useRef(null);
   const imageContainerRef = useRef(null);
   const imageRevealBlockRef = useRef(null);
   const controllerRef = useRef(null);

   useEffect(() => {
      const timeline = new TimelineLite({ paused: true });
      timeline
      .delay(1)
      .add(
         TweenMax.from(lookBookSlideRef.current, 1.2, {
            width: '0%',
            ease: Expo.easeInOut
         })
      )
      .to(imageRevealBlockRef.current, 0, {right: '15%',width: '0%'})
      .to(imageRevealBlockRef.current, .75, {right: '15%',width: '20%', ease: Expo.easeOut})
      .from(imageContainerRef.current, 0, {opacity: 0, visibility: 'hidden'})
      .to(imageRevealBlockRef.current, .6, {right: '35%',width: '0%', ease: Expo.easeInOut})
      .add(
         TweenMax.from(controllerRef.current, 1, {
            width: '0%',
            ease: Expo.easeInOut
         })
      )
      .play();
   }, [])

   return (
      <LookBookSlideContainer ref={lookBookSlideRef}>
         <ImageRevealBlock ref={imageRevealBlockRef}/>
         <ImageContainer ref={imageContainerRef}>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <Controller ref={controllerRef}>
            1  /  3
         </Controller>
      </LookBookSlideContainer>
   );
}

export default LookBookSlide;