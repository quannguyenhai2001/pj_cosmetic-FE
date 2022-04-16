import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import useStyles from './styles';
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxFooter}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <h1>Footer</h1>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <h1>Footer</h1>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;