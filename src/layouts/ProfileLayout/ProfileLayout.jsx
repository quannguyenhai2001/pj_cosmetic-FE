import Footer from 'components/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./ProfileLayout.scss"
import { Grid } from '@mui/material';
const ProfileLayout = (props) => {
    const { children } = props;
    const { id, displayName, avatar } = useSelector(state => state.user.userDetail)

    return (
        <>
            <Header />
            <div className="user-layout">
                <h2><p><img src={avatar} alt="avatar" /></p>{displayName}'S ACCOUNT</h2>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: '1px solid gray' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding component={Link} to={`/user/${id}`}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="User Information" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/change-infor`}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Change Infor" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Setting" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="#simple-list">
                                            <ListItemText primary="Delte User" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {children}
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default ProfileLayout;