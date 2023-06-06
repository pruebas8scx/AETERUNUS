import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';



class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: props.videoUrl,
      playing: false,
      muted: true,
      volume: 0.5,
      duration: 0,
      currentTime: 0
    };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      duration: this.videoRef.current.duration
    });
  }

  togglePlay = () => {
    const video = this.videoRef.current;
    if (this.state.playing) {
      video.pause();
    } else {
      video.play();
    }
    this.setState({
      playing: !this.state.playing
    });
  };

  toggleMute = () => {
    this.setState({
      muted: !this.state.muted
    });
  };

  setVolume = (value) => {
    this.setState({
      volume: value / 100
    });
  };

  handleTimeUpdate = () => {
    const video = this.videoRef.current;
    this.setState({
      currentTime: video.currentTime
    });
  };

  handleSeek = (event) => {
    const video = this.videoRef.current;
    const percent = event.nativeEvent.offsetX / event.target.offsetWidth;
    video.currentTime = percent * this.state.duration;
    this.setState({
      currentTime: video.currentTime
    });
  };

  render() {
    const { videoUrl, playing, muted, volume, duration, currentTime } = this.state;
    return (
      <Container>
        <video
          ref={this.videoRef}
          src={x}
          muted={muted}
          volume={volume}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" onClick={this.togglePlay}>
            {playing ? 'Pause' : 'Play'}
          </Button>
          <div className="d-flex align-items-center">
            <Button variant="secondary" onClick={this.toggleMute}>
              {muted ? 'Unmute' : 'Mute'}
            </Button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={(event) => this.setVolume(event.target.value)}
            />
          </div>
        </div>
        <div className="progress" onClick={this.handleSeek}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </Container>
    );
  }
}

export default VideoPlayer;
