import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    height: "55rem",
    backgroundImage: 'linear-gradient(315deg, #7cffcb 0%, #74f2ce 20%)',


  },

  gridContainer: {
    height: "inherit",
  },
  formSignIn: {
    // marginTop: '4rem'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  eachSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //side left
  typoTitleRight: {
    textAlign: 'center',
    marginBottom: '2rem',
    backgroundImage: 'linear-gradient(to right bottom,rgb(25,118,210), rgba(33, 222, 232, 0.8))',
    color: 'transparent',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  },

  //side right
  avatar: {
    '&.MuiAvatar-root': {
      width: '10rem',
      height: '10rem',
      borderRadius: '50%',
      background: 'white',
      margin: '2rem 0',
      '& img': {
        objectFit: 'contain'
      }
    }


  },
  sideRight: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  }





}));