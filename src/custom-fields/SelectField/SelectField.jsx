import React from 'react';
import { ErrorMessage } from 'formik';
import { FormControl, Grid, InputLabel, Select, OutlinedInput } from '@mui/material';
import { listAges } from 'utils/listAges';
import { Box } from '@mui/system';
import useStyles from './styles';
function SelectField(props) {
    const classes = useStyles();
    const { field, form, label, half, disabled, handleShowPassword
    } = props
    const { name, value, onChange, onBlur } = field
    const showError = form.errors[name] && form.touched[name]
    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
            <FormControl sx={{ minWidth: 80 }} >
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select className={classes.rootSelect}
                    name={name}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={value}
                    onChange={onChange}
                    autoWidth
                    label={label}
                >
                    {listAges()}
                </Select>
            </FormControl>
            <Box sx={{ color: 'red', fontSize: '1.3rem', margin: '1rem 0 0 0' }}>
                <ErrorMessage name={name} />
            </Box>
        </Grid>
    );
}

export default SelectField;