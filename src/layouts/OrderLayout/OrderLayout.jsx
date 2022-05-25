import Footer from 'components/Footer';
import Header from 'components/Header/Header';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Avatar, Grid, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStyles from './styles';
import StringAvatar from 'utils/StringAvatar';
import TabContent from './TabContent/TabContent';

const ProfileLayout = (props) => {
    const classes = useStyles();
    const { children } = props;
    const { id, displayName, avatar } = useSelector(state => state.user.userDetail)
    //select list item
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const params = useLocation();

    React.useEffect(() => {
        if (params.pathname.includes('order')) {
            setSelectedIndex(2)
        }
        else if (params.pathname.includes('change-password')) {
            setSelectedIndex(1)
        }
        else {
            setSelectedIndex(0)
        }


    }, [params])

    return (
        <Box>
            <Header />
            <Box sx={{ overflowX: 'hidden', padding: '2rem 5rem', minHeight: '90vh', bgcolor: 'rgb(245,245,245)' }}>
                <Box sx={{ display: 'flex', padding: '2rem 0' }}>
                    {avatar ? (
                        <Avatar className={classes.rootAvatar} src={avatar} />
                    ) : (
                        <Avatar className={classes.rootAvatar} {...StringAvatar(displayName)} />
                    )}
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
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <AccountCircleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="User Information" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/change-password`}>
                                        <ListItemButton
                                            selected={selectedIndex === 1}
                                            onClick={(event) => handleListItemClick(event, 1)}
                                        >
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <LockResetIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Change password" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List className={classes.rootList}>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/order`}>
                                        <ListItemButton selected={selectedIndex === 2}
                                            onClick={(event) => handleListItemClick(event, 2)}>
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <InventoryIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Order" />
                                        </ListItemButton>
                                    </ListItem >
                                    <ListItem disablePadding component={Link} to={`/user/${id}/delete-account`}>
                                        <ListItemButton
                                            selected={selectedIndex === 3}
                                            onClick={(event) => handleListItemClick(event, 3)}
                                        >
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <DeleteForeverIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Setting" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Box sx={{ bgcolor: 'white', width: '100%', padding: '0 2rem' }}>
                            <TabContent children={children} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default memo(ProfileLayout);