import { Container, Typography, Grid, Button } from '@mui/material';
import { productImages } from 'assets/img/imgProductDetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncAddProductToCart, fetchAsyncGetDetailProduct, fetchAsyncGetListProductInCart } from 'slices/ProductSlice';
import ProductImagesSlider from './components/product-images-slider';

const ProductDetailScreen = () => {
    const dispatch = useDispatch();
    const detailProduct = useSelector(state => state.product.detailProduct);
    const params = useParams();
    const { id } = params;
    useEffect(() => {
        dispatch(fetchAsyncGetDetailProduct({ id }));
    }, [dispatch, id]);

    const handleAddProduct = () => {
        dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductInCart());
        }).catch(err => {
            console.log(err);
        })
    }

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
        </Container>
    );
};

export default ProductDetailScreen;