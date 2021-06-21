import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import './Navbar.css';

const styles = {
  Navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '6vh'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    height: '100%',
    background: '#eceff1',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  slider: {
    width: '340px',
    display: 'inline-block',
    margin: '0 10px',
    '& .rc-slider-rail ': {
      height: '8px'
    },

    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },

    '& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:hover, .rc-slider-handle:active':
      {
        backgroundColor: 'green',
        outline: 'none',
        border: '2px solid green',
        width: '13px',
        height: '13px',
        marginLeft: '-7px',
        marginTop: '-3px',
        boxShadow: 'none'
      }
  },
  selectContainer: {
    margin: '0 1rem 0 auto'
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    };
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
    this.closeSnackbarHandler = this.closeSnackbarHandler.bind(this);
  }

  changeFormatHandler(e) {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.changeFormatHandler(this.state.format)
    );
  }

  closeSnackbarHandler() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevelHandler, isSingleColor, classes } = this.props;
    const { format } = this.state;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {isSingleColor || (
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevelHandler}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select defaultValue="hex" onChange={this.changeFormatHandler}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={this.closeSnackbarHandler}
          action={[
            <IconButton
              onClick={this.closeSnackbarHandler}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
