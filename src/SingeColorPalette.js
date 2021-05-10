import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import './ColorBox.css';

const styles = {
  Palette: { height: '100vh', display: 'flex', flexDirection: 'column' },
  colors: { height: '90%' },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    backgroundColor: 'black',
    '& a': {
      display: 'inline-block',
      position: 'absolute',
      height: '30px',
      width: '100px',
      top: '50%',
      left: '50%',
      marginTop: '-15px',
      marginLeft: '-50px',
      outline: 'none',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      color: 'white',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: '30px',
      textDecoration: 'none'
    }
  }
};

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
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        name={color.name}
        colorId={color.id}
        key={color.name}
        background={color[format]}
        isFullPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar changeFormatHandler={this.changeFormatHandler} isSingleColor />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>

        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingeColorPalette);
