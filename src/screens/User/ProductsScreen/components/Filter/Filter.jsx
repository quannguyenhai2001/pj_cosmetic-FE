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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncFilterProduct } from 'slices/ProductSlice';
import { useParams } from 'react-router-dom';

//price
function valuetext(value) {
    return `${value}°C`;
}
const Filter = () => {
    const classes = useStyles();
    const listManu = useSelector(state => state.product.listManufacturers);
    const dispatch = useDispatch();
    const params = useParams();
    //filter price
    const [valuePrice, setValuePrice] = React.useState([0, 300]);
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

    const handleClickCheckBox = (arg) => {
        setValueIndex(arg.index);
        setValueIdManu(arg.item.id);
    }

    //filter sale
    const [checkedSale, setCheckedSale] = React.useState(false);
    const handleChangeCheckedSale = (event) => {
        setCheckedSale(event.target.checked);

    };
    React.useEffect(() => {
        if (valueIdManu && !checkedSale) {
            dispatch(fetchAsyncFilterProduct(
                {
                    cate_Id: params.categoryId,
                    manu_Id: valueIdManu,

                }))
        }
        else if (valueIdManu && checkedSale) {
            dispatch(fetchAsyncFilterProduct(
                {
                    cate_Id: params.categoryId,
                    manu_Id: valueIdManu,
                    promotion: true,

                }))
        }
        else {
            dispatch(fetchAsyncFilterProduct(
                {
                    cate_Id: params.categoryId,
                }))
        }
        // return () => {
        //     console.log('unmount filter');
        // }
    }, [valueIdManu, checkedSale, dispatch, params.categoryId]);
    return (
        <Box>
            <Typography variant="h6">Filter</Typography>

            {/* filter manu */}
            <Accordion className={classes.rootPaper}>
                <AccordionSummary className={classes.rootButtonBase}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Manufacturers</Typography>
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