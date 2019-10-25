import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, Expo, TimelineLite } from 'gsap';
import Image from '../components/image';
import IntroSlideText from '../components/IntroSlideText';
import styled from 'styled-components';

const IntroSlideContainer = styled.div`
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

const IntroSlide = () => {
    const introSlideRef = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRevealBlockRef = useRef(null);

    useEffect(() => {
        const timeline = new TimelineLite({paused: true});
        timeline
            .add(
                TweenMax.from(introSlideRef.current, 2, {
                    width: '0%',
                    ease: Expo.easeInOut
                })
            )
            .to(imageRevealBlockRef.current, 0, {left: '15%',width: '0%'})
            .to(imageRevealBlockRef.current, .75, {left: '15%',width: '20%', ease: Expo.easeOut})
            .from(imageContainerRef.current, 0, {opacity: 0, visibility: 'hidden'})
            .to(imageRevealBlockRef.current, .6, {left: '35%',width: '0%', ease: Expo.easeInOut})
            .play()
            // .addCallback(() => props.triggerLookBookTimeline());
    }, []);

    return (
        <IntroSlideContainer ref={introSlideRef}>
            <ImageRevealBlock ref={imageRevealBlockRef}/>
            <ImageContainer ref={imageContainerRef}>
                <Image src='2.jpg' width='100%' />
            </ImageContainer>
            <IntroSlideText />
        </IntroSlideContainer>
    );
}

export default IntroSlide;