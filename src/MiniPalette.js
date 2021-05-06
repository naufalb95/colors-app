import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': { cursor: 'pointer' }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '5px'
  },
  colorBoxes: {
    display: 'inline-block',
    position: 'relative',
    height: '25%',
    width: '20%',
    marginBottom: '-3.5px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: { marginLeft: '0.5rem', fontSize: '1.5rem' }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.colorBoxes}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
