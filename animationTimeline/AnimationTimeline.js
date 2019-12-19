import React, { useState, useEffect, createContext, useContext } from 'react';

export const AnimationTimelineContext = createContext();

export const AnimationProvider = props => {
   const componentDefaults = [
      {
         component: 'LeftSlide',
         paused: true
      },
      {
         component: 'RightSlide',
         paused: true
      },
      {
         component: 'SecondSlide',
         paused: true
      }
   ]
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
      setComponents([
         components.map(comp => {
            if (comp.component !== 'LeftSlide') {
               return {
                  ...comp
               }
            } else {
               return {
                  ...comp,
                  paused: false,
               }
            }
         })
      ]);
      console.log(components)
   }, []);

   return null;
}