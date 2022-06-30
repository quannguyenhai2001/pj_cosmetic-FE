import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FormInfor from './components/FormInfor/FormInfor';

const InforUserScreen = () => {
    return (
        <Box sx={{ bgcolor: 'white', width: '100%', padding: '0 2rem' }}>
            <Box>
                <Typography variant="h6">
                    Hồ Sơ của tôi
                </Typography>
                <Typography>Quản lý thông tin hồ sơ để bảo mật tài khoản</Typography>
            </Box>
            <Divider />
            <FormInfor />
        </Box>
    );
};

export default InforUserScreen;