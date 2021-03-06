import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.nav}>
              <h1>React Colors</h1>
              <Link to="/palette/new">Create Palette</Link>
            </div>
            <div className={classes.palettes}>
              {palettes.map((palette) => (
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
