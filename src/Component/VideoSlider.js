import React from 'react';
import PropTypes from 'prop-types';
import MultiProgress from './MultiProgress';
import styles from './VideoSlider.module.css';

class VideoSlider extends React.Component {

  static propTypes = {
    max: PropTypes.number.isRequired,
    currentTimePercentage: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="1" 
          className={styles.inputRange}
        />
        <MultiProgress 
          backgroundColor="#525865" 
          elements={[
            {
              value: this.props.currentTimePercentage,
              color: '#fe0000'
            }
          ]}
        />
      </div>
    );
  }
};

export default VideoSlider;