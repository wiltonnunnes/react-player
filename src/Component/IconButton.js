import React from 'react';
import Icon from '@mdi/react';
import { mdiPlay } from '@mdi/js';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button 
        className="btn" 
        style={this.props.style} 
        onClick={this.props.onClick}
      >
        <Icon 
          path={this.props.icon} 
          size={1} 
          color="white"
        />
      </button>
    );
  }
}

export default IconButton;