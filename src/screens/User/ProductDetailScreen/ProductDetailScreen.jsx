import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { productImages } from 'assets/img/imgProductDetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncAddProductToCart, fetchAsyncGetDetailProduct, fetchAsyncGetListCommentByProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import CommentList from './components/CommentList/CommentList';
import InpuntComment from './components/InpuntComment/InpuntComment';
import ProductImagesSlider from './components/productImagesSlider';

const ProductDetailScreen = () => {
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


    console.log(detailProduct);
    return (
        <Container maxWidth='xl' sx={{ height: 'fit-content' }}>
            <Typography>Title</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <ProductImagesSlider images={productImages} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Typography>{detailProduct.productName}</Typography>
                    <Typography>{detailProduct.description}</Typography>
                    <Typography>{detailProduct.price}</Typography>
                    <Typography>{detailProduct.manufacturersName}</Typography>
                    <Typography>{detailProduct.promotion}</Typography>
                    <Button variant="contained" onClick={handleAddProduct}>Add to cart</Button>
                </Grid>
            </Grid>
            <Typography>tag</Typography>
            <Typography>description</Typography>
            <Typography>Comment</Typography>
            <Typography>Product relative</Typography>
            <Box>
                <InpuntComment />
                <CommentList />
            </Box>
        </Container>
    );
};

export default ProductDetailScreen;