import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    rootCard: {
        '&.MuiPaper-root': {
            height: 340,
            position: 'relative',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.02)',
                transition: '0.3s',
                // '&::before': {
                //     content: '"View"',
                //     position: 'absolute',
                //     zIndex: 234343323232,
                //     top: '50%',
                //     left: '50%',
                //     transform: '-50% -50%',
                //     width: '100px',
                //     height: '100px',
                //     backgroundColor: 'rgba(0,0,0,0.5)',
                // },
            },

            // '&.MuiPaper-root:before': {
            //     display: 'none',
            // },
        },

    },

    rootCardMedia: {
        '&.MuiCardMedia-root': {
            transition: '0.3s',



        },
    },
    sale: {
        position: 'absolute',
        top: 0,
        right: 0,
        background: '#ff0000',
        color: '#fff',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
    },

    //pagination
    stackPagination: {
        alignItems: 'center',
    }
}));