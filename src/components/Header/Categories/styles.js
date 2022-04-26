import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    nav: {
        backgroundColor: 'black',
        padding: '15px 25px',
        color: 'white',
        position: 'relative',
        fontSize: '1.4285714285714286rem',
        cursor: 'pointer',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        }
    },

    ul: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    primaryCategories: {
        '&:hover': {
            '& $secondaryCategories': {
                display: 'block',

            }
        }
    },
    secondaryCategories: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white',
        display: 'none',
        color: 'black',
        right: '0',
        top: '100%',
        width: '100%',
        padding: 20,
        borderBottom: '1px solid gray',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '-15px',
            width: '1400px',
            height: '30px',
            borderTop: '10px solid transparent',
        },
    }

}));