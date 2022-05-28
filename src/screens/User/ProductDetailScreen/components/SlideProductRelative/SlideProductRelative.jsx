import React, { memo } from 'react';
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
const SlideProductRelative = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const listAllProducts = useSelector(state => state.product.listAllProducts);
    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Box sx={{ marginBottom: '5rem' }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '4rem' }}>
                You May Also Like
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
                                        <Typography component="div" sx={{
                                            height: '4rem',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                        }}>
                                            {item.productName}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0.5rem' }}>
                                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: '100', textDecoration: 'line-through' }}>
                                                ${item.price}.00
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom sx={{ color: 'red' }}>
                                                ${parseFloat(item.price * item.promotion, 10).toFixed(2)}
                                            </Typography>
                                        </Box>
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

export default memo(SlideProductRelative);