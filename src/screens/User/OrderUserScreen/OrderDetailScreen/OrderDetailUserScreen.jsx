import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCreateRating, fetchAsyncGetListProductOfBill } from 'slices/ProductSlice';
import { Button, Rating } from '@mui/material';
import PropTypes from 'prop-types';
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

let id = 0;


// function SimpleDialog(props) {
//     const dispatch = useDispatch();
//     const { onClose, selectedValue, open } = props;
//     const [value, setValue] = React.useState(2);
//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     const handleListItemClick = (value) => {
//         console.log({ id: id })
//         dispatch(fetchAsyncCreateRating({
//             productId: id,
//             rating: 4
//         }))
//         console.log(value)
//         onClose(value);
//     };

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <Rating onClick={handleListItemClick}
//                 name="simple-controlled"
//                 value={value}
//                 onChange={(event, newValue) => {
//                     setValue(newValue);
//                 }}
//             />

//         </Dialog>
//     );
// }


const OrderUserScreen = () => {
    // const [open, setOpen] = React.useState(false);
    // const [selectedValue, setSelectedValue] = React.useState(0);

    // const handleClickOpen = (e) => {
    //     setOpen(true);
    //     id = e
    // };

    // const handleClose = (value) => {
    //     setOpen(false);
    //     setSelectedValue(value);
    // };



    // const dispatch = useDispatch();
    // const listProductsInOrder = useSelector(state => state.product.listProductsInOrder);
    // React.useEffect(() => {
    //     dispatch(fetchAsyncGetListProductOfBill())
    // }, [dispatch])


    return (
        <>
            alo
        </>
    );
};

export default OrderUserScreen;