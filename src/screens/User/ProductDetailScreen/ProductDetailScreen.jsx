import { Container, Typography, Grid, Button, Box, Paper, Divider, Rating } from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteDetailProduct, fetchAsyncAddProductToCart, fetchAsyncGetDetailProduct, fetchAsyncGetListCommentByProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import { Toast } from 'utils/Toast';
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
    const params = useParams();
    const { id } = params;


    useEffect(() => {
        dispatch(fetchAsyncGetDetailProduct({ id }));
        dispatch(fetchAsyncGetListCommentByProduct({ id }));
        return () => {
            dispatch(deleteDetailProduct())
        }
    }, [dispatch, id]);


    const handleAddProduct = () => {
        dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
            Toast('success', 'Add to cart success!');
            dispatch(fetchAsyncGetListProductInCart());
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <Container maxWidth='xl' sx={{ height: 'fit-content', marginBottom: '3rem', bgColor: 'gray' }}>
            {/* <Typography>Title</Typography> */}
            <Box sx={{ marginBottom: '4rem', marginTop: '3rem' }} className={classes.boxDetail}>
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

                            <Box className={classes.boxRating}>
                                <Typography className={classes.typoRating1}>{parseFloat(detailProduct.rating.average, 10)}</Typography>
                                <Rating className={classes.rootRating} name="half-rating-read" defaultValue={parseFloat(detailProduct.rating.average, 10)} precision={0.5} readOnly />
                                <Divider orientation="vertical" flexItem />
                                <Typography className={classes.typoRating2}>{parseFloat(detailProduct.rating.userNumber, 10)} Rating</Typography>
                            </Box>

                            {parseFloat(detailProduct.promotion) > 0 ?
                                (<Box className={classes.boxPrice}>
                                    <Typography gutterBottom sx={{ fontSize: '1.4rem', fontWeight: '100', opacity: '70%', textDecoration: 'line-through' }}>
                                        ${detailProduct.price}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                        ${parseFloat(detailProduct.price - (detailProduct.price * detailProduct.promotion), 2).toFixed(2)}
                                    </Typography>
                                    <Typography>
                                        {detailProduct.promotion * 100}% sale off
                                    </Typography>
                                </Box>) : (
                                    <Box className={classes.boxPrice}>
                                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '600', }}>
                                            ${detailProduct.price}
                                        </Typography>
                                    </Box>
                                )}

                            {/* code */}
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSale}>
                                    <Typography>
                                        Shop Discount Code
                                    </Typography>
                                    <Box>
                                        <Button variant="contained">5% off</Button>
                                        <Button variant="contained">10% off</Button>
                                        <Button variant="contained">15% off</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSize}>
                                    <Typography>Size</Typography>
                                    <Box>
                                        {detailProduct.size === "Small" ?
                                            (<>
                                                <Button variant="outlined" color="primary">Small</Button>
                                                <Button variant="outlined" color="primary" disabled>Medium</Button>
                                            </>) :
                                            (<>
                                                <Button variant="outlined" color="primary" disabled>Small</Button>
                                                <Button variant="outlined" color="primary" >Medium</Button>
                                            </>)}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSize}>
                                    <Typography>Standard size</Typography>
                                    <Box>
                                        {detailProduct.size === "Small" ?
                                            (<>
                                                <Button variant="outlined" color="primary">8.5 oz/250 mL</Button>
                                                <Button variant="outlined" color="primary" disabled>3.04 oz/90 mL</Button>
                                            </>) :
                                            (<>
                                                <Button variant="outlined" color="primary" disabled>8.5 oz/250 mL</Button>
                                                <Button variant="outlined" color="primary" >3.04 oz/90 mL</Button>
                                            </>)}
                                    </Box>
                                </Box>
                            </Box>

                            <Button variant="contained" className={classes.buttonCart} onClick={handleAddProduct}>Add to cart</Button>
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