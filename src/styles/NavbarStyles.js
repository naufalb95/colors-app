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

export default styles;
