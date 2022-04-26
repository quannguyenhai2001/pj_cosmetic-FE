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
import { Avatar, Grid, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import useStyles from './styles';
//create circle avatar
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: '40px',
            height: '40px',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const ProfileLayout = (props) => {
    const classes = useStyles();
    const { children } = props;
    const { id, displayName, avatar } = useSelector(state => state.user.userDetail)

    //select list item
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return (
        <Box>
            <Header />
            <Box sx={{ padding: '0 5rem', minHeight: '90vh', bgcolor: 'rgb(245,245,245)' }}>
                <Box sx={{ display: 'flex', padding: '2rem 0' }}>
                    <Avatar {...stringAvatar(displayName)} />
                    <Box sx={{ marginLeft: '1rem' }}>
                        <Typography variant="h7" sx={{ marginBottom: '2px' }} component="div">{displayName}</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <BuildIcon fontSize='5px' />
                            <Typography color="text.secondary" >Edit Profile</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <Box sx={{ width: '100%' }}>
                            <nav aria-label="main mailbox folders">
                                <List className={classes.rootList}>
                                    <ListItem disablePadding component={Link} to={`/user/${id}`}>
                                        <ListItemButton
                                            selected={selectedIndex === 0}
                                            onClick={(event) => handleListItemClick(event, 0)}
                                        >
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="User Information" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/change-infor`}>
                                        <ListItemButton
                                            selected={selectedIndex === 1}
                                            onClick={(event) => handleListItemClick(event, 1)}
                                        >
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Change password" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List className={classes.rootList}>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 2}
                                            onClick={(event) => handleListItemClick(event, 2)}>
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
                    <Grid item xs={12} sm={10}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default ProfileLayout;