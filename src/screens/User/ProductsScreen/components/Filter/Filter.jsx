import { Box } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useStyles from './styles';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';

//price
function valuetext(value) {
    return `${value}°C`;
}
const Filter = () => {
    const classes = useStyles();
    const listManu = useSelector(state => state.product.listManufacturers);

    //filter price
    const [valuePrice, setValuePrice] = React.useState([0, 100]);
    const handleChangePrice = (event, newValue) => {
        setValuePrice(newValue);
    };

    //filter manu
    const [checkedManu, setCheckedManu] = React.useState(false);
    const [valueIndex, setValueIndex] = React.useState('');
    const [valueIdManu, setValueIdManu] = React.useState('');
    const handleChangeCheckedManu = (event) => {
        setCheckedManu(event.target.checked)
        if (!event.target.checked) {
            setValueIdManu('')
        }
    }
    React.useEffect(() => {

        return () => {
            console.log('unmount');
        }
    }, []);
    const handleClickCheckBox = (arg) => {
        setValueIndex(arg.index);
        setValueIdManu(arg.item.id);
    }
    //filter sale
    const [checkedSale, setCheckedSale] = React.useState(true);
    const handleChangeCheckedSale = (event) => {
        setCheckedSale(event.target.checked);

    };

    return (
        <Box>
            <Typography>Filter</Typography>

            {/* filter manu */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Nhà Cung Cấp</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <FormGroup>
                        {listManu.length > 0 && listManu.map((item, index) => {
                            return (
                                <FormControlLabel key={index} control={<Checkbox checked={valueIndex === index ? checkedManu : false}
                                    onChange={handleChangeCheckedManu}
                                    onClick={() => { handleClickCheckBox({ index, item }) }}
                                    inputProps={{ 'aria-label': 'controlled' }} />} label={item.name} />
                            )
                        })}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

            {/* filter price */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <Box sx={{ width: 'interhit' }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Slider
                                sx={{ width: '80%' }}
                                max={300}
                                value={valuePrice}
                                onChange={handleChangePrice}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>

                        <Typography>Price ${valuePrice[0]} to ${valuePrice[1]}</Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* filter sale */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Sale</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.rootAccordionDetails}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={checkedSale}
                            onChange={handleChangeCheckedSale}
                            inputProps={{ 'aria-label': 'controlled' }} />} label="Sale" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};

export default Filter;