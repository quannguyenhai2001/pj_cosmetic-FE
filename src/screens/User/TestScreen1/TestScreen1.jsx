
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncTestFile } from 'slices/ProductSlice';

const TestScreen1 = () => {
    const dispatch = useDispatch();
    const [sendimage, setSendimage] = React.useState({});
    const changeHandle = (e) => {
        // function getBase64(file) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = function () {
        //         console.log(reader.result);
        //     };
        //     reader.onerror = function (error) {
        //         console.log('Error: ', error);
        //     };
        // }
        setSendimage(e.target.files[0]);
        // getBase64(e.target.files[0]); // prints the base64 string

    }
    const submit = (e) => {
        e.preventDefault();
        let data = new FormData();

        data.append("sendimage", sendimage);
        dispatch(fetchAsyncTestFile(data));
    }
    return (
        <>
            <form onSubmit={submit}>
                <input type="file" name="sendimage" onChange={changeHandle} multiple />
                <button>Submit</button>
            </form>
            <img src="/api1/auth-file/uploads/download.jpg" alt="dsds" />
        </>
    );
};

export default TestScreen1;


// import { Box, Button, TextField } from '@mui/material';
// import React, { memo } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import useStyles from './styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteListProducts, fetchAsyncFilterProduct } from 'slices/ProductSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// // //price
// // function valuetext(value) {
// //     return `${value}°C`;
// // }

// const Filter = (props) => {
//     const classes = useStyles();
//     const listManu = useSelector(state => state.product.listManufacturers);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const params = useParams();


//     //filter price

//     const [isCheckChangePrice, setIsCheckChangePrice] = React.useState(1);
//     const [value1, setValue1] = React.useState(0);
//     const value = React.useRef(isCheckChangePrice);
//     const handleChangePrice0 = (event) => {
//         value.current = isCheckChangePrice + 1;
//         setArray1({ ...array1, minPrice: event.target.value });

//     };
//     const handleChangePrice1 = (event) => {
//         value.current = isCheckChangePrice + 1;
//         setArray1({ ...array1, maxPrice: event.target.value })

//     };

//     const handleApplyPrice = () => {
//         value.current = isCheckChangePrice;
//         setIsCheckChangePrice(isCheckChangePrice + 1);

//         if (value1 === 0) {
//             setValue1(1);
//         }
//         props.handleSetPage();
//     }


//     //filter manu

//     const [checkedManu, setCheckedManu] = React.useState(false);
//     const [valueIndex, setValueIndex] = React.useState('');
//     const handleChangeCheckedManu = (event) => {
//         setCheckedManu(event.target.checked)
//         if (!event.target.checked) {
//             setArray1({ ...array1, manu_Id: '' })

//         }
//     }
//     const handleClickCheckBox = (arg) => {
//         setValueIndex(arg.index);
//         setArray1({ ...array1, manu_Id: arg.item.id })
//         props.handleSetPage();

//     }


//     //filter sale
//     const handleChangeCheckedSale = (event) => {
//         // setCheckedSale(event.target.checked);
//         setArray1({ ...array1, promotion: event.target.checked })
//     };
//     //set page = 1
//     const handleSetPage = () => {
//         props.handleSetPage();
//     }
//     // array tham so
//     const [array1, setArray1] = React.useState({ cate_Id: params.categoryId, manu_Id: '', minPrice: '', maxPrice: '', promotion: '', limit: 16, page: '' });

//     //call api
//     React.useEffect(() => {
//         // console.log({ array: array1 })
//         let newArray = {};

//         for (let key in array1) {
//             if (array1[key]) {
//                 newArray[key] = array1[key];
//             }
//         }
//         console.log(newArray)
//         if (props.page !== 0) {
//             newArray.page = props.page;
//         }

//         // dispatch(fetchAsyncFilterProduct(
//         //     {
//         //         cate_Id: params.categoryId,
//         //         ...newArray
//         //     }))

//         console.log({ value, isCheckChangePrice })
//         // params string
//         let stringParams = '';



//         for (let key in newArray) {
//             if (key !== 'minPrice' && key !== 'maxPrice' & key !== 'limit' & key !== 'cate_Id') {
//                 stringParams += `${key}=${newArray[key]}&`;
//             }

//             else if (key === 'minPrice' && newArray[key]) {
//                 if (key === 'maxPrice' && newArray[key]) {
//                     stringParams += `minPrice=${newArray.minPrice}&maxPrice=${newArray.maxPrice}&`;
//                 }
//             }
//         }


//         if (value.current > isCheckChangePrice) {
//             const editedTextNoPrice = stringParams.slice(0, -1)
//             navigate('/products/' + params.categoryId + `?${editedTextNoPrice}`)

//         }
//         else {
//             if (newArray.minPrice && newArray.maxPrice) {
//                 stringParams += `minPrice=${newArray.minPrice}&maxPrice=${newArray.maxPrice}&`;
//                 const editedTextHavePrice = stringParams.slice(0, -1)
//                 navigate('/products/' + params.categoryId + `?${editedTextHavePrice}`)
//             }
//             else {
//                 const editedTextNoPrice = stringParams.slice(0, -1)
//                 navigate('/products/' + params.categoryId + `?${editedTextNoPrice}`)
//             }
//         }

//         return () => {
//             dispatch(deleteListProducts());
//             // console.log("unmount filter")
//         }
//     }, [array1, props.page, isCheckChangePrice, dispatch, params.categoryId, navigate]);

//     //reset filter
//     React.useEffect(() => {
//         setArray1({ cate_Id: params.categoryId, manu_Id: '', minPrice: '', maxPrice: '', promotion: '', limit: 16 });
//         setValueIndex('');
//         setCheckedManu(false);
//         navigate('/products/' + params.categoryId)
//     }, [params.categoryId, navigate]);

//     return (
//         <Box>
//             <Typography variant="h6">Filter</Typography>

//             {/* filter manu */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
//                     <Typography>Manufacturers</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <FormGroup>
//                         {listManu.length > 0 && listManu.map((item, index) => {
//                             return (
//                                 <FormControlLabel key={index} control={<Checkbox checked={valueIndex === index ? checkedManu : false}
//                                     onChange={handleChangeCheckedManu}
//                                     onClick={() => { handleClickCheckBox({ index, item }) }}
//                                     inputProps={{ 'aria-label': 'controlled' }} />} label={item.name} />
//                             )
//                         })}
//                     </FormGroup>
//                 </AccordionDetails>
//             </Accordion>

//             {/* filter price */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography>Price</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <Box sx={{ width: 'interhit' }}>
//                         <Box sx={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
//                             {/* <Slider
//                                 sx={{ width: '80%' }}
//                                 max={300}
//                                 value={array1.price}
//                                 onChange={handleChangePrice}
//                                 valueLabelDisplay="auto"
//                                 getAriaValueText={valuetext}
//                                 onClick={handleSetPage}
//                             /> */}
//                             <TextField
//                                 id="outlined-helperText"
//                                 size='small'
//                                 sx={{ width: '85%' }}
//                                 name="priceFrom"
//                                 value={array1.minPrice}
//                                 onChange={handleChangePrice0}
//                                 placeholder='From'

//                             />
//                             <TextField
//                                 id="outlined-helperText"
//                                 size='small'
//                                 name="priceTo"
//                                 value={array1.maxPrice}
//                                 onChange={handleChangePrice1}
//                                 placeholder='To'

//                             />
//                         </Box>

//                         <Button sx={{ margin: '2rem 0' }} fullWidth variant="contained" onClick={handleApplyPrice} >Apply</Button>
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>

//             {/* filter sale */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography>Sale</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <FormGroup>
//                         <FormControlLabel control={<Checkbox checked={setArray1.promotion}
//                             onChange={handleChangeCheckedSale}
//                             onClick={handleSetPage}
//                             inputProps={{ 'aria-label': 'controlled' }} />} label="Sale" />
//                     </FormGroup>
//                 </AccordionDetails>
//             </Accordion>

//         </Box>
//     );
// };

// export default memo(Filter);





// import { Box, Button, TextField } from '@mui/material';
// import React, { memo } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import useStyles from './styles';
// import Slider from '@mui/material/Slider';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteListProducts, fetchAsyncFilterProduct } from 'slices/ProductSlice';
// import { useNavigate, useParams } from 'react-router-dom';

// // //price
// // function valuetext(value) {
// //     return `${value}°C`;
// // }

// const Filter = (props) => {
//     const classes = useStyles();
//     const listManu = useSelector(state => state.product.listManufacturers);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const params = useParams();

//     //set page = 1
//     const handleSetPage = () => {
//         props.handleSetPage();
//     }
//     //filter price
//     const [isCheckChangePrice, setIsCheckChangePrice] = React.useState(false);
//     const handleChangePrice0 = (event, newValue) => {
//         setIsCheckChangePrice(true);
//         setArray1({ ...array1, price: newValue, page: '' })

//     };

//     //filter manu
//     const [checkedManu, setCheckedManu] = React.useState(false);
//     const [valueIndex, setValueIndex] = React.useState('');
//     const handleChangeCheckedManu = (event) => {
//         setCheckedManu(event.target.checked)
//         if (!event.target.checked) {
//             setArray1({ ...array1, manu_Id: '' })

//         }
//     }
//     const handleClickCheckBox = (arg) => {
//         setValueIndex(arg.index);
//         setArray1({ ...array1, manu_Id: arg.item.id })
//         props.handleSetPage();

//     }

//     //filter sale
//     const handleChangeCheckedSale = (event) => {
//         // setCheckedSale(event.target.checked);
//         setArray1({ ...array1, promotion: event.target.checked })
//     };

//     // array tham so
//     const [array1, setArray1] = React.useState({ cate_Id: params.categoryId, manu_Id: '', price: ["", ""], promotion: '', limit: 16, page: '' });

//     //call api
//     React.useEffect(() => {
//         // console.log({ array: array1 })
//         let newArray = {};

//         for (let key in array1) {
//             if (array1[key] && key !== 'price') {
//                 newArray[key] = array1[key];
//             }
//             else if (key === 'price' && array1['price'].join('') !== '') {
//                 newArray[key] = array1[key];
//             }
//         }
//         console.log(newArray)
//         if (props.page !== 0) {
//             newArray.page = props.page;
//         }

//         dispatch(fetchAsyncFilterProduct(
//             {
//                 cate_Id: params.categoryId,
//                 ...newArray
//             }))

//         //params string
//         let stringParams = '';
//         for (let key in newArray) {

//             if (key !== 'price' & key !== 'limit' & key !== 'cate_Id') {
//                 stringParams += `${key}=${newArray[key]}&`;
//             }
//         }
//         if (!isCheckChangePrice) {

//             const editedTextNoPrice = stringParams.slice(0, -1)
//             navigate('/products/' + params.categoryId + `?${editedTextNoPrice}`)
//         }
//         else {
//             stringParams += `price[]=${newArray.price[0]}&price[]=${newArray.price[1]}&`;
//             const editedTextHavePrice = stringParams.slice(0, -1)
//             navigate('/products/' + params.categoryId + `?${editedTextHavePrice}`)
//         }
//         return () => {
//             dispatch(deleteListProducts());
//             // console.log("unmount filter")
//         }
//     }, [array1, props.page, isCheckChangePrice, dispatch, params.categoryId, navigate]);

//     //reset filter
//     React.useEffect(() => {
//         setArray1({ cate_Id: params.categoryId, manu_Id: '', price: ["", ""], promotion: '', limit: 16 });
//         setValueIndex('');
//         setCheckedManu(false);
//         navigate('/products/' + params.categoryId)
//     }, [params.categoryId, navigate]);

//     return (
//         <Box>
//             <Typography variant="h6">Filter</Typography>

//             {/* filter manu */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
//                     <Typography>Manufacturers</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <FormGroup>
//                         {listManu.length > 0 && listManu.map((item, index) => {
//                             return (
//                                 <FormControlLabel key={index} control={<Checkbox checked={valueIndex === index ? checkedManu : false}
//                                     onChange={handleChangeCheckedManu}
//                                     onClick={() => { handleClickCheckBox({ index, item }) }}
//                                     inputProps={{ 'aria-label': 'controlled' }} />} label={item.name} />
//                             )
//                         })}
//                     </FormGroup>
//                 </AccordionDetails>
//             </Accordion>

//             {/* filter price */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography>Price</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <Box sx={{ width: 'interhit' }}>
//                         <Box sx={{ width: '100%', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
//                             {/* <Slider
//                                 sx={{ width: '80%' }}
//                                 max={300}
//                                 value={array1.price}
//                                 onChange={handleChangePrice}
//                                 valueLabelDisplay="auto"
//                                 getAriaValueText={valuetext}
//                                 onClick={handleSetPage}
//                             /> */}
//                             <TextField
//                                 id="outlined-helperText"
//                                 size='small'
//                                 sx={{ width: '85%' }}
//                                 name="priceFrom"
//                                 value={array1.price[0]}
//                                 placeholder='From'

//                             />
//                             <TextField
//                                 id="outlined-helperText"
//                                 size='small'
//                                 name="priceTo"
//                                 value={array1.price[1]}
//                                 placeholder='To'

//                             />
//                         </Box>

//                         <Button sx={{ margin: '2rem 0' }} fullWidth variant="contained" >Apply</Button>
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>

//             {/* filter sale */}
//             <Accordion className={classes.rootPaper}>
//                 <AccordionSummary className={classes.rootButtonBase}
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography>Sale</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.rootAccordionDetails}>
//                     <FormGroup>
//                         <FormControlLabel control={<Checkbox checked={setArray1.promotion}
//                             onChange={handleChangeCheckedSale}
//                             onClick={handleSetPage}
//                             inputProps={{ 'aria-label': 'controlled' }} />} label="Sale" />
//                     </FormGroup>
//                 </AccordionDetails>
//             </Accordion>

//         </Box>
//     );
// };

// export default memo(Filter);