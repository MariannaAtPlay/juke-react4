import { SET_LYRICS } from '../constants.js';

const setLyrics = (text) => {

  return {
    type: SET_LYRICS,
    lyric: text
  };

};

export default setLyrics;