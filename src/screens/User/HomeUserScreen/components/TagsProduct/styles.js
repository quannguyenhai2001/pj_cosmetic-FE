import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    swiper: {
        width: '100%',
        height: '25rem'
    },
    swiperSlideImg: {
        display: 'block',
        width: '100%',
        height: '60%',
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
    },

    //number 
    boxContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    boxContentNumber: {
        position: 'absolute',
        clipPath: 'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)',
        backgroundColor: '#fff',
        width: '3rem',
        height: '3rem',
        paddingTop: '0.5rem',

        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.3rem',
    }
}));