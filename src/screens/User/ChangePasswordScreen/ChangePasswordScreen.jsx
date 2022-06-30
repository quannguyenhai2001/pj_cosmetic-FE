import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FormChange from './components/FormChange/FormChange';
const ChangePasswordScreen = () => {
    return (
        <Box sx={{ bgcolor: 'white', width: '100%', padding: '0 2rem' }}>
            <Box>
                <Typography variant="h6">
                    Tạo mật khẩu mới
                </Typography>
                <Typography>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu của bạn với người khác</Typography>
            </Box>
            <Divider />
            <FormChange />
        </Box>
    );
};

export default ChangePasswordScreen;