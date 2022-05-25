import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
const ListProducts = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const ListProductsBySearch = useSelector(state => state.product.ListProductsBySearch);
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
                                {Number(product.promotion) > 0 ?
                                    (<Typography className={classes.sale} color="text.secondary">
                                        Sale: {product.promotion * 100}%
                                    </Typography>) : null}
                                {product.image ? (<CardMedia className={classes.rootCardMedia}
                                    component="img"
                                    height="220"
                                    image={JSON.parse(product.image)[0]}
                                    alt="green iguana"
                                />) : (
                                    <CardMedia className={classes.rootCardMedia}
                                        component="img"
                                        height="220"
                                        image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                        alt="green iguana"
                                    />
                                )}
                                <CardContent>
                                    <Typography gutterBottom noWrap sx={{ fontWeight: 650 }} component="div">
                                        {product.manufacturersName}
                                    </Typography>
                                    <Typography gutterBottom sx={{ height: 42 }} component="div">
                                        {product.productName}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {parseFloat(product.promotion) > 0 ?
                                            (<>
                                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', textDecoration: 'line-through' }}>
                                                    ${product.price}.00
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                    ${parseFloat(product.price - (product.price * product.promotion), 2).toFixed(2)}
                                                </Typography>
                                            </>) : (
                                                <>
                                                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '600', }}>
                                                        ${product.price}.00
                                                    </Typography>
                                                </>
                                            )}
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