import React from 'react';
import useStyles from './styles'
import VideoHome from 'assets/video/home/video.mp4';
import { Box } from '@mui/material';
const Video = () => {
    const classes = useStyles();
    return (
        <Box className={classes.boxVideo}>
            <video className={classes.video} autoPlay loop muted>
                <source src={VideoHome} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
};

export default Video;