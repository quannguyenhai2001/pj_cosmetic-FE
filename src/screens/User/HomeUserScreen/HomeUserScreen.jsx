import { Box, Container } from '@mui/material';
import React from 'react';
import SlideBanner from './components/SlideBanner/SlideBanner';
import TagsProduct from './components/TagsProduct/TagsProduct';

const HomeUserScreen = () => {
    return (
        <Box>
            <SlideBanner />
            <Container maxWidth="lg">
                <TagsProduct />
            </Container>
        </Box>
    );
};

export default HomeUserScreen;