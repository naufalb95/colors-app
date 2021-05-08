import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingeColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
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

  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        name={color.name}
        colorId={color.id}
        key={color.name}
        background={color.rgb}
        showMore={false}
      />
    ));

    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingeColorPalette;
