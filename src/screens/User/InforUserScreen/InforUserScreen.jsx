import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FormInfor from './components/FormInfor/FormInfor';

const InforUserScreen = () => {
    return (
        <Box sx={{ bgcolor: 'white', width: '100%', padding: '0 2rem' }}>
            <Box>
                <Typography variant="h6">
                    My profile
                </Typography>
                <Typography>Manage profile information for account security</Typography>
            </Box>
            <Divider />
            <FormInfor />
        </Box>
    );
};

export default InforUserScreen;