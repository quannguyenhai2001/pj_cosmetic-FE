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
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                >
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game"></img>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game"></img>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game"></img>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game"></img>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className={classes.swiperSlideImg} src={productImages[0]} alt="game"></img>
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
                    <Tab label="List Product 1" {...a11yProps(0)} />
                    <Tab label="List Product 2" {...a11yProps(1)} />
                    <Tab label="List Product 3" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={value} index={0}>
                    List Product 1
                </TabPanel>
                <TabPanel value={value} index={1}>
                    List Product 2
                </TabPanel>
                <TabPanel value={value} index={2}>
                    List Product 3
                </TabPanel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
                <Button variant="outlined" endIcon={<StartIcon />}>View More</Button>
            </Box>
        </Box>

    );
}
