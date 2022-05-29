import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { Badge, Button, CardMedia, Drawer, Grid, IconButton, Typography, Stack, Paper } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { fetchAsyncAddProductToCart, fetchAsyncDecreaseQuantityProduct, fetchAsyncDeleteProductInCart, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import { Toast } from 'utils/Toast';

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
    const handleClickIncrease = (id) => {
        dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductInCart());
        }).catch(err => {
            console.log(err);
        })

    }
    const handleClickDecrease = (id) => {
        dispatch(fetchAsyncDecreaseQuantityProduct({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductInCart());
        }).catch(err => {
            console.log(err);
        })
    }
    const handleClickDelete = (id) => {
        dispatch(fetchAsyncDeleteProductInCart({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductInCart());
            Toast('success', 'Delete product success!');
        }).catch(err => {
            console.log(err);
        })
    }


    const RenderlistProductInCart = () => (
        <Box className={classes.cartBox}>
            {listProductInCart.length > 0 ?
                (listProductInCart.map((item, index) => (
                    <Card className={classes.cartCard} key={index}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                {Number(item.promotion) > 0 ?
                                    (
                                        <Box className={classes.sale}>
                                            <span className="home-product-item__sale-off-percent">{item.promotion * 100}%</span>

                                        </Box>

                                    ) : null}

                                {item.image ? (<CardMedia
                                    component="img"
                                    sx={{ width: '100%', height: '100%' }}
                                    image={JSON.parse(item.image)[0]}
                                    alt="green iguana"
                                />) : (
                                    <CardMedia className={classes.rootCardMedia}
                                        component="img"
                                        sx={{ width: '100%', height: '100%' }}
                                        image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                        alt="green iguana"
                                    />
                                )}
                            </Grid>
                            <Grid item xs={9}>
                                <CardContent className={classes.rootCartContent}>
                                    <Typography noWrap gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', margin: '1rem 0' }}>
                                        <Typography variant="body2" color="textSecondary" sx={{ marginRight: '2rem' }}>
                                            Price:  ${parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" >
                                            Total: ${((parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)) * item.quantity).toFixed(2)}
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                                        <Box>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <IconButton disabled={item.quantity === '1' ? true : false} aria-label="delete" size="small" onClick={() => handleClickDecrease(item.id)} >
                                                    <RemoveIcon fontSize="inherit" />
                                                </IconButton>
                                                <Typography>{item.quantity}</Typography>
                                                <IconButton aria-label="delete" size="small" onClick={() => handleClickIncrease(item.id)}>
                                                    <AddIcon fontSize="inherit" />
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                        <IconButton aria-label="delete" size="small" sx={{ transformX: '2rem' }} onClick={() => handleClickDelete(item.id)}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </Stack>

                                </CardContent>


                            </Grid>
                        </Grid>
                    </Card>
                )))
                : (
                    <Typography sx={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
                        Cart is empty!
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

                    {/* total */}
                    <Box className={classes.cartBoxTotal} onClick={toggleDrawer(false)}>
                        <Paper className={classes.cartBoxTotalPaper} elevation={3}>
                            <Typography>
                                Total payment ({listProductInCart.length} products): ${listProductInCart.reduce((total, item) => {
                                    return total + (item.price - (item.price * item.promotion)) * item.quantity
                                }, 0).toFixed(2)}
                            </Typography>

                        </Paper>
                    </Box>

                    {/* button order */}
                    <Box className={classes.cartDivButton} onClick={toggleDrawer(false)}>
                        <Button component={Link} to={`/user/${user.id}/payment`} className={classes.cartButtonOrder} disabled={listProductInCart.length > 0 ? false : true} fullWidth variant="contained">ORDER</Button>
                    </Box>
                </Drawer>
            </Badge>
        </IconButton>
    );
};

export default Cart;