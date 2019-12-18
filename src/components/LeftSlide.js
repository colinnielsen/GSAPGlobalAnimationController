import React, { useEffect, useRef } from 'react';
import { TweenMax, Expo, TimelineLite } from 'gsap';
import Image from './image';
import styled from 'styled-components';

const LeftSlideContainer = styled.div`
   max-height: 100vh;
   height: 100vh;
   width: 50%;
   overflow-y: hidden;
   background-color: #C23816;
   width: 50vw;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ImageContainer = styled.div`
   width: 40%;
`;

const ImageRevealBlock = styled.div`
   position: absolute;
   z-index: 2;
   width: 0%;
   left: 15%;
   height: 26.7vw; 
   background-color: #585858;
`;

const LeftSlide = () => {
   const LeftSlideRef = useRef(null);
   const imageContainerRef = useRef(null);
   const imageRevealBlockRef = useRef(null);

   useEffect(() => {
      
      const timeline = new TimelineLite();
      timeline
         .add(
            TweenMax.from(LeftSlideRef.current, 2, {
               width: '0%',
               ease: Expo.easeInOut
            })
         )
         .to(imageRevealBlockRef.current, 0, { left: '15%', width: '0%' })
         .to(imageRevealBlockRef.current, .75, { left: '15%', width: '20%', ease: Expo.easeOut })
         .from(imageContainerRef.current, 0, { opacity: 0, visibility: 'hidden' })
         .to(imageRevealBlockRef.current, .6, { left: '35%', width: '0%', ease: Expo.easeInOut });
   },)

   return (
      <LeftSlideContainer ref={LeftSlideRef}>
         <ImageRevealBlock ref={imageRevealBlockRef} />
         <ImageContainer ref={imageContainerRef}>
            <Image src='2.jpg' width='100%' />
         </ImageContainer>
      </LeftSlideContainer>
   );
};

export default LeftSlide;