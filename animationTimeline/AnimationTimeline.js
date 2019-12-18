import { createStore, dispatch } from 'redux';

//actions
const animateComponent = component => ({
   component,
   paused: false,
});

const pauseComponent = component => ({
   component,
   paused: true,
});

const initialState = [
   {
      component: 'comp',
      paused: true
   }
]

const reducer = (state = initialState, action) => {
   const { component, paused, type } = action;
   switch (type) {
      case 'PLAY':
         return [
            ...state,
            {
               component,
               paused: false,
            }
         ];
      case 'PAUSE':
         return [
            ...state,
            {
               component,
               paused: true
            }
         ];
      default:
         return state;
   }
}

export const store = createStore(reducer);

// const AnimationTimeline = (argumemnts) => {
//    const { argumemnts } = componentsToAnimate;
// }
