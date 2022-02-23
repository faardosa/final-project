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
        If there is one body part that you should not be struggling <br /> to train  at home —  it is the abdominals. 
        Yet the abs are one<br />  of the most  neglected body parts of any training programme.<br /> 
        These bodyweight   ab exercises are great for developing the <br />core muscles and can be  done at home with no equipment <br /> whatsoever.  
        </p1>
      <div className="video">
        <YouTube videoId="AnYl6Nk9GOA" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
