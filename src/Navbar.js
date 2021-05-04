import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    };
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
  }

  changeFormatHandler(e) {
    this.setState({ format: e.target.value }, () =>
      this.props.changeFormatHandler(this.state.format)
    );
  }

  render() {
    const { level, changeLevelHandler } = this.props;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevelHandler}
            />
          </div>
          <div className="select-container">
            <Select defaultValue="hex" onChange={this.changeFormatHandler}>
              <MenuItem value="hex">HEX - #ffffff</MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
