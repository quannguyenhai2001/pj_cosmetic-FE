import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  form: {
    // background: 'url("https://c8.alamy.com/comp/T5KEG1/flat-lay-makeup-background-frame-of-professional-cosmetic-products-and-accessories-on-white-table-top-view-T5KEG1.jpg") no-repeat center center fixed',
    // height: '100rem',
    // // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // // backgroundPosition: 'center',
  },
  rootGridContainer: {
    // '&.MuiContainer-root': {
    //   padding: '6rem 0',

    // }
  },
  paper: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));