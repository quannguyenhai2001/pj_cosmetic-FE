
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({

    boxDetail: {
        '& *': {
            marginBottom: '1.3rem'
        }
    },
    boxRating: {
        '& *': {
            marginBottom: '0',
        }

    },
    rootRating: {
        '&.MuiRating-root': {
            color: 'red',
        }
    },
    typoRating: {
        borderBottom: '1px solid red',
        display: 'inline-block',
        color: 'red',
        marginRight: '2px',
        fontSize: '1.8rem',
    },



    //side right
    paper: {
        padding: theme.spacing(1),
    }
}));