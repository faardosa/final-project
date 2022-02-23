import React from "react"
import './Glutes.css';
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
        <h1>20 Minute Glute Workout</h1>
        <p1>
        We’re in the midst of a glutes renaissance. Thanks to<br /> Instagram, 
        the increased focus on functional fitness, and/or <br />Jennifer Lopez, Women are trying to build stronger,
        <br /> more beautiful Glutes. And with that goal comes the quest <br />for better, more  creative glutes exercises.


        </p1>
      <div className="video">
        <YouTube videoId="wdzeMWI0dl0" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
