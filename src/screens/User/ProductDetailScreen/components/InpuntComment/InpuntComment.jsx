import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { useParams } from 'react-router-dom';
import { fetchAsyncCreateComment, fetchAsyncGetListCommentByProduct } from 'slices/ProductSlice';
import StringAvatar from 'utils/StringAvatar';

const InpuntComment = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user.userDetail)
    const [isCheckComment1, setIsCheckComment1] = React.useState('');
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;

    React.useEffect(() => {
        if (user) {
            setIsCheckComment1(user.displayName)
        }
    }, [user])
    const [isCheckComment, setIsCheckComment] = React.useState(false);
    const [isDisable, setIsDisable] = React.useState(true);
    const [comment, setComment] = React.useState('');

    const handleComment = () => {
        setIsCheckComment(false);
        dispatch(fetchAsyncCreateComment({
            id: id,
            comment: comment,
        })).unwrap().then(() => {
            dispatch(fetchAsyncGetListCommentByProduct({ id }))
            setComment('')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Box className={classes.box}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '4rem' }}>
                Review Product
            </Typography>
            <Grid container>
                <Grid item>
                    <Box>
                        {user.avatar ? (
                            <Avatar className={classes.rootAvatar} src={user.avatar} />
                        ) : (
                            <Avatar className={classes.rootAvatar} {...StringAvatar('A U')} />
                        )}
                    </Box>
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        onChange={(e) => {
                            setComment(e.target.value)
                            if (e.target.value.length === 0) {
                                setIsDisable(true)
                            }
                            else {
                                setIsDisable(false)
                            }
                        }}
                        value={comment}
                        variant="standard"
                        placeholder='Write a comment...'
                        fullWidth
                        onClick={() => setIsCheckComment(true)}
                    />
                </Grid>
            </Grid>
            <Box className={isCheckComment ? classes.boxButtonComment : classes.displayNone}>
                <Button sx={{ marginRight: 2 }} onClick={() => setIsCheckComment(false)} variant="outlined">Cancel</Button>
                <Button disabled={isDisable} onClick={handleComment} variant="contained">Comment</Button>
            </Box>
        </Box>
    );
};

export default memo(InpuntComment);
