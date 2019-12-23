import React, { useState, useEffect, createContext, useContext } from 'react';

export const AnimationTimelineContext = createContext();

export const AnimationProvider = props => {
   const componentDefaults = {
      'LeftSlide': {
         paused: true
      },
      'RightSlide': {
         paused: true
      },
   }

   const [components, setComponents] = useState(componentDefaults);

   return (
      <AnimationTimelineContext.Provider value={[components, setComponents]}>
         {props.children}
      </AnimationTimelineContext.Provider>
   )
}

export const AnimationTimeline = () => {
   const [components, setComponents] = useContext(AnimationTimelineContext);

   useEffect(() => {
      animateComponent('LeftSlide', {paused: false }, 0);
      animateComponent('RightSlide', {paused: false }, 1000);
   }, []);

   const animateComponent = (componentToUpdate, newSettings, delay) => {
      setTimeout(() => {
         setComponents({...components, [componentToUpdate]: newSettings});
      }, delay);
   } 

   return null;
}