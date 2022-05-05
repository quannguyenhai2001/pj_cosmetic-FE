import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    boxFeedback: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: '#cccccc',
    },
    boxFooter: {
        backgroundColor: 'black',
        color: 'white',
    }


}));