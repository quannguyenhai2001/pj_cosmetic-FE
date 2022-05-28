
import { Box, CardMedia, Divider, Grid, Typography, Rating } from '@mui/material';
import React, { memo } from 'react';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import useStyles from './styles';
import { fetchAsyncGetListProductOfBill } from 'slices/ProductSlice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const DeliveryScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const listProductsInOrder = useSelector(state => state.product.listProductsInOrder);

    React.useEffect(() => {
        dispatch(fetchAsyncGetListProductOfBill())
    }, [dispatch]);


    const [listDeliveringOrder, setListDeliveringOrder] = React.useState([]);
    React.useEffect(() => {
        if (listProductsInOrder.length > 0) {
            let a = []
            listProductsInOrder.forEach(element => {
                if (element.status === 'Pending') {
                    a.push(element)
                }
            })
            setListDeliveringOrder(a)
        }

    }, [listProductsInOrder]);

    return (
        <Box sx={{ padding: '2rem 0' }}>
            {
                listDeliveringOrder.length > 0 ?
                    (listDeliveringOrder.map((item, index) => {
                        return (<Box sx={{ marginBottom: '3rem' }} key={index}>
                            <Card sx={{ minWidth: 275, padding: '2rem 2rem' }} elevation={4}>
                                <Box sx={{ marginBottom: '1rem' }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={1}>
                                            {item.image ? (<CardMedia
                                                component="img"
                                                height="80"
                                                image={JSON.parse(item.image)[0]}
                                                alt="green iguana"
                                            />) : (
                                                <CardMedia className={classes.rootCardMedia}
                                                    component="img"
                                                    height="80"
                                                    image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                                    alt="green iguana"
                                                />
                                            )}
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Typography sx={{
                                                fontSize: '1.5rem',
                                                marginBottom: '1rem'
                                            }}>
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                sx={{

                                                    marginBottom: '1rem'
                                                }}
                                            >
                                                Manufacture: {item.ManufacturerName}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography>
                                                    Quantity: {item.amount}
                                                </Typography>
                                                <Box>
                                                    <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '1rem', textDecoration: 'line-through', opacity: '70%' }}>
                                                        ${item.price}
                                                    </Typography>
                                                    <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                        ${parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </Box>
                                <Divider />
                                <Box sx={{ textAlign: 'right', margin: '1.5rem 0' }}>
                                    Total:
                                    <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                        ${((parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)) * item.amount).toFixed(2)}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                    <Box sx={{ display: 'flex', gap: '1rem', color: 'red' }}>
                                        <LocalShippingIcon />
                                        <Typography >Product is being delivered</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '2rem' }}>
                                        <Button variant="contained" sx={{ width: '8rem' }} disabled>WAIT</Button>
                                        <Button variant="outlined">CONTACT SELLER</Button>
                                    </Box>
                                </Box>
                            </Card>

                        </Box>)
                    })) : (
                        <Box sx={{ height: '60vh', display: 'grid', placeItems: 'center' }}>
                            <img style={{ width: '16rem' }} src={require('assets/img/order/img1.png')} alt='img' />
                            <Typography sx={{ fontSize: '2rem', fontWeight: '600', color: '#828282' }}>
                                You don't have any delivered order yet
                            </Typography>
                        </Box>
                    )



            }
        </Box>
    );
};

export default memo(DeliveryScreen);



