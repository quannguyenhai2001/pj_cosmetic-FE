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
import { fetchAsyncDecreaseQuantityProduct } from 'slices/ProductSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userDetail);
    const listProductInCart = useSelector(state => state.product.listProductInCart);
    const classes = useStyles();
    //cart
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const handleClickIncrease = () => {
        console.log('fsfs')
    }
    const handleClickDecrease = (e) => {
        dispatch(fetchAsyncDecreaseQuantityProduct({ id: e }))
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
                                <Button variant="outlined" startIcon={<RemoveIcon onClick={() => handleClickDecrease(item.id)} />} endIcon={<AddIcon onClick={handleClickIncrease} />}>
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
    return (
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
    );
};

export default Cart;