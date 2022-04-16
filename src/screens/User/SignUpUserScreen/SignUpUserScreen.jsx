import { Avatar, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react';
import * as Yup from 'yup';
import useStyles from './styles'
import { FastField, Field, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField/InputField';
import CheckBoxField from 'custom-fields/CheckBoxField/CheckBoxField';
import { useDispatch } from 'react-redux';
import { fetchAsyncSignUp } from 'slices/UserSlice';
import SelectField from 'custom-fields/SelectField/SelectField';
import { useNavigate } from 'react-router-dom';

const SignUpUserScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')

    const changeErrorEmail = (e) => {
        setErrorEmail('')
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        console.log("click")
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        sex: '',
        phoneNumber: '',
        address: '',
        age: ''
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        userName: Yup.string()
            .min(5, 'User name must be at least 5 characters')
            .max(15, 'User name must be at most 15 characters')
            .required('This field is required'),
        email: Yup.string()
            .email('Invalid email!')
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Only alphabets are allowed for this field ")
            .required('This field is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .max(15, 'Password must be at most 15 characters')
            .required('This field is required'),
        confirmPassword: Yup.string()
            .oneOf(
                [Yup.ref('password'), null],
                "Password doesn't  match"
            )
            .required('This field is required'),
        sex: Yup.string().required('This field is required'),
        phoneNumber: Yup.string().required('This field is required'),
        address: Yup.string().required('This field is required'),
        age: Yup.number().required('This field is required'),
    })


    const onSubmit = (values) => {
        let objValues = { ...values }
        delete objValues['firstName']
        delete objValues['lastName']
        const displayName = `${values.firstName} ${values.lastName}`
        const userData = {
            displayName,
            userType: 'user',
            ...objValues
        }
        dispatch(fetchAsyncSignUp(userData)).unwrap().then(() => {
            navigate('/sign-in')
        }).catch(err => {
            setErrorEmail(err.message)
        })
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formikProps => {
                // const { values, errors, touched, isSubmitting } = formikProps
                // console.log({ touched, errors })
                return (
                    <Form className={classes.form}>
                        <Container maxWidth="xs" className={classes.rootGridContainer}>
                            <Paper elevation={3} className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                </Avatar>
                                <Typography variant="h5">
                                    SIGN UP
                                </Typography>
                                <Grid container spacing={2}>
                                    <FastField
                                        name="firstName"
                                        component={InputField}
                                        label="First Name"
                                        half
                                        type="text"
                                    />
                                    <FastField
                                        name="lastName"
                                        component={InputField}
                                        label="Last Name"
                                        half
                                        type="text"
                                    />
                                    <FastField
                                        name="userName"
                                        component={InputField}
                                        label="User Name"
                                        type="text"
                                    />
                                    <Field
                                        name="email"
                                        component={InputField}
                                        label="Email"
                                        type="email"
                                        errorEmail={errorEmail}
                                        changeErrorEmail={changeErrorEmail}
                                    />

                                    <Field
                                        name="password"
                                        component={InputField}
                                        label="Password"
                                        type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}
                                    />
                                    <Field
                                        name="confirmPassword"
                                        component={InputField}
                                        label="Comfirm Password"
                                        type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}
                                    />

                                    <Grid item xs={12} sm={12}>
                                        <Grid container>
                                            <FastField
                                                name="age"
                                                component={SelectField}
                                                label="Age"
                                                half
                                            />
                                            <FastField
                                                name="sex"
                                                component={CheckBoxField}
                                                label="Sex"
                                                type="checkbox"
                                                half
                                            />
                                        </Grid>
                                    </Grid>

                                    <FastField
                                        name="phoneNumber"
                                        component={InputField}
                                        label="Phone Number"
                                        type="number"
                                    />

                                    <FastField
                                        name="address"
                                        component={InputField}
                                        label="Address"
                                        type="text"
                                    />
                                </Grid>
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                    Sign Up
                                </Button>

                            </Paper>
                        </Container>

                    </Form>
                )
            }}
        </Formik >
    );
};

export default SignUpUserScreen;