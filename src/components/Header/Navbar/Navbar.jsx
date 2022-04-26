import * as React from 'react';
import useStyles from './styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Badge, Button, CardMedia, Container, Divider, Drawer, Grid, IconButton, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteUserDetail } from 'slices/UserSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { productImages } from 'assets/img/imgProductDetail';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
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
    const navigate = useNavigate();
    const user = useSelector(state => state.user.userDetail);
    const listProductInCart = useSelector(state => state.product.listProductInCart);
    const classes = useStyles();

    //drawer cart
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };


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


    //list product in cart
    const handleClick = () => {
        console.log("click")
    }
    const RenderlistProductInCart = () => (
        <Box className={classes.cartBox}>
            {listProductInCart.length > 0 ?
                (listProductInCart.map((item, index) => (
                    <Card className={classes.cartCard} key={index}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', height: '100%' }}
                                    image={productImages[0]}
                                    alt="Live from space album cover"
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <CardContent>
                                    <Typography gutterBottom>
                                        {item.product.productsName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="span" sx={{ marginRight: '2rem' }}>
                                        Price: ${item.product.price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="span">
                                        Sale: {item.product.promotion * 100}%
                                    </Typography>
                                </CardContent>
                                <Button variant="outlined" startIcon={<RemoveIcon onClick={handleClick} />} endIcon={<AddIcon onClick={handleClick} />}>
                                    {item.quantity}
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                )))
                : null
            }
        </Box>
    );
    //log out
    const logOutHandle = () => {
        dispatch(deleteUserDetail());
    }

    return (
        <Container maxWidth="xl">
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

                        <Box component={Link} to="/" sx={{ width: "15rem", height: "3rem", marginRight: 4 }}>
                            <img style={{ width: "100%", height: "100%" }} src="https://www.sephora.com/img/ufe/logo.svg" alt="green iguana" />
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
                                        <Avatar {...stringAvatar(user.displayName)} />
                                        <Typography sx={{ position: "relative", marginLeft: 1 }}>{user.displayName}</Typography>
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
                                    sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 1rem" }}
                                >
                                    <Badge badgeContent={listProductInCart.length > 0 ? listProductInCart.length : null} color="primary">
                                        <ShoppingBasketOutlinedIcon onClick={toggleDrawer(true)} />
                                        <Drawer className={classes.cartDrawer}
                                            anchor={'right'}
                                            open={state}
                                            onClose={toggleDrawer(false)}
                                        >
                                            {RenderlistProductInCart()}
                                            <div className={classes.cartDivButton} onClick={toggleDrawer(false)}>
                                                <Button component={Link} to={`/user/${user.id}/payment`} className={classes.cartButtonOrder} fullWidth variant="contained">ORDER</Button>
                                            </div>
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