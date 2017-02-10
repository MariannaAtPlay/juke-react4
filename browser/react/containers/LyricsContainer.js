import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
//import setLyrics from './action-creators/lyrics';

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe  = store.subscribe(function(){
        this.setState(store.getState());
    });
  }

  componentWillUnmount () {
      this.unsubscribe();
  }

  render () {
      return (
          <Lyrics />
      );
  }

}

export default LyricsContainer;