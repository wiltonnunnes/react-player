import React from 'react';
import PropTypes from 'prop-types';
import MultiProgress from './MultiProgress';

class VideoSlider extends React.Component {

  static propTypes = {
    max: PropTypes.number.isRequired,
    currentTime: PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <MultiProgress 
          backgroundColor="#525865" 
          elements={[
            {
              value: Math.round((this.props.currentTime / this.props.max) * 100),
              color: '#fe0000'
            }
          ]}
        />
      </div>
    );
  }
};

export default VideoSlider;