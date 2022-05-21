import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    box: {
        margin: '3rem 0',
        position: 'relative',
    },

    rootAvatar: {
        '&.MuiAvatar-root': {
            marginRight: '8px',
        }
    },


    boxButtonComment: {
        textAlign: 'end',
        marginRight: '6rem',
    },

    displayNone: {
        display: 'none'
    }
}));