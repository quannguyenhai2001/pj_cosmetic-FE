import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import * as Yup from 'yup';
import useStyles from './styles'
import { Field, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField/InputField';

import { useDispatch } from 'react-redux';
import { fetchAsyncSignIn } from 'slices/UserSlice';
import { Link, useNavigate } from 'react-router-dom';

const SignInUserScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')

    // const changeErrorEmail = (e) => {
    //     setErrorEmail('')
    // }


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        console.log("click")
    }

    const initialValues = {
        email: '',
        password: '',

    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email!')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Only alphabets are allowed for this field ")
            .required('This field is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .max(15, 'Password must be at most 15 characters')
            .required('This field is required'),
    })

    const onSubmit = (values) => {
        dispatch(fetchAsyncSignIn(values)).unwrap().then(() => {
            navigate('/')
        }).catch(err => {
            setErrorEmail(err.message)
        })
    }

    return (
        <Container maxWidth="xl" className={classes.container}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={6} className={classes.sideRight}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formikProps => {
                            // const { values, errors, touched, isSubmitting } = formikProps

                            return (
                                <Form className={classes.formSignIn}>
                                    <Container sx={{ width: '35rem' }}>
                                        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                                            SIGN IN
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Field
                                                name="email"
                                                component={InputField}
                                                label="Email"
                                                type="email"
                                            // errorEmail={errorEmail}
                                            // changeErrorEmail={changeErrorEmail}
                                            />

                                            <Field
                                                name="password"
                                                component={InputField}
                                                label="Password"
                                                type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}
                                            />
                                        </Grid>
                                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                            Submit
                                        </Button>
                                    </Container>
                                </Form>
                            )
                        }}
                    </Formik >
                </Grid>

                <Grid item xs={6} className={classes.sideRight}>
                    <Typography sx={{ display: 'inline-block' }}>
                        Do not have an account?
                    </Typography>
                    <Typography component={Link} to='/sign-up' sx={{ display: 'inline-block' }}>
                        Sign Up
                    </Typography>
                </Grid>
            </Grid>
        </Container >
    );
};

export default SignInUserScreen;





