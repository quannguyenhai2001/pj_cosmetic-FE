import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    swiper: {
        width: '100%',
        height: '25rem',
        '& .swiper-button-prev': {
            '&:after': {
                fontSize: '3.5rem',
                transform: 'translateY(-20px)',
            },
        },
        '& .swiper-button-next': {
            '&:after': {
                fontSize: '3.5rem',
                transform: 'translateY(-20px)',
            },
        }
    },
    swiperSlideImg: {
        display: 'block',
        width: '100%',
        height: '60%',
        objectFit: 'fill',
        border: '1px solid #e6e6e6',
    },

    //number 
    boxContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },

    boxContentNumber: {
        position: 'absolute',
        top: 1,
        left: 1,
        boxShadow: ' 50px 50px 100px #5a5a5a,-50px -50px 100px #ffffff',
        clipPath: 'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)',
        backgroundColor: '#fff',
        width: '3rem',
        height: '2.6rem',
        paddingTop: '0.5rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.3rem',
    }
}));