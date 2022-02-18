import React from "react"
import './Abs.css';
import YouTube from 'react-youtube';



  class video extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div>
        <h1>10 Minute Abs Workout</h1>
        <p1>
        If there is one body part that you should not be struggling to train <br />  at home —  it is the abdominals. 
        Yet the abs are one of the most <br />  neglected body parts of any training programme.
        These bodyweight <br />  ab exercises are great for developing the core muscles and can be <br />  done at home with no equipment whatsoever.  
        </p1>
      <div className="video">
        <YouTube videoId="AnYl6Nk9GOA" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
