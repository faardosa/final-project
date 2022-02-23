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
        <h1 className="back">15 Minute Toned Back Workout</h1>
        <p1>

If you are working out from home (or anywhere but a gym) <br />and you  have no equipment,
 you are probably struggling to <br />come up with bodyweight exercises that target your back<br />  muscles.
 So, if you  think you need to buy some free weights<br /> to  target your back muscles properly, think again…<br />
 You absolutely can  target your back muscles and get a great<br /> back workout in without  equipment, and even, without <br /> a pull bar.
        </p1>
      <div className="video">
        <YouTube videoId="o062bxRT1EA" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
