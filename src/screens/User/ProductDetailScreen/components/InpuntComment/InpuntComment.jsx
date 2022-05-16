import { Avatar, Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

//create circle avatar
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: '40px',
            height: '40px',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const InpuntComment = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user.userDetail)



    const [isCheckComment, setIsCheckComment] = React.useState(false);
    const [comment, setComment] = React.useState('');

    const handleComment = () => {
        setIsCheckComment(false);

    }

    return (
        <Box className={classes.box}>
            <Grid container>
                <Grid item>
                    <Box>
                        {user.avatar ? (
                            <Avatar className={classes.rootAvatar} src={user.avatar} />
                        ) : (
                            <Avatar className={classes.rootAvatar} />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    <TextField

                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        variant="standard"
                        fullWidth
                        onClick={() => setIsCheckComment(true)}
                    />
                </Grid>
            </Grid>
            <Box className={isCheckComment ? classes.boxButtonComment : classes.displayNone}>
                <Button sx={{ marginRight: 2 }} onClick={() => setIsCheckComment(false)} variant="outlined">Cancel</Button>
                <Button onClick={handleComment} variant="contained">Comment</Button>
            </Box>
        </Box>
    );
};

export default InpuntComment;
