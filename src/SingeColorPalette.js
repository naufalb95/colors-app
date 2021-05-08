import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingeColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormatHandler(format) {
    this.setState({ format });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        name={color.name}
        colorId={color.id}
        key={color.name}
        background={color[format]}
        showMore={false}
      />
    ));

    return (
      <div className="Palette">
        <Navbar changeFormatHandler={this.changeFormatHandler} isSingleColor />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingeColorPalette;
