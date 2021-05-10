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

export default styles;
