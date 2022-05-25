import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, StepLabel, TextareaAutosize, TextField } from '@mui/material';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAsyncCreateBill, deleteListProductInCart } from 'slices/ProductSlice';
import { Toast } from 'utils/Toast';
const steps = ['Shipment Details', 'Payment Method'];

export default function PaymentScreen() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //step
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const listProductInCart = useSelector(state => state.product.listProductInCart);

    React.useEffect(() => {
        if (listProductInCart.length === 0) {
            navigate('/')
        }
    }, [listProductInCart, navigate])
    //state
    const [state, setState] = React.useState({
        phone: '',
        notes: '',
        deliveryAddress: '',
        paymentMethod: '',
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value)
    }
    //payment
    const handlePayment = () => {
        dispatch(fetchAsyncCreateBill(state)).unwrap().then(() => {
            dispatch(deleteListProductInCart())
            Toast('success', 'Payment success!')
            navigate('/')

        }).catch(err => {
            console.log(err)
        })
    }

    const a = activeStep === 0 ? (
        <React.Fragment>
            <Box sx={{ margin: '3rem 1rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Box className={classes.Typo}>
                            <Typography className={classes.rootTypo}>phone:</Typography>
                            <Typography className={classes.rootTypo} >Delivery Address:</Typography>
                            <Typography className={classes.rootTypo}>Note:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Box >
                            <TextField onChange={handleChange} type="number" value={state.phone} name="phone" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />
                            <TextField onChange={handleChange} type="text" value={state.deliveryAddress} name="deliveryAddress" className={classes.rootTextField1} id="outlined-basic" variant="outlined" size="small" />
                            <TextareaAutosize
                                onChange={handleChange}
                                aria-label="minimum height"
                                minRows={6}
                                name="notes"
                                placeholder="Note for the order..."
                                style={{ width: 400 }}
                            />
                        </Box>
                    </Grid>
                </Grid>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                    Next
                </Button>

            </Box>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Box sx={{ margin: '3rem 1rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Box className={classes.Typo}>
                            <Typography sx={{ marginTop: '1rem' }}>Payment Method:</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Box >
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="1"
                                    name="paymentMethod"
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Payment on delivery" control={<Radio />} label="Payment on delivery" />
                                    <FormControlLabel value="Payment by card" control={<Radio />} label="Payment by card" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handlePayment}>
                    Payment
                </Button>

            </Box>
        </React.Fragment>
    )

    return (
        <Box sx={{ minHeight: '100vh', padding: "3rem 0rem", backgroundColor: 'lightgray' }}>
            <Container maxWidth="md" >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '2rem 0 ' }}>
                    <Typography variant="h4" gutterBottom>PAYMENT</Typography>
                </Box>
                <Box className={classes.boxForm} sx={{ width: '100%', padding: "3rem 1rem", backgroundColor: 'white' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    <Box>
                        {a}
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}