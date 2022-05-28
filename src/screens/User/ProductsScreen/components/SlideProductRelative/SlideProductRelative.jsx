import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import { useSelector } from 'react-redux';
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import GetRandomNumber from 'utils/GetRandomNumber';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
const SlideRewards = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const listAllProducts = useSelector(state => state.product.listAllProducts);
    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Box sx={{ marginBottom: '5rem' }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '4rem' }}>
                Product Relative
            </Typography>
            <Swiper
                className={classes.swiper}
                slidesPerView={6}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
            >
                {listAllProducts.length > 0 ?
                    (
                        listAllProducts.slice(1, 15).map((item, index) => (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <Paper elevation={2} className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                    {item.image && (<img className={classes.swiperSlideImg} src={JSON.parse(item.image)[0]} alt="Product" />)}
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography component="div" noWrap sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                            {item.manufacturerName}
                                        </Typography>
                                        <Typography component="div" sx={{ height: '2rem' }}>
                                            {item.productName}
                                        </Typography>
                                    </Box>

                                </Paper>
                            </SwiperSlide>
                        ))
                    ) :
                    null}
            </Swiper >
        </Box>
    );
};

export default SlideRewards;