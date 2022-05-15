import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  rootTextField: {
    '&.MuiFormControl-root': {
      marginBottom: '1.2rem',
      '& input': {
        width: '40rem',

      }
    }
  },
  Typo: {
    textAlign: 'end',
    height: 'fit-content',

  },
  rootTypo: {
    '&.MuiTypography-root': {
      margin: '2rem 0',
    }
  },
  rootTyp1: {
    '&.MuiTypography-root': {
      margin: '2rem 0 1.2rem 0',
    }
  },
  //file
  rootAvatar: {
    '&.MuiAvatar-root': {
      display: "grid",
      width: "15rem",
      height: "15rem",
      textAlign: "center",
      placeItems: "center",
    },
  },
  customFileInput: {
    opacity: 0,
    position: 'absolute',
    zIndex: - 1,
  },
  labelFile: {
    cursor: 'pointer',
    border: '1px solid #ccc',
    fontSize: '1.5rem',
    padding: '1rem',
    display: 'inline-block',
    margin: '2rem 0 0 3.5rem',

  }
}));