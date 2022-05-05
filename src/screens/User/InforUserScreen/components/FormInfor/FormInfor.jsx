import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
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

const FormInfor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const changeError = (e) => {
        setError('')
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const initialValues = {
        displayName: '',
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
        displayName: Yup.string().required('This field is required'),
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
            ...objValues
        }
        dispatch(fetchAsyncSignUp(userData)).unwrap().then(() => {
            navigate('/sign-in')
        }).catch(err => {
            setError(err)
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

                        <Grid container spacing={2}>

                            <FastField
                                name="firstName"
                                component={InputField}
                                label="First Name"
                                half
                                type="text"
                            />

                            <Field
                                name="email"
                                component={InputField}
                                label="Email"
                                type="email"
                                error={error}
                                changeError={changeError}
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



                    </Form>
                )
            }}
        </Formik >
    );
};

export default FormInfor;