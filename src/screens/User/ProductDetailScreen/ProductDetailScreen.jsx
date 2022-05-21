import { Container, Typography, Grid, Button, Box, Paper, Divider } from '@mui/material';
import { productImages } from 'assets/img/imgProductDetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncAddProductToCart, fetchAsyncGetDetailProduct, fetchAsyncGetListCommentByProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import CommentList from './components/CommentList/CommentList';
import InpuntComment from './components/InpuntComment/InpuntComment';
import ProductImagesSlider from './components/productImagesSlider';
import useStyles from './styles';
const ProductDetailScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const detailProduct = useSelector(state => state.product.detailProduct);
    const listProductInCart = useSelector(state => state.product.listProductInCart);
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        dispatch(fetchAsyncGetDetailProduct({ id }));
        dispatch(fetchAsyncGetListCommentByProduct({ id }));
    }, [dispatch, id]);

    //add product to cart
    const compare = (value1) => {
        return JSON.stringify(value1) === JSON.stringify(detailProduct)
    }
    const handleAddProduct = () => {

        if (!listProductInCart.some(compare)) {
            dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
                dispatch(fetchAsyncGetListProductInCart());
            }).catch(err => {
                console.log(err);
            })
        } else {
            Window.alert('Sản phẩm đã có trong giỏ hàng');
        }
    }


    return (
        <Container maxWidth='xl' sx={{ height: 'fit-content' }}>
            <Typography>Title</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <ProductImagesSlider images={productImages} />
                </Grid>
                <Grid item xs={12} sm={7} sx={{ fontSize: '3rem' }}>
                    <Typography variant='h6' sx={{ fontWeight: 650 }}>{detailProduct.productName}</Typography>
                    <Typography variant='subtitle1' >{detailProduct.manufacturersName}</Typography>
                    <Typography><Box component="span" sx={{ fontWeight: 650 }}>${detailProduct.price}.00</Box> or <span>$9.00 off your ASP order when you open and use a Sephora Credit Card today.</span></Typography>
                    <Typography>Size: {detailProduct.size}</Typography>
                    <Typography>Standard size</Typography>
                    <Button variant="outlined">8.5 oz/250 mL</Button><br />
                    <Button variant="contained" onClick={handleAddProduct}>Add to cart</Button>
                </Grid>
            </Grid>

            <Typography>description</Typography>

            <Box>
                <Divider></Divider>
                <InpuntComment />
                <CommentList />
            </Box>
        </Container >
    );
};

export default ProductDetailScreen;