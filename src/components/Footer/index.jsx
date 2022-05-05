import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import useStyles from './styles';
const Footer = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Typography className={classes.boxFeedback} variant="button" color="black">Website feedback? Let us know ▸</Typography>
      </Box>
      <Box className={classes.boxFooter}>
        <Container maxWidth="xl">
          <Grid container sx={{ padding: '1rem 0' }}>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'gray' }} />
          <Grid container sx={{ padding: '1rem 0' }}>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <h1>Footer</h1>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;