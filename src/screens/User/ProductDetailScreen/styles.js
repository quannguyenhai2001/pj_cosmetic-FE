
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({

    boxDetail: {
        '& *': {

        }
    },

    //rating
    boxRating: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        '& *': {
            marginBottom: '0',
        }

    },
    rootRating: {
        '&.MuiRating-root': {
            color: 'red',
        }
    },
    typoRating1: {
        borderBottom: '1px solid red',
        display: 'inline-block',
        color: 'red',
        marginRight: '2px',
        fontSize: '1.8rem',
    },
    typoRating2: {

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