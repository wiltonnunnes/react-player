import React from 'react';
import PropTypes from 'prop-types';

class MultiProgress extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.number,
    elements: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      color: PropTypes.string
    })).isRequired
  };

  static defaultProps = {
    backgroundColor: 'blue',
    height: 10
  };

  render() {
    const height = this.props.height;

    const styles = {
      backgroundColor: this.props.backgroundColor,
      width: '100%',
      height: height
    };

    return (
      <div style={styles}>
        {this.props.elements.map((element, i) => (
          <div 
            key={i} 
            style={{
              backgroundColor: element.color,
              width: `${element.value}%`,
              height: height,
              position: 'absolute'
            }}
          />
        ))}
      </div>
    );
  }
}

export default MultiProgress;