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
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Swiper
                    className={classes.swiper}
                    slidesPerView={6}
                    spaceBetween={45}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <Box className={classes.boxContent}>
                            <Box className={classes.boxContentNumber}>
                                #1
                            </Box>

                            <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />


                            <Box sx={{ textAlign: 'center' }}>
                                <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                    Ten nha cung cap
                                </Typography>
                                <Typography component="div">
                                    ten san pham
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box className={classes.boxContent}>
                            <Box className={classes.boxContentNumber}>
                                #1
                            </Box>
                            <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                    Ten nha cung cap
                                </Typography>
                                <Typography component="div">
                                    ten san pham
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                Ten nha cung cap
                            </Typography>
                            <Typography component="div">
                                ten san pham
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                Ten nha cung cap
                            </Typography>
                            <Typography component="div">
                                ten san pham
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                Ten nha cung cap
                            </Typography>
                            <Typography component="div">
                                ten san pham
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                Ten nha cung cap
                            </Typography>
                            <Typography component="div">
                                ten san pham
                            </Typography>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="Product" />
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography component="div" sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                Ten nha cung cap
                            </Typography>
                            <Typography component="div">
                                ten san pham
                            </Typography>
                        </Box>
                    </SwiperSlide>
                </Swiper >
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
                    Selling Fast
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Value Sets
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Chosen For You
                </TabPanel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 3rem 0' }}>
                <Button variant="outlined" endIcon={<StartIcon />}>View More</Button>
            </Box>
        </Box>

    );
}
