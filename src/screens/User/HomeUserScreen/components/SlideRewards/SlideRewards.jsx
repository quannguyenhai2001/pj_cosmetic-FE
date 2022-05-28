import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStyles from './styles'
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
// import GetRandomNumber from 'utils/GetRandomNumber';
import { useNavigate } from 'react-router-dom';
const SlideRewards = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const listAllProducts = useSelector(state => state.product.listAllProducts);
    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Box sx={{ marginBottom: '5rem' }}>
            <Box className={classes.boxTitle}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    Beauty Insider Rewards
                </Typography>
                <Button className={classes.boxTitleButton} endIcon={<ArrowForwardIcon />} variant="text">MORE</Button>
            </Box>

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
                                <Box className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                    {item.image && (<img className={classes.swiperSlideImg} src={JSON.parse(item.image)[0]} alt="Product" />)}
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography component="div" noWrap sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                            {item.manufacturerName}
                                        </Typography>
                                        <Typography component="div" sx={{ height: '2rem' }}>
                                            {item.productName}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))
                    ) :
                    null}
            </Swiper >
        </Box>
    );
};

export default SlideRewards;