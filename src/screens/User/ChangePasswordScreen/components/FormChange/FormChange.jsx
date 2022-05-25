import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetUser, fetchAsyncUpdateUser } from 'slices/UserSlice';
import { Toast } from 'utils/Toast';
import useStyles from './styles';


const FormInfor = () => {
    const classes = useStyles();
    const userDetail = useSelector(state => state.user.userDetail);
    const dispatch = useDispatch();
    const [valueArray, setValueArray] = React.useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setValueArray({ ...valueArray, [event.target.name]: event.target.value });
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        if (valueArray.password !== valueArray.confirmPassword) {
            alert('Password and Confirm Password is not match');
        } else {
            let data = new FormData();
            data.append("password", valueArray.password);
            dispatch(fetchAsyncUpdateUser(data)).unwrap().then(() => {

                dispatch(fetchAsyncGetUser())
                Toast('success', 'Update user success!');

            }).catch(err => {
                console.log(err)
            })
        }
    }
    return (
        <Box sx={{ padding: '2rem 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Box className={classes.Typo}>
                        <Typography className={classes.rootTypo}>New password:</Typography>
                        <Typography className={classes.rootTypo}>Confirm password:</Typography>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <TextField onChange={handleChange} type="password" className={classes.rootTextField} name="password" variant="outlined" size="small" value={valueArray.password} />
                    <TextField onChange={handleChange} type="password" className={classes.rootTextField} name="confirmPassword" variant="outlined" size="small" value={valueArray.confirmPassword} />
                    <Button onClick={handleConfirm} variant="contained">Confirm</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FormInfor;