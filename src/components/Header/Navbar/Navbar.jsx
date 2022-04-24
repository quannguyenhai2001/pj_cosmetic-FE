import * as React from 'react';
import useStyles from './styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Badge, Divider, Drawer, IconButton, ListItemIcon, ListItemText, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteUserDetail } from 'slices/UserSlice';


//hide and show navbar
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

//box
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        border: '1px solid #dadde9',
    },
}));

export default function NavBar(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userDetail);
    const listProductInCart = useSelector(state => state.user.listProductInCart);
    const classes = useStyles();

    //drawer cart
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const list = () => (
        <Box
            sx={{ width: 400 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    //log out
    const logOutHandle = () => {
        dispatch(deleteUserDetail());
    }

    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.rootAppBarTop} elevation={0}>
                <Toolbar className={classes.rootToolBar}>
                    {/* <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                height="20"
                                image="https://www.sephora.com/img/ufe/logo.svg"
                                alt="green iguana"
                            />
                        </Card> */}

                    <Box component={Link} to="/" sx={{ width: "15rem", height: "3rem", margin: " 0 3rem" }}>
                        <img style={{ width: "100%", height: "100%" }} src="https://www.sephora.com/img/ufe/logo.svg" alt="green iguana" />
                    </Box>

                    <TextField
                        className={classes.searchInput}
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlinedIcon />
                                </IconButton>
                            )
                        }}
                    />

                    {user ?
                        (<>
                            {/* Store & Services */}
                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">Other</Typography>

                                    </>
                                }
                            >
                                <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 0 10rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <Badge badgeContent={2} color="primary">
                                            <ContactMailOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Typography>Store & Services</Typography>
                                </Box>
                            </CustomTooltip>

                            {/* Community */}
                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">Other</Typography>

                                    </>
                                }
                            >
                                <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <Badge badgeContent={2} color="primary">
                                            <ContactMailOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Typography>Community</Typography>
                                </Box>
                            </CustomTooltip>

                            {/* line */}
                            <Divider sx={{
                                height: "30px",
                                marginTop: "23px",
                                marginLeft: "11px"
                            }} orientation="vertical" variant="middle" flexItem />

                            {/* Profile */}
                            <CustomTooltip
                                title={
                                    <>
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                            <ListItem className={classes.rootListItem}>
                                                <Box sx={{ marginRight: 1 }}>
                                                    <AccountCircleIcon />
                                                </Box>
                                                <Typography component={Link} to={`/user/${user.id}`}>
                                                    Profile
                                                </Typography>
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.rootListItem} onClick={logOutHandle}>
                                                <Box sx={{ marginRight: 1 }}>
                                                    <LogoutIcon />
                                                </Box>
                                                <Typography>
                                                    Log out
                                                </Typography>
                                            </ListItem>

                                        </List>
                                    </>
                                }
                            >
                                <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                    <Avatar sx={{ bgcolor: deepOrange[500], height: "3rem", width: "3rem" }}>N</Avatar>
                                    <Typography sx={{ position: "relative" }}>{user.displayName}</Typography>
                                </Box>
                            </CustomTooltip>

                            {/* like */}
                            <IconButton component={Link} to="/like"
                                size="medium"
                                sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 4rem" }}
                            >
                                <Badge badgeContent={2} color="primary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>

                            {/* cart */}
                            <IconButton
                                size="medium"
                                sx={{ "&:hover": { color: "blue" }, margin: "0 3rem 0 0" }}
                            >
                                <Badge badgeContent={2} color="primary">
                                    <ShoppingBasketOutlinedIcon onClick={toggleDrawer(true)} />
                                    <Drawer
                                        anchor={'right'}
                                        open={state}
                                        onClose={toggleDrawer(false)}
                                    >
                                        {list()}
                                    </Drawer>
                                </Badge>
                            </IconButton>
                        </>) :
                        (
                            <>
                                <CustomTooltip
                                    title={
                                        <>
                                            <Typography color="inherit">
                                                You are not logged in!
                                            </Typography>
                                        </>
                                    }
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 0 10rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                        <IconButton
                                            size="medium"
                                            sx={{ "&:hover": { color: "blue" } }}
                                        >
                                            <StoreIcon />
                                        </IconButton>
                                        <Typography>Store & Services</Typography>
                                    </Box>
                                </CustomTooltip>

                                <CustomTooltip
                                    title={
                                        <>
                                            <Typography color="inherit">
                                                You are not logged in!
                                            </Typography>
                                        </>
                                    }
                                >

                                    <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                        <IconButton
                                            size="medium"
                                            sx={{ "&:hover": { color: "blue" } }}
                                        >
                                            <PeopleIcon />
                                        </IconButton>
                                        <Typography>Community</Typography>
                                    </Box>
                                </CustomTooltip>

                                <Divider sx={{
                                    height: "30px",
                                    marginTop: "23px",
                                    marginLeft: "11px"
                                }} orientation="vertical" variant="middle" flexItem />

                                <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                    <Typography component={Link} to="/sign-in">Sign In</Typography>
                                </Box>

                                <IconButton component={Link} to="/sign-in"
                                    size="medium"
                                    aria-label="Like"
                                    sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 4rem" }}
                                >
                                    <FavoriteBorderIcon />
                                </IconButton>

                                <IconButton component={Link} to="/sign-in"
                                    size="medium"
                                    aria-label="Like"
                                    sx={{ "&:hover": { color: "blue" }, margin: "0 3rem 0 0" }}
                                >

                                    <ShoppingBasketOutlinedIcon />

                                </IconButton>
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}