import React, { Component } from 'react';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
    this.changeLevelHandler = this.changeLevelHandler.bind(this);
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
  }

  changeLevelHandler(level) {
    this.setState({ level });
  }

  changeFormatHandler(format) {
    this.setState({ format });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        name={color.name}
        background={color[format]}
        key={color.id}
        colorId={color.id}
        moreUrl={`/palette/${id}`}
        isFullPalette
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevelHandler={this.changeLevelHandler}
          changeFormatHandler={this.changeFormatHandler}
          isSingleColor={false}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
