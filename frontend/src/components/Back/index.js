import React from "react"
import './Back.css';
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
        <h1>15 Minute Toned Back Workout</h1>
        <p1>

If you are working out from home (or anywhere but a gym) and<br /> you  have no equipment,
 you are probably struggling to come up <br />with bodyweight exercises that target your back<br />  muscles.
 So, if you  think you need to buy some free weights to <br /> target your back muscles properly, think again…
 You absolutely<br /> can  target your back muscles and get a great back workout in <br />without  equipment, and even, without a pull bar.
        </p1>
      <div className="video">
        <YouTube videoId="o062bxRT1EA" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
