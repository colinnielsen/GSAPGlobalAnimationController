import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';


const Slogan = styled.div`
   position: absolute;
   bottom: 23vh;
   font-size: 20px;
   left: 23%;
   color: #eee;
`;

const Date = styled.div`
   position: absolute;
   top: 10%;
   font-size: 17.5px;
   left: -2%;
   color: #eee;
   transform: rotate(270deg);
`;

const RandomText = styled.div`   
   position: absolute;
   top: 90%;
   font-size: 19.5px;
   left: 2%;
   color: #eee;
`;

const IntroSlideText = () => {
   const sloganRef = useRef(null);
   const dateRef = useRef(null);
   const randomTextRef = useRef(null);

   useEffect(() => {
   console.log('rendered from introSlideText')
   const timeline = new TimelineLite({ paused: true });
      timeline
      .from(sloganRef.current, 1, {left: '20%', opacity: 0})
      .from(dateRef.current, .8, {opacity: 0, top: '-20%'})
      .from(randomTextRef.current, .8, {opacity: 0, bottom: '-20%'})

   }, []);

   return (
      <>
         <Date ref={dateRef}>
            spring/summer 2 0 1 9 
         </Date>
         <Slogan ref={sloganRef}>
            if you can't beat 'em, join 'em
         </Slogan>
         <RandomText ref={randomTextRef}>
            r / a . . .
         </RandomText>
      </>
   );
}

export default IntroSlideText;