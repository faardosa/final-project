import React from "react"
import './Arms.css';
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
        <h1 class title="title">10 Minute Toned Arms Workout</h1>
        <p1>
        While many upper-body exercises involve equipment like <br /> dumbbells and barbells, arm exercises without weights are <br /> a solid  way to put your muscles to the test, too. After all, <br /> the weight of your body is equipment in its own right—<br /> you can use it to load your arm muscles and make 'em work. <br />There's no heavy lifting  required.
        </p1>
      <div className="video">
        <YouTube videoId="j64BBgBGNIU" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }
}

export default video;
