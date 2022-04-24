import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const listProducts = useSelector(state => state.product.listProducts);
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/products/detail/${id}`);
    }
    // component={Link} to={`/products/${product.productName}`}
    return (
        <Grid container spacing={4}>
            {listProducts.length > 0 ?
                (listProducts.map((product, index) => {
                    return (
                        <Grid item xs={3} key={index}>
                            <Card sx={{ maxWidth: 345 }} onClick={() => { handleClick(product.id) }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="http://localhost/api/upload/download.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.productName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="h7" color="text.secondary">
                                            Price: ${product.price}
                                        </Typography>
                                        <Typography variant="h7" color="text.secondary">
                                            Sale: ${product.promotion * 100}%
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }))
                : (<Grid item xs={12} >
                    <h1>No products!</h1>
                </Grid>)}
        </Grid>

    )
}


