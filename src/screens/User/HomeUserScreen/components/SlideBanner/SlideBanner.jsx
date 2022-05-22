// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import useStyles from './styles'
// import Images from 'assets/img/imgBanner';
// // import required modules
// import { Navigation, Autoplay, Pagination } from 'swiper'
// // Import Swiper styles

// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-creative";

// import { IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// const SlideBanner = () => {
//     const classes = useStyles();
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);
//     return (
//         <Swiper className={classes.swiper}
//             spaceBetween={0}
//             slidesPerView={1}
//             centeredSlides={true}
//             autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//             }}
//             pagination={{
//                 dynamicBullets: true,
//             }}
//             modules={[Autoplay, Navigation, Pagination]}
//             // onSlideChange={() => { }}
//             onInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//                 swiper.navigation.init();
//                 swiper.navigation.update();
//             }}
//         >
//             <div ref={prevRef} className={classes.buttonPrev}>
//                 <IconButton color="primary">
//                     <ArrowBackIosNewIcon sx={{ fontSize: '4rem' }} />
//                 </IconButton>
//             </div>
//             <div ref={nextRef} className={classes.buttonNext}>
//                 <IconButton color="primary">
//                     <ArrowForwardIosIcon sx={{ fontSize: '4rem' }} />
//                 </IconButton>
//             </div>
//             <SwiperSlide><div className={classes.swiperSlide}> <img className={classes.swiperSlideImg} src={Images.bg1} alt="product"></img></div></SwiperSlide>
//             <SwiperSlide><div className={classes.swiperSlide}><img className={classes.swiperSlideImg} src={Images.bg2} alt="product"></img></div></SwiperSlide>
//             <SwiperSlide><div className={classes.swiperSlide}><img className={classes.swiperSlideImg} src={Images.bg3} alt="product"></img></div></SwiperSlide>
//         </Swiper >
//     );
// };

// export default SlideBanner;