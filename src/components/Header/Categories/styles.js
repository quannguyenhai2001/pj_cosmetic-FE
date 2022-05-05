import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    nav: {
        backgroundColor: 'black',
        padding: '15px 25px',
        color: 'white',
        position: 'relative',
        zIndex: 950,
        fontSize: '1.4285714285714286rem',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        }
    },

    //list
    ul: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    primaryCategories: {
        '&:hover': {
            '& $secondaryCategories': {
                visibility: 'visible',
                opacity: 1,
                transform: 'scale(1)',
            },
            '& $overlay': {
                display: 'block',
            }

        }
    },
    secondaryCategories: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white',
        color: 'black',
        right: '0',
        top: '100%',
        padding: 20,
        width: '100%',
        visibility: 'hidden',
        opacity: 0,
        transition: 'all 0.3s',
        transformOrigin: 'top center',
        transform: 'scale(0.2)',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '-15px',
            width: '100%',
            height: '20px',
            borderTop: '10px solid transparent',
        },
        // '&:before': {
        //     content: '""',
        //     borderStyle: 'solid',
        //     borderWidth: '10px 15px 10px 0',
        //     borderColor: 'transparent #dd4397 transparent transparent',
        //     position: 'absolute',
        //     left: '-15px'
        // }
    },
    isOff: {
        display: 'none'
    },
    //overlay
    overlay: {
        content: '""',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        display: 'none',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 900,
        '&:hover': {
            display: 'none',
        }
    },

    //item
    boxEachChildCate: {
        position: 'relative',
        width: 'fit-content',
    },
    eachChildCate: {
        '&:before': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#1976d2',
            transformOrigin: 'bottom right',
            transform: 'scaleX(0)',
            transition: 'transform 0.5s ease',
        },
        '&:hover': {
            '&:before': {
                transformOrigin: 'bottom left',
                transform: 'scaleX(1)'
            }
        }
    }
}));