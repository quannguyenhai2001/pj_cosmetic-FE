import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

    rootAppBarTop: {
        '&.MuiPaper-root': {
            backgroundColor: '#fff',
            borderBottom: '0.1px solid #e0e0e0',

        },
        '&.MuiAppBar-root': {
            color: 'black'
        }
    },
    rootToolBar: {
        '&.MuiToolbar-root': {
            height: '60px',
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
    searchInput: {
        [`& fieldset`]: {
            borderRadius: '50px',
        },
        '& input': {
            height: '6px',
        },
        flex: "1",
        overflow: "hidden",
        borderRadius: '50px',
    },
}));