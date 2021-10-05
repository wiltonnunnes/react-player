import React from 'react';
import IconButton from './IconButton';
import { mdiPlay, mdiPause, mdiVolumeHigh } from '@mdi/js';
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
      duration: 0,
      volume: 0,
      currentTimePercentage: 0,
      muted: true
    };
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handleInputRangeChange = this.handleInputRangeChange.bind(this);
    this.inputRangeRef = React.createRef();
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
    this.setState({currentTimePercentage: Math.round((this.videoRef.current.currentTime / this.videoRef.current.duration) * 100)});
  }

  handleInputRangeChange(event) {
    this.videoRef.current.volume = event.target.value / 100;
  }

  componentDidMount() {
    this.videoRef.current.value = this.inputRangeRef.current.value / 100;
  }

  render() {
    return (
      <div 
        style={{
          width: this.props.width,
          height: this.props.height,
          position: 'relative',
          backgroundColor: 'yellow'
        }}
      >
        <video 
          width="100%" 
          height="100%" 
          src={this.props.url} 
          ref={this.videoRef} 
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div className={styles.controls}>
          <VideoSlider 
            currentTimePercentage={this.state.currentTimePercentage}
          />
          <div className={styles.controlsBottom}>
            <button 
              className={styles.iconButton} 
              onClick={this.playPause}
            >
              <svg className={styles.icon}>
                <path 
                  d={this.state.isPlaying ? mdiPause : mdiPlay} 
                  fill="white"
                />
              </svg>
            </button>
            <button 
              className={styles.iconButton}
            >
              <svg className={styles.icon}>
                <path 
                  d={mdiVolumeHigh} 
                  fill="white"
                />
              </svg>
            </button>
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="1" 
              className={styles.slider} 
              onChange={this.handleInputRangeChange} 
              ref={this.inputRangeRef}
            />
            <div className="progress-bar">
              {this.props.duration > 0 && <VideoSlider 
                currentTime={this.state.currentTime}
              />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;