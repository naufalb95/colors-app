import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import chroma from 'chroma-js';

import './ColorBox.css';

const styles = {
  colorBox: {
    width: '20%',
    height: (props) => (props.isFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: 1,
      transition: '0.3s'
    }
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'rgba(0,0,0,0.5)'
  },
  copyColor: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.5)' : 'white'
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.5)' : 'white',
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
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '30px',
    textDecoration: 'none',
    opacity: 0
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.5)' : 'white',
    display: 'inline-block',
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '60px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '30px',
    fontSize: '1rem'
  },
  boxContent: {
    display: 'inline-block',
    width: '100%',
    bottom: '0',
    left: '0',
    position: 'absolute',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transform: 'scale(0.1)',
    transition: 'transform 0.4s ease-in-out'
  },
  showCopyOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    display: 'flex',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: '0',
    fontSize: '4rem',
    color: 'white',
    transform: 'scale(0.1)',
    '& h1': {
      textTransform: 'uppercase',
      fontWeight: '400',
      textShadow: '1px 2px black',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      padding: '1rem',
      marginBottom: '0'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100'
    }
  },
  showCopyMessage: {
    opacity: '1',
    zIndex: '25',
    transform: 'scale(1)',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const {
      name,
      background,
      moreUrl,
      colorId,
      isFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={classes.colorBox}
          style={{ backgroundColor: background }}
        >
          <div
            className={`${classes.copyOverlay} ${
              copied && classes.showCopyOverlay
            }`}
            style={{ backgroundColor: background }}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showCopyMessage
            }`}
          >
            <h1>copied!</h1>
            <p className={classes.copyColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
            {isFullPalette && (
              <Link
                to={`${moreUrl}/${colorId}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={classes.seeMore}>More</div>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
