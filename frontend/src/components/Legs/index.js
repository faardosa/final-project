import React from "react"
import './Legs.css';
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
        <h1 className="legs">15 Minute Leg Workout</h1>
        <p1>
        When the gym’s not an option, don’t let lack of equipment <br />or  
        space deter you from getting a great leg workout. Keeping <br /> your
        leg muscles strong is key to getting from point A to point<br /> B and
         busting out those killer dance moves you’ve been <br />showing off 
         at Club Quarantine. </p1>
      <div className="video">
        <YouTube videoId="HVyt7ywsOQ8" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
