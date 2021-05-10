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

export default styles;
