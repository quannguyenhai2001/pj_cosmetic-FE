import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteSearchListProducts, fetchAsyncSearchProducts } from 'slices/ProductSlice';
import ListProducts from './components/ListProducts/ListProducts';

const SearchScreen = () => {
    let { search } = useLocation();
    const dispatch = useDispatch();
    const query = new URLSearchParams(search);
    const paramValue = query.get('value');
    React.useEffect(() => {
        dispatch(fetchAsyncSearchProducts({ value: paramValue }));
        return () => {
            dispatch(deleteSearchListProducts());
        };
    }, [dispatch, paramValue]);
    return (
        <Box sx={{ minHeight: 'fit-content', marginBottom: '3rem' }}>
            <Container maxWidth="xl">
                <Typography variant="h5" sx={{ margin: "2rem 0" }}>Search results for '{paramValue}'</Typography>
                <ListProducts />
            </Container>
        </Box>
    );
};

export default SearchScreen;