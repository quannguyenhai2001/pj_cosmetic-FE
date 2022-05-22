import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box, Grid, Pagination, Skeleton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import Rating from '@mui/material/Rating';

const Products = (props) => {
    const classes = useStyles();
    const listProducts = useSelector(state => state.product.listProducts);
    const errorListProducts = useSelector(state => state.product.errorListProducts);
    const navigate = useNavigate();
    const [valueRating, setValueRating] = React.useState(2);

    //navigate
    const handleClick = (id) => {
        navigate(`/products/detail/${id}`);
    }

    //skeleton
    let arraySkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    //pagination
    const handleChange = (event, value) => {
        props.setPage(value);
    };

    //render lissProducts
    let renderList = Object.keys(listProducts).length > 0 ?
        (<Grid container spacing={4}>
            {listProducts.data.map((product, index) => {
                return (
                    <Grid item xs={3} key={index}>
                        <Card className={classes.rootCard} onClick={() => { handleClick(product.id) }}>
                            {/* sale */}
                            {Number(product.promotion) > 0 ?
                                (<Typography className={classes.sale} color="text.secondary">
                                    Sale: {product.promotion * 100}%
                                </Typography>) : null}
                            {/* image */}
                            <CardMedia className={classes.rootCardMedia}
                                component="img"
                                height="220"
                                image="https://res.cloudinary.com/cosmeticv1/image/upload/v1653222162/myfolder/mysubfolder/Product17_2_fhe5qr.webp"
                                alt="green iguana"
                            />
                            {/* content */}
                            <CardContent>
                                <Typography gutterBottom noWrap sx={{ fontWeight: 650 }} component="div">
                                    {product.manufacturersName}
                                </Typography>
                                <Typography gutterBottom sx={{ height: 42 }} component="div">
                                    {product.productsName}
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
            })}
        </Grid>)
        : (
            <Grid container spacing={4}>
                {arraySkeleton.map((item, index) => {
                    return (
                        <Grid item xs={3} key={index} >
                            <Stack spacing={3}>
                                <Skeleton variant="rectangular" width="100%" height={220} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        )
    //rating

    return (
        <Box>
            <Typography sx={{ marginBottom: '1rem' }} color="text.secondary">
                {listProducts.total} Results
            </Typography>
            <Box>
                {
                    !errorListProducts ?
                        (
                            <>
                                {renderList}
                                <Box sx={{ margin: '5rem 0', textAlign: 'center' }}>
                                    <Stack spacing={2} className={classes.stackPagination}>
                                        <Pagination count={listProducts.pageTotal} color="primary" size="large" page={props.page} shape="rounded" variant="outlined" onChange={handleChange} />
                                    </Stack>
                                </Box>
                            </>
                        ) :
                        (<Grid item xs={12}>
                            No Product!
                        </Grid>)
                }
            </Box>
        </Box>
    )
}


export default React.memo(Products);
