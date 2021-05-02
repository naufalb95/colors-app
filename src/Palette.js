import React, { Component } from 'react';

import Navbar from './Navbar';
import ColorBox from './ColorBox';

import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevelHandler = this.changeLevelHandler.bind(this);
  }

  changeLevelHandler(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox name={color.name} background={color.hex} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevelHandler={this.changeLevelHandler} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
