import { Container, Typography, Grid, Button, Box, Paper, Divider, Rating } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteDetailProduct, fetchAsyncAddProductToCart, fetchAsyncGetDetailProduct, fetchAsyncGetListCommentByProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import CommentList from './components/CommentList/CommentList';
import Description from './components/Description/Description';
import InpuntComment from './components/InpuntComment/InpuntComment';
import ProductImagesSlider from './components/productImagesSlider';
import SlideProductRelative from './components/SlideProductRelative/SlideProductRelative';
import useStyles from './styles';
const ProductDetailScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const detailProduct = useSelector(state => state.product.detailProduct);
    const listAllProducts = useSelector(state => state.product.listAllProducts);
    const params = useParams();
    const { id } = params;


    useEffect(() => {
        dispatch(fetchAsyncGetDetailProduct({ id }));
        dispatch(fetchAsyncGetListCommentByProduct({ id }));
        return () => {
            dispatch(deleteDetailProduct())
        }
    }, [dispatch, id]);

    //add product to cart
    const compare = (value1) => {
        return JSON.stringify(value1) === JSON.stringify(detailProduct)
    }
    const handleAddProduct = () => {
        dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductInCart());
        }).catch(err => {
            console.log(err);
        })

    }


    return (
        <Container maxWidth='xl' sx={{ height: 'fit-content', bgColor: 'gray' }}>
            <Typography>Title</Typography>
            <Box sx={{ marginBottom: '4rem' }}>
                {Object.keys(detailProduct).length > 0 && (
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={5}>
                            {detailProduct.image && <ProductImagesSlider images={JSON.parse(detailProduct.image)} />}
                        </Grid>
                        <Grid item xs={12} sm={7} sx={{ fontSize: '3rem' }}>
                            <Typography variant='h6' sx={{ fontWeight: 650 }}>{detailProduct.productName}</Typography>

                            <Typography variant='subtitle1' sx={{
                                marginBottom: '1rem'
                            }} >{detailProduct.manufacturersName}</Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '1rem'
                            }}>
                                <Typography className={classes.typoRating}>{parseFloat(detailProduct.rating.average, 10)}</Typography>
                                <Rating className={classes.rootRating} name="half-rating-read" defaultValue={parseFloat(detailProduct.rating.average, 10)} precision={0.5} readOnly />
                                <Divider orientation="vertical" flexItem />
                                <Typography className={classes.typoRating}>{parseFloat(detailProduct.rating.userNumber, 10)} rating</Typography>
                            </Box>

                            <Typography><Box component="span" sx={{ fontWeight: 650, fontSize: '2rem' }}>${detailProduct.price}.00</Box> or <span >$9.00 off your ASP order when you open and use a Sephora Credit Card today.</span></Typography>
                            <Typography>Size: {detailProduct.size}</Typography>
                            <Typography>Standard size</Typography>
                            <Button variant="outlined">8.5 oz/250 mL</Button><br />
                            <Button variant="contained" onClick={handleAddProduct}>Add to cart</Button>
                        </Grid>
                    </Grid>
                )}
            </Box>
            <Divider />
            <Grid container spacing={5}>
                <Grid item xs={9}>
                    <Box>
                        <Description />
                    </Box>
                    <Box>
                        <SlideProductRelative />
                    </Box>
                    <Box>
                        {/* <Divider></Divider> */}
                        <InpuntComment />
                        <CommentList />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={1} >
                        {/* <Typography variant='subtitle1'> Famous Brands </Typography> */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '2rem', height: 'fit-content', marginBottom: '5rem' }}>
                            <img src={require('assets/img/detail-product/img-brand/img1.webp')} alt="img" />
                            <img src={require('assets/img/detail-product/img-brand/img2.webp')} alt="img" />
                            <img src={require('assets/img/detail-product/img-brand/img3.jpg')} alt="img" />
                            <img src={require('assets/img/detail-product/img-brand/img4.jpg')} alt="img" />
                            <img src={require('assets/img/detail-product/img-brand/img5.webp')} alt="img" />
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

        </Container >
    );
};

export default memo(ProductDetailScreen);