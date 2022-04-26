import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteListProducts, fetchAsyncGetManu } from 'slices/ProductSlice';
import Filter from './components/Filter/Filter';
import Products from './components/Products/Products';
import useStyles from './styles';
import { fetchAsyncGetListProductByChidCategories } from 'slices/ProductSlice';
const ProductsScreen = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const params = useParams();

    //get title category
    const mainCategories = useSelector(state => state.product.mainCategories);
    const [titleCategory, setTitleCategory] = React.useState({});

    useEffect(() => {
        mainCategories.forEach(category => {
            category.listChildCategories.forEach(childCategory => {
                if (childCategory.id === params.categoryId) {
                    setTitleCategory({ fatherCategory: category, childCategory });
                }
            })
        })
    }, [mainCategories, params.categoryId]);

    //get manu and list product
    useEffect(() => {
        dispatch(fetchAsyncGetListProductByChidCategories({ id: params.categoryId }))
        dispatch(fetchAsyncGetManu())
        return () => {
            dispatch(deleteListProducts());
            console.log('unmount');
        }

    }, [dispatch, params.categoryId]);

    return (
        <Container maxWidth="xl" className={classes.screen}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography sx={{ marginBottom: '1rem' }}>
                        {Object.keys(titleCategory).length > 0 ?
                            (<>
                                {titleCategory.fatherCategory.name} &gt; {titleCategory.childCategory.name}
                            </>)
                            : ''}
                    </Typography>
                    <Filter />
                </Grid>
                <Grid item xs={10}>
                    <Products />
                </Grid>
            </Grid>
            <Box>
                <Typography>Product related</Typography>
            </Box>
        </Container >

    );
};

export default ProductsScreen;