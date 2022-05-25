import { Box, Container, Typography } from '@mui/material';
import React, { memo } from 'react';
import DialogBox from './components/DialogBox/DialogBox';
import ImgAdvertisement from './components/ImgAdvertisement/ImgAdvertisement';
import ImgBeauty from './components/ImgBeauty/ImgBeauty';
import MapLocation from './components/MapLocation/MapLocation';
import SlideBanner from './components/SlideBanner/SlideBanner';
import SlideRewards from './components/SlideRewards/SlideRewards';
import TagsProduct from './components/TagsProduct/TagsProduct';
import Video from './components/Video/Video';
const HomeUserScreen = () => {
    return (
        <Box sx={{ marginBottom: '5rem', position: 'relative' }}>
            <DialogBox />
            {/* <SlideBanner /> */}
            <Video />
            <Container maxWidth="lg" sx={{ paddingTop: '55rem' }}>
                <TagsProduct />
                <ImgAdvertisement />
                <SlideRewards />
                <ImgBeauty />
                <MapLocation />
            </Container>
        </Box>
    );
};

export default memo(HomeUserScreen);