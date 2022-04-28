import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FormChangePassword from './components/FormChangePassword/FormChangePassword';

const ChangePasswordScreen = () => {
    return (
        <Box sx={{ bgcolor: 'white', width: '100%', padding: '0 2rem' }}>
            <Box>
                <Typography variant="h6">
                    Change password
                </Typography>
                <Typography>For account security, please do not share your password with others</Typography>
            </Box>
            <Divider />
            <FormChangePassword />
        </Box>
    );
};

export default ChangePasswordScreen;