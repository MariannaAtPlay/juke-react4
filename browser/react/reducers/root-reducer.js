import React from 'react';
impor SET_LYRICS from './constants.js';


// function reducer(prevState, action) {
//   return newState;
// }

const initialState = { text: '' };

export default function reducer(state = initialState, action) {
  
  switch(action.type) {

    case 'SET_LYRICS':
      return Object.assign({}, state, { text: action.lyric });
      break;

    default:
      return state;
  }

}
