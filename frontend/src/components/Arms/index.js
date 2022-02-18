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
        <h1>Video</h1>
        <p1>get ready to target all those muslces in your arm wit our 10 minute high intense workout</p1>
      <div className="video">
        <YouTube videoId="j64BBgBGNIU" opts={opts} onReady={this._onReady} />
      </div>  
      </div>
    )
  }

}

export default video
