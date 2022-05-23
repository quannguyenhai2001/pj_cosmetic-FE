import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //cart
    cartDrawer: {
        '& .MuiDrawer-paper': {
            width: '41.7rem',
            height: '100vh',
            paddingRight: '6rem',
            paddingBottom: '5rem',
        },
        '& .MuiPaper-root': {
            overflowX: 'hidden',

        }
    },
    cartDivButton: {
        position: "fixed",
        bottom: 0,
        right: 0,
        textAlign: "center",
        zIndex: "3000",
        transition: "all 0.3s ease-in-out",
        width: '41.7rem',


    },
    cartButtonOrder: {
        height: 50,
        borderRadius: 0
    },
    rootCartContent: {

        '& .MuiCardContent-root': {
            '&:last-child': {
                paddingBottom: 0
            }
        },
        padding: '2.4rem 1rem',
    },
    cartBox: {
        minWidth: '41.7rem',

    },
    cartCard: {
        display: 'grid',
        height: '11rem',
        marginBottom: '0.5rem',
        overflowY: 'hidden',
    },
}));