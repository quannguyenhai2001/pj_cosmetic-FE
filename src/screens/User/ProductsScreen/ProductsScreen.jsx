import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteListProducts, fetchAsyncGetManu } from 'slices/ProductSlice';
import Filter from './components/Filter/Filter';
import Products from './components/Products/Products';
import useStyles from './styles';

const ProductsScreen = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const params = useParams();

    //get title category
    const listCategories = useSelector(state => state.product.listCategories);
    const [titleCategory, setTitleCategory] = React.useState({});
    useEffect(() => {
        listCategories.forEach(category => {
            category.listChildCategories.forEach(childCategory => {
                if (childCategory.id === params.categoryId) {
                    setTitleCategory({ fatherCategory: category, childCategory });
                }
            })
        })
    }, [listCategories, params.categoryId]);

    //get manu and delete list manu
    useEffect(() => {
        dispatch(fetchAsyncGetManu())
        return () => {
            dispatch(deleteListProducts());
        }
    }, [dispatch, params.categoryId]);


    //page panigation
    const [page, setPage] = React.useState(0);

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
                    <Filter page={page} />
                </Grid>
                <Grid item xs={10}>
                    <Products page={setPage} />
                </Grid>
            </Grid>
            <Box>
                <Typography>Product related</Typography>
            </Box>
        </Container >

    );
};

export default ProductsScreen;