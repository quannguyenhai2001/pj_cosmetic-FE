import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { Badge, Button, CardMedia, Drawer, Grid, IconButton, Typography, Stack } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { productImages } from 'assets/img/imgProductDetail';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { fetchAsyncDecreaseQuantityProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userDetail);
    const listProductInCart = useSelector(state => state.product.listProductInCart);
    const classes = useStyles();
    //cart
    React.useEffect(() => {
        dispatch(fetchAsyncGetListProductInCart())
    }, [dispatch])
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
                                    alt="product"
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <CardContent className={classes.rootCartContent}>

                                    <Typography noWrap gutterBottom>
                                        {item.product.productsName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', margin: '1rem 0' }}>
                                        <Typography variant="body2" color="textSecondary" sx={{ marginRight: '2rem' }}>
                                            Price: ${item.product.price}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" >
                                            Sale: {item.product.promotion * 100}%
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                                        <Box>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <IconButton aria-label="delete" size="small">
                                                    <RemoveIcon fontSize="inherit" />
                                                </IconButton>
                                                <Typography>{item.quantity}</Typography>
                                                <IconButton aria-label="delete" size="small">
                                                    <AddIcon fontSize="inherit" />
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                        <IconButton aria-label="delete" size="small" sx={{ transformX: '2rem' }}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </Stack>

                                </CardContent>


                            </Grid>
                        </Grid>
                    </Card>
                )))
                : (
                    <Typography sx={{ display: 'grid', placeItems: 'center', height: 'inherit' }}>
                        Cart is empty
                    </Typography>
                )
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