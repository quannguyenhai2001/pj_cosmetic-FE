import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    swiper: {
        width: '100%',
        height: '30rem'
    },

    swiperSlideImg: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'fill',
    },
    buttonPrev: {
        position: 'absolute',
        top: '50%',
        left: '1%',
        transform: 'translateY(-50%)',
        zIndex: '1',
        fontSize: '3rem',
    },
    buttonNext: {
        position: 'absolute',
        top: '50%',
        right: '1%',
        transform: 'translateY(-50%)',
        zIndex: '1',
    }
}));