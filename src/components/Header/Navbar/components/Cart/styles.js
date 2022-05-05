import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //cart
    cartDrawer: {
        '& .MuiDrawer-paper': {
            width: '41.7rem',
            height: 'calc(100vh - 50px)',
            paddingRight: '6rem',
        },
        '& .MuiPaper-root': {
            overflowX: 'hidden',
            overflowY: 'auto',
        }
    },
    cartDivButton: {
        position: "fixed",
        bottom: 0,
        right: 0,
        textAlign: "center",
        zIndex: "3000",
        width: '41.7rem',
        '& $cartButtonOrder': {
            height: 50,
        }

    },
    cartButtonOrder: {

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
        display: 'grid'
    },
}));