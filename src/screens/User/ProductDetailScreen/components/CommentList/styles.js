import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    rootList: {
        '&.MuiList-root': {
            position: 'absolute',
            zIndex: 1,
            right: 0,
            padding: 10,
            top: '100%',
            width: 'fit-content',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
        }

    },
    rootListItem: {
        '&.MuiListItem-root': {
            padding: '0px',
            margin: '0px',
            '&:hover': {
                color: "blue",
                cursor: "pointer"
            }
        }
    },
}));