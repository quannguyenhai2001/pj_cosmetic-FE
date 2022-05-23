import { Image } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

const ImgAdvertisement = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '5rem' }}>
            <img src={require('../../../../../assets/img/Home/img-advertisement/img1.webp')} alt="img" />
            <img src={require('../../../../../assets/img/Home/img-advertisement/img2.webp')} alt="img" />
        </Box>
    );
};

export default ImgAdvertisement;