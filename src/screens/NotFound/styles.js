import { makeStyles } from '@mui/styles';
import logo from 'assets/img/not-found/img-bg/img1.webp';
export default makeStyles((theme) => ({
  box: {
    background: `url(${logo})`,
    height: '100vh',
    width: '100vw',
    backgroundSize: '50%, 50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }


}));