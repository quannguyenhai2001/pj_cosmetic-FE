import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import useStyles from './styles';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
const ListProducts = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const ListProductsBySearch = useSelector(state => state.product.ListProductsBySearch);
    //rating
    const [valueRating, setValueRating] = React.useState(2);
    //navigate
    const handleClick = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Grid container spacing={4}>
            {ListProductsBySearch.length > 0 ?
                (ListProductsBySearch.map((product, index) => {
                    return (
                        <Grid item xs={2} key={index}>
                            <Card className={classes.rootCard} onClick={() => { handleClick(product.id) }}>
                                {/* sale */}
                                <Typography className={classes.sale} color="text.secondary">
                                    Sale: {product.promotion * 100}%
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="http://localhost/api/upload/products/product.png"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom noWrap sx={{ fontWeight: 650 }} component="div">
                                        {product.manufacturersName}
                                    </Typography>
                                    <Typography gutterBottom sx={{ height: 42 }} component="div">
                                        {product.productName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography color="text.primary" sx={{ fontWeight: 650 }}>
                                            ${product.price}.00
                                        </Typography>
                                        <Rating sx={{ positon: 'relative', top: '-2px' }}
                                            name="simple-controlled"
                                            value={valueRating}
                                            onChange={(event, newValue) => {
                                                setValueRating(newValue);
                                            }}
                                        />
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

    );
};

export default ListProducts;