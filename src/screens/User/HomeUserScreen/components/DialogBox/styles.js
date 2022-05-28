import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    rootBox: {
        position: 'relative',
        padding: "2rem",
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
    },
    iconX: {
        position: 'absolute',
        top: 2,
        right: 2,
        cursor: 'pointer',
    },
    boxTypo: {
        textAlign: 'left',
        margin: '1rem 0',
        '& .MuiTypography-root': {
            fontSize: '1.2rem',
        }
    },
    rootButton: {
        '&.MuiButton-root': {
            borderRadius: '30rem',
            backgroundColor: 'red',
            margin: '1rem',
        }
    },

    boxTypoBottom: {
        '& .MuiTypography-root': {
            fontSize: '1.2rem',
        }
    }
}));