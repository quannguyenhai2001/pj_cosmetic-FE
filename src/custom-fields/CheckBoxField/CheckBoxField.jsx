import React from 'react'
import useStyles from './styles'
import { ErrorMessage } from 'formik';
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material'
const CheckBoxField = (props) => {
    const classes = useStyles()
    const { field, half } = props
    const { name, value, onChange } = field

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <FormControl >
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup className={classes.rootGrid}
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <FormControlLabel component="span" value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <Box sx={{ color: 'red', fontSize: '1.3rem', margin: '1rem 0 0 0' }}>
                <ErrorMessage name={name} />
            </Box>
        </Grid >

    );
};

export default CheckBoxField;