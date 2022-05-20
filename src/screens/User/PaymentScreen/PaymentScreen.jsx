import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, StepLabel } from '@mui/material';
import useStyles from './styles';
const steps = ['Shipment Details', 'Payment Method'];

export default function PaymentScreen() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);




    const handleNext = () => {



        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };




    const a = activeStep === 0 ? (
        <React.Fragment>
            <Box>
                1
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
            <Box>
                2
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
                    Payment
                </Button>


            </Box>
        </React.Fragment>
    )

    return (
        <Box sx={{ minHeight: '100vh', padding: "3rem 0rem", backgroundColor: 'lightgray' }}>
            <Container maxWidth="md" >
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