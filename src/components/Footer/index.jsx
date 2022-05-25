import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import useStyles from './styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import USIcon from 'assets/img/footer/img-language/united-states.png'
import CanadaIcon from 'assets/img/footer/img-language/canada.png'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ApprovalIcon from '@mui/icons-material/Approval';
const Footer = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Typography className={classes.boxFeedback} variant="button" color="black">Website feedback? Let us know ▸</Typography>
      </Box>
      <Box className={classes.boxFooter}>
        <Container maxWidth="xl">
          <Grid container sx={{ padding: '2rem 0' }}>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                <AddBusinessIcon fontSize='large' />
                <Typography component='span'>
                  Find a Store
                </Typography>
              </Box>

            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                <ChatBubbleOutlineIcon fontSize='large' />
                <Typography component='span'>
                  Live Beauty Help
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                <LocalPhoneIcon fontSize='large' />
                <Typography component='span'>
                  1-877-737-4672
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                <ApprovalIcon fontSize='large' />
                <Typography component='span'>
                  Get the App
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>

              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                <AddCardIcon fontSize='large' />
                <Typography component='span'>
                  Want 25% off your ASP purchase1? DETAILS
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'gray' }} />
          <Grid container sx={{ padding: '1rem 0' }}>
            <Grid item xs={2}>
              <Box className={classes.boxThreeSide}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  About ASP
                </Typography>
                <Typography>
                  Newsroom
                </Typography>
                <Typography>
                  Careers
                </Typography>
                <Typography>
                  ASP Social Impact
                </Typography>
                <Typography>
                  ASP Global Sites
                </Typography>
                <Typography>
                  Affiliates
                </Typography>
                <Typography>
                  ASP Events
                </Typography>
                <Typography>
                  Gift Cards
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.boxThreeSide}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  My ASP
                </Typography>
                <Typography>
                  Beauty Insider
                </Typography>
                <Typography>
                  Community Profile
                </Typography>
                <Typography>
                  Order Status
                </Typography>
                <Typography>
                  Purchase History
                </Typography>
                <Typography>
                  Account Settings
                </Typography>
                <Typography>
                  Rewards Bazaar
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.boxThreeSide}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Help
                </Typography>
                <Typography>
                  Customer Service
                </Typography>
                <Typography>
                  Returns & Exchanges
                </Typography>
                <Typography>
                  Delivery and Pickup Options
                </Typography>
                <Typography>
                  Shipping
                </Typography>
                <Typography>
                  Store Locations
                </Typography>
                <Typography>
                  Online Ordering
                </Typography>
                <Typography>
                  Accessibility
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className={classes.boxThreeSide}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Region & Language
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={USIcon} alt="US" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <Typography component='span'>
                    United States - English
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={CanadaIcon} alt="canada" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <Typography component='span'>
                    Canada - English
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <img src={CanadaIcon} alt="canada" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <Typography component='span'>
                    Canada - Français
                  </Typography>
                </Box>


              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.boxRightSide}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  We Belong to
                  Something Beautiful
                </Typography>
                <Typography>
                  At ASP, our diversity and inclusion mission is simple: To never stop championing all beauty
                  fearlessly and building inclusive environments for our employees, consumers, and communities.The goal of the research is to call attention to the inequities of retail shopping
                  experiences for consumers and, more importantly, identify actionable solutions to galvanize change.
                </Typography>

                <Box sx={{ marginTop: '3rem' }}>
                  <Typography sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                    Sign up for ASP Emails
                  </Typography>
                  <Box>
                    <input className={classes.input} type="text" placeholder="Enter your email" />
                    <Button variant="contained" className={classes.buttonSignUp}>SIGN UP</Button>
                  </Box>
                </Box>

              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'gray' }} />
          <Grid container sx={{ padding: '2rem 0 2rem 0' }}>
            <Grid item xs={9}>
              <Typography sx={{ padding: '0rem 0 1.5rem 0' }}>© 2022 ASP USA, Inc. All rights reserved.</Typography>
              <Box className={classes.boxFooterBottom}>
                <Typography component="span">
                  Privacy Policy
                </Typography>
                <Typography component="span">
                  Terms of Use
                </Typography>
                <Typography component="span">
                  Accessibility
                </Typography>
                <Typography component="span">
                  Sitemap
                </Typography>
                <Typography component="span">
                  CA - Do Not Sell My Personal Information
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} className={classes.boxIcon}>
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TwitterIcon />
              <PinterestIcon />
              <GoogleIcon />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;