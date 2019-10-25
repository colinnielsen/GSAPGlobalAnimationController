import React from 'react';
import styled from 'styled-components';
import Image from '../components/image';

const SecondSlideContainer = styled.div`
   max-height: 100vh;
   height: 100vh;
   // width: 100vw;
   overflow: auto;
   overflow-x: scroll;
   overflow-y: hidden;
   white-space: nowrap; 
   background-color: rebeccapurple;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ImageContainer = styled.div`
   width: 40vw;
   height: 70vh;
   display: inline-block;

`;

// function useHorizontalScroll() {
//    const [scroll, setScroll] = useState(window.scroll)
// }

const SecondSlide = () => {
   return (
      <SecondSlideContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
         <ImageContainer>
            <Image src='3.jpg' width='100%' />
         </ImageContainer>
      </SecondSlideContainer>
   );
}

export default SecondSlide;