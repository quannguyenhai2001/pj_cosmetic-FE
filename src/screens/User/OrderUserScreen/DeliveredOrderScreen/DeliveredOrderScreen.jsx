
import { Box, CardMedia, Divider, Grid, Typography, Rating } from '@mui/material';
import React, { memo } from 'react';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import useStyles from './styles';
import { fetchAsyncCreateRating, fetchAsyncGetListProductOfBill } from 'slices/ProductSlice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { Toast } from 'utils/Toast';
import { useNavigate } from 'react-router-dom';

function SimpleDialog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { onClose, arrayId, open } = props;
    const [value, setValue] = React.useState(2);
    const handleClose = () => {
        onClose();
    };
    const handleRating = () => {
        onClose(value);
        dispatch(fetchAsyncCreateRating({ ...arrayId, rating: value })).unwrap().then(() => {
            dispatch(fetchAsyncGetListProductOfBill());
            Toast('success', 'Thanks for the rating!');
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>How many stars do you want to rate?
            </DialogTitle>
            <List sx={{ pt: 0 }}>
                <Rating className={classes.rootRating}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 1rem 0' }}>
                    <Button variant="contained" onClick={handleRating} >COMFIRM</Button>
                </Box>
            </List>
        </Dialog>
    );
}

const DeliveredOrderScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const listProductsInOrder = useSelector(state => state.product.listProductsInOrder);
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(fetchAsyncGetListProductOfBill())
    }, [dispatch]);




    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }



    //dialog
    const [valueArray, setValueArray] = React.useState(
        {
            pro_Id: '',
            bill_details_Id: ''
        }
    );
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (bill_details_Id, pro_Id) => {
        setOpen(true);
        setValueArray({
            pro_Id: pro_Id,
            bill_details_Id: bill_details_Id
        });
    };
    const handleClose = (value) => {
        setOpen(false);
    };

    //find order status in list
    const [listDeliveredOrder, setListDeliveredOrder] = React.useState([]);
    React.useEffect(() => {
        if (listProductsInOrder.length > 0) {
            let a = []
            listProductsInOrder.forEach(element => {
                if (element.status === 'Success') {
                    a.push(element)
                }
            })
            setListDeliveredOrder(a)
        }

    }, [listProductsInOrder]);

    return (
        <Box sx={{ padding: '2rem 0' }}>
            {listDeliveredOrder.length > 0 ?
                (listDeliveredOrder.map((item, index) => {

                    return (<Box sx={{ marginBottom: '3rem' }} key={index}>
                        <Card sx={{ minWidth: 275, padding: '2rem 2rem' }} elevation={4}>
                            <Box sx={{ marginBottom: '1rem' }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={1}>
                                        {item.image ? (<CardMedia
                                            component="img"
                                            height="80"
                                            image={JSON.parse(item.image)[0]}
                                            alt="green iguana"
                                        />) : (
                                            <CardMedia className={classes.rootCardMedia}
                                                component="img"
                                                height="80"
                                                image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                                alt="green iguana"
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography sx={{
                                            fontSize: '1.5rem',
                                            marginBottom: '1rem'
                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            sx={{

                                                marginBottom: '1rem'
                                            }}
                                        >
                                            Nhà cung cấp: {item.ManufacturerName}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography>
                                                Số lượng: {item.amount}
                                            </Typography>
                                            <Box>
                                                <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '1rem', textDecoration: 'line-through', opacity: '70%' }}>
                                                    ${item.price}
                                                </Typography>
                                                <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                    ${parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)}
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
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', margin: '1.5rem 0' }}>
                                <Box sx={{ display: 'flex', gap: '1rem', color: 'blue', alignItems: 'baseline' }}>
                                    <LocalShippingIcon sx={{ transform: 'translateY(4px)' }} />
                                    <Typography >Sản phẩm đã được giao</Typography>
                                </Box>
                                <Box>
                                    Tổng:
                                    <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                        ${((parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)) * item.amount).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                <Box>
                                    {item.rated ? (
                                        <Typography>Đã nhận đánh giá</Typography>
                                    )
                                        : (<Typography>Chưa được đánh giá </Typography>)}
                                </Box>
                                <Box sx={{ display: 'flex', gap: '2rem' }}>
                                    {!item.rated ? (
                                        <>
                                            <Button variant="contained" sx={{ width: '10rem' }} onClick={() => handleClickOpen(item.id, item.pro_Id)}>ĐÁNH GIÁ</Button>
                                            {valueArray.bill_details_Id === item.id ?
                                                (<SimpleDialog
                                                    open={open}
                                                    arrayId={valueArray}
                                                    onClose={handleClose}
                                                />) :
                                                null}
                                        </>
                                    ) :
                                        (<Button onClick={() => handleNavigate(item.pro_Id)} variant="contained" sx={{ width: '10rem' }}>MUA LẠI</Button>)}
                                    <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                </Box>
                            </Box>
                        </Card>
                    </Box>)
                })) : (
                    <Box sx={{ height: '60vh', display: 'grid', placeItems: 'center' }}>
                        <img style={{ width: '16rem' }} src={require('assets/img/order/img1.png')} alt='img' />
                        <Typography sx={{ fontSize: '2rem', fontWeight: '600', color: '#828282' }}>
                            Bạn chưa có bất kỳ đơn hàng nào được giao
                        </Typography>
                    </Box>
                )
            }

        </Box >
    );
};

export default memo(DeliveredOrderScreen);