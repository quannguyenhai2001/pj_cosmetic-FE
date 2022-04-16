import React, { useRef } from 'react';
import Images from 'constants/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
// import required modules
import { Navigation, Autoplay, Pagination, EffectCreative } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SlideBanner = () => {
    const classes = useStyles();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <Swiper className={classes.swiper}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            effect={"creative"}
            centeredSlides={true}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}

            pagination={{
                dynamicBullets: true,
            }}
            modules={[Autoplay, EffectCreative, Navigation, Pagination]}
            onSlideChange={() => console.log('slide change')}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
        >
            <div ref={prevRef} className={classes.buttonPrev}>
                <IconButton color="primary">
                    <ArrowBackIosNewIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
            </div>
            <div ref={nextRef} className={classes.buttonNext}>
                <IconButton color="primary">
                    <ArrowForwardIosIcon sx={{ fontSize: '4rem' }} />
                </IconButton>
            </div>
            <SwiperSlide>
                <div style={{ position: "relative" }}>
                    <img className={classes.swiperSlideImg} src={Images.bg1} alt="game" />
                    <button style={{ position: "absolute" }}>sdsd</button>
                </div>
            </SwiperSlide>
            <SwiperSlide><div><img className={classes.swiperSlideImg} src={Images.bg1} alt="game"></img></div></SwiperSlide>
            <SwiperSlide><div><img className={classes.swiperSlideImg} src={Images.bg1} alt="game"></img></div></SwiperSlide>
            <SwiperSlide><div><img className={classes.swiperSlideImg} src={Images.bg1} alt="game"></img></div></SwiperSlide>
        </Swiper >
    );
};

export default SlideBanner;