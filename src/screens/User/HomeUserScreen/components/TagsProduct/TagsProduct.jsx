import StartIcon from '@mui/icons-material/Start';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import { productImages } from 'assets/img/imgProductDetail';
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import GetRandomNumber from 'utils/GetRandomNumber';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TagsProduct() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const listAllProducts = useSelector(state => state.product.listAllProducts);
    // console.log(GetRandomNumber(listAllProducts, 15))
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Box sx={{ width: '100%', margin: '5rem 0' }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                    Just Dropped
                </Typography>
            </Box>
            <Box sx={{ margin: "2rem 0" }}>
                <Tabs sx={{ justifyContent: 'center', display: 'grid' }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Selling Fast" {...a11yProps(0)} />
                    <Tab label="Value Sets" {...a11yProps(1)} />
                    <Tab label="Chosen For You" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={value} index={0}>
                    <Swiper
                        className={classes.swiper}
                        slidesPerView={6}
                        spaceBetween={45}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {listAllProducts.length > 0 ?
                            (
                                listAllProducts.slice(1, 15).map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box className={classes.boxContent}>
                                            <Box className={classes.boxContentNumber}>
                                                #{index + 1}
                                            </Box>
                                            <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                                    ten nha cung cap
                                                </Typography>
                                                <Typography component="div" noWrap sx={{ height: '2rem' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))
                            ) :
                            null}
                    </Swiper >
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Swiper
                        className={classes.swiper}
                        slidesPerView={6}
                        spaceBetween={45}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {listAllProducts.length > 0 ?
                            (
                                listAllProducts.slice(15, 30).map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box className={classes.boxContent}>
                                            <Box className={classes.boxContentNumber}>
                                                #{index + 1}
                                            </Box>
                                            <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                                    ten nha cung cap
                                                </Typography>
                                                <Typography component="div" noWrap sx={{ height: '2rem' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))
                            ) :
                            null}
                    </Swiper>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Swiper
                        className={classes.swiper}
                        slidesPerView={6}
                        spaceBetween={45}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {listAllProducts.length > 0 ?
                            (
                                listAllProducts.slice(30, 45).map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box className={classes.boxContent}>
                                            <Box className={classes.boxContentNumber}>
                                                #{index + 1}
                                            </Box>
                                            <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                                    ten nha cung cap
                                                </Typography>
                                                <Typography component="div" noWrap sx={{ height: '2rem' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))
                            ) :
                            null}
                    </Swiper>
                </TabPanel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 3rem 0' }}>
                <Button variant="outlined" endIcon={<StartIcon />}>View More</Button>
            </Box>
        </Box>

    );
}
