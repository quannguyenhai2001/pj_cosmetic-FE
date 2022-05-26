import { Avatar, Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAsyncGetUser, fetchAsyncUpdateUser } from 'slices/UserSlice';
import useStyles from './styles';
import StringAvatar from 'utils/StringAvatar';
import { Toast } from 'utils/Toast';

const FormInfor = () => {
    const classes = useStyles();
    const userDetail = useSelector(state => state.user.userDetail);
    const dispatch = useDispatch();
    const [valueArray, setValueArray] = React.useState('');

    //set value array
    React.useEffect(() => {
        if (userDetail) {
            setValueArray(
                {
                    displayName: userDetail.displayName,
                    address: userDetail.address,
                    sex: userDetail.sex,
                    age: parseInt(userDetail.age),
                    avatar: userDetail.avatar
                }
            )
            console.log({ userDetail })
        }
    }, [userDetail]);

    const [base64, setBase64] = React.useState(userDetail.avatar);
    const changeHandle = (e) => {
        function getBase64(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setBase64(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
        setValueArray({ ...valueArray, [e.target.name]: e.target.files[0] });
        getBase64(e.target.files[0]); // prints the base64 string

    }

    const handleChange = (event) => {
        setValueArray({ ...valueArray, [event.target.name]: event.target.value });

    };

    const handleSubmit = (e) => {
        console.log(valueArray);
        let data = new FormData();
        data.append("avatar", valueArray.avatar);
        data.append("displayName", valueArray.displayName);
        data.append("sex", valueArray.sex);
        data.append("age", valueArray.age);
        data.append("address", valueArray.address);
        dispatch(fetchAsyncUpdateUser(data)).unwrap().then(() => {
            dispatch(fetchAsyncGetUser())
            Toast('success', 'Update user success!');
        }).catch(err => {
            console.log(err)
        })

    }
    const image = userDetail.avatar ? <Avatar className={classes.rootAvatar} src={userDetail.avatar} /> : <Avatar className={classes.rootAvatar} {...StringAvatar(userDetail.displayName)} />;
    // console.log(valueArray)
    return (
        <>
            {
                userDetail && valueArray ?
                    (<Box sx={{ padding: '2rem 0' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Box className={classes.Typo}>
                                    <Typography className={classes.rootTypo}>User name:</Typography>
                                    <Typography className={classes.rootTypo} >Display name:</Typography>
                                    <Typography className={classes.rootTypo}>Email:</Typography>
                                    <Typography className={classes.rootTypo}>Phone:</Typography>
                                    <Typography className={classes.rootTypo}>Sex:</Typography>
                                    <Typography className={classes.rootTypo}>Age:</Typography>
                                    <Typography className={classes.rootTypo}>Address:</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.rootTyp1}>{userDetail.userName}</Typography>
                                <TextField onChange={handleChange} value={valueArray.displayName} name="displayName" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />
                                <Typography >{userDetail.email}</Typography>
                                <Typography className={classes.rootTyp1}>{userDetail.phoneNumber}</Typography>
                                <FormControl>
                                    <RadioGroup className={classes.rootRadio}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={valueArray.sex}
                                        onChange={handleChange}
                                        name="sex"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="female" />
                                        <FormControlLabel value="male" control={<Radio />} label="male" />
                                    </RadioGroup>
                                </FormControl>

                                {/* age */}
                                <TextField
                                    id="outlined-number"
                                    className={classes.rootTextField1}
                                    type="number"
                                    size="small"
                                    onChange={handleChange}
                                    value={valueArray.age}
                                    name="age"
                                />

                                {/* address */}
                                <TextField onChange={handleChange} value={valueArray.address} name="address" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />

                                {/* button */}
                                <Button variant="contained" onClick={handleSubmit}>Save</Button>
                            </Grid>

                            {/* divide */}
                            <Grid item xs={1}>
                                <Box sx={{
                                    height: '100%',
                                    width: '1px',
                                    backgroundColor: '#f5f5f5',
                                }}></Box>
                            </Grid>
                            <Grid item xs={3}>
                                {base64 ? (
                                    <Avatar className={classes.rootAvatar} src={base64} />
                                ) : (
                                    <>
                                        {image}
                                    </>
                                )}
                                <label className={classes.labelFile} htmlFor="upload-photo">Select file</label>
                                <input type="file" className={classes.customFileInput} onChange={changeHandle} name="avatar" id="upload-photo" />
                            </Grid>
                        </Grid>
                    </Box>) :
                    null
            }
        </>
    );
};

export default FormInfor;