import { Box, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useStyles from './styles';
const AllOrderScreen = () => {
    const classes = useStyles();
    return (
        <Box sx={{ padding: '2rem 0' }}>
            <Box>
                <Card sx={{ minWidth: 275, padding: '1rem 1rem' }}>
                    <Box sx={{ marginBottom: '2rem' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={1}>
                                <CardMedia className={classes.rootCardMedia}
                                    component="img"
                                    height="80"
                                    image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                    alt="green iguana"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography sx={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem'
                                }}>
                                    Tên sản phẩm
                                </Typography>
                                <Typography
                                    sx={{

                                        marginBottom: '1rem'
                                    }}
                                >
                                    Manufacture: ten nha cung cap
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography>
                                        Quantity: Number
                                    </Typography>
                                    <Box>
                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '2rem', textDecoration: 'line-through' }}>
                                            $12.00
                                        </Typography>
                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                            $14.00
                                        </Typography>
                                        {/* <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', textDecoration: 'line-through' }}>
                                            ${product.price}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                            ${parseFloat(product.price - (product.price * product.promotion), 2).toFixed(2)}
                                        </Typography> */}
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Box sx={{ textAlign: 'right', margin: '1.5rem 0' }}>
                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '2rem', textAlign: 'right' }}>
                            Total:
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <Button variant="contained" sx={{ width: '8rem' }}>RATING</Button>
                        <Button variant="outlined">CONTACT SELLER</Button>
                    </Box>
                </Card>

            </Box>
        </Box>
    );
};

export default AllOrderScreen;