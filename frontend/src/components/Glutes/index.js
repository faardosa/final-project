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
        <h1 className="glutes">20 Minute Glute Workout</h1>
        <p1>
        We’re in the midst of a glutes renaissance. Thanks to Instagram, <br />
        the increased focus on functional fitness, and/or Jennifer Lopez,<br /> Women are trying to build stronger,
         more beautiful <br />Glutes. And with that goal comes the quest for better, more <br /> creative glutes exercises.


        </p1>
      <div className="video">
        <YouTube videoId="wdzeMWI0dl0" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
