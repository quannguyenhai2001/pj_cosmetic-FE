import * as React from 'react';
import useStyles from './styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Badge, Container, Divider, IconButton, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteUserDetail } from 'slices/UserSlice';
import Cart from './components/Cart/Cart';
import logo from 'assets/img/logo/logo_web.png';
import ReceiptIcon from '@mui/icons-material/Receipt';
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
            width: '30px',
            height: '30px',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

//box
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip arrow={true} {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        border: '1px solid #dadde9',
        position: 'relative',
        top: '-10px',
    },
}));

export default function NavBar(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user.userDetail);
    const classes = useStyles();


    //log out
    const logOutHandle = () => {
        dispatch(deleteUserDetail());
    }

    //search
    const [searchValue, setSearchValue] = React.useState('');
    const handleChangeSearch = (event) => {
        setSearchValue(event.target.value);

    };
    const handleKeyDownSearch = (event) => {
        if (event.keyCode === 13) {
            if (searchValue !== '') {
                navigate('/search?value=' + searchValue);
            }
            else {
                navigate('/');
            }
        }
    };

    return (
        <Container maxWidth="xl">
            <HideOnScroll {...props}>
                <AppBar className={classes.rootAppBarTop} elevation={0}>
                    <Toolbar className={classes.rootToolBar}>
                        <Box component={Link} to="/" sx={{ width: "15rem", height: "2.8rem", marginRight: 4 }}>
                            <img style={{ width: "100%", height: "100%" }} src={logo} alt="green iguana" />
                        </Box>

                        <TextField onChange={handleChangeSearch} onKeyDown={handleKeyDownSearch}
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
                                                <ListItem className={classes.rootListItem} disablePadding>
                                                    <Box sx={{ marginRight: 1 }}>
                                                        <AccountCircleIcon />
                                                    </Box>
                                                    <Typography component={Link} to={`/user/${user.id}`} sx={{ transform: 'translateY(-1px)' }}>
                                                        Profile
                                                    </Typography>

                                                </ListItem>
                                                <ListItem className={classes.rootListItem1} disablePadding>
                                                    <Box sx={{ marginRight: 1 }}>
                                                        <ReceiptIcon />
                                                    </Box>
                                                    <Typography component={Link} to={`/user/${user.id}/order/all`} sx={{ transform: 'translateY(-1px)' }}>
                                                        Purchase Order
                                                    </Typography>

                                                </ListItem>

                                                <Divider sx={{ margin: '0.5rem 0' }} />
                                                <ListItem className={classes.rootListItem2} onClick={logOutHandle} disablePadding>
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
                                        {user.avatar ? (
                                            <Avatar className={classes.rootAvatar} src={user.avatar} />
                                        ) : (
                                            <Avatar className={classes.rootAvatar} {...stringAvatar(user.displayName)} />
                                        )}
                                        <Typography sx={{ position: "relative", marginLeft: 1 }}>{user.displayName}</Typography>
                                    </Box>
                                </CustomTooltip>

                                {/* like */}
                                <IconButton component={Link} to="/like"
                                    size="medium"
                                    sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 4rem" }}
                                >
                                    <Badge badgeContent={0} color="primary">
                                        <FavoriteBorderIcon />
                                    </Badge>
                                </IconButton>

                                {/* cart */}
                                <Cart />
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
                                        sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 1rem" }}
                                    >

                                        <ShoppingBasketOutlinedIcon />

                                    </IconButton>
                                </>
                            )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Container>
    );
}