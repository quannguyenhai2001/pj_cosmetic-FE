import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //cart
    cartDrawer: {

        '& .MuiPaper-root': {
            width: '41.7rem'

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
    cartBox: {
        width: '40rem',
    },
    cartCard: {
        display: 'grid'
    },
}));