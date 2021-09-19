import React from 'react';
import IconButton from './IconButton';
import { mdiPlay, mdiPause } from '@mdi/js';
import VideoSlider from './VideoSlider';
import styles from "./Player.module.css";

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.playPause = this.playPause.bind(this);
    this.state = {
      isPlaying: false,
      currentTime: 0,
      duration: 0
    };
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  playPause() {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.videoRef.current.pause();
    } else {
      this.videoRef.current.play();
    }

    this.setState({ isPlaying: !isPlaying });
  }

  handleTimeUpdate() {
    this.setState({currentTime: this.videoRef.current.currentTime});
  }

  render() {
    return (
      <div 
        width={this.props.width} 
        height={this.props.height}
      >
        <video 
          width="100%" 
          height="100%" 
          src={this.props.url} 
          ref={this.videoRef} 
          onTimeUpdate={this.handleTimeUpdate} 
          onLoadedMetadata={(event) => {
            this.setState({duration: event.duration});
          }}
        />
        <div className={styles.controls}>
          <IconButton 
            icon={this.state.isPlaying ? mdiPause : mdiPlay} 
            style={{
              backgroundColor: '#2c2f33'
            }} 
            onClick={this.playPause}
          />
          <div className="progress-bar">
            {this.props.duration > 0 && <VideoSlider 
              currentTime={this.state.currentTime}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default Player;