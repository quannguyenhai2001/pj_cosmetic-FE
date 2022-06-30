
import * as React from 'react';
import useStyles from './styles'
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const classes = useStyles();
    const handleClose = () => {
        onClose(selectedValue);
    };



    return (
        <Dialog onClose={handleClose} open={open}>
            <Box className={classes.rootBox}>
                <Box className={classes.iconX} onClick={handleClose}>
                    <CloseIcon />
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        CHÀO MỪNG ĐẾN VỚI <br />
                        CỬA HÀNG MỸ PHẨM ASP
                    </Typography>
                    <Typography variant="h6" >
                        Cộng đồng làm đẹp được yêu thích nhất sắp đến VIỆT NAM
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.boxTypo}>
                            <Typography>
                                1. Vận chuyển về địa phương nhanh chóng đơn giản
                            </Typography>
                            <Typography>
                                2. Thương hiệu độc quyền
                            </Typography>
                            <Typography>
                                3. Thành viên hưởng lợi từ khách hàng
                            </Typography>
                            <Typography>
                                4. Dịch vụ đối sánh cấp độ cho quốc tế
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.boxTypo}>
                            <Typography>
                                1. Vận chuyển nội địa cực nhanh chóng và đơn giản
                            </Typography>
                            <Typography>
                                2. Thương hiệu độc quyền
                            </Typography>
                            <Typography>
                                3. Ưu đãi hấp dẫn dành cho thành viên
                            </Typography>
                            <Typography>
                                4. Dịch vụ đánh giá cho các thành viên
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box >
                    <Button className={classes.rootButton} variant="contained">MUA SẮM NGAY</Button>
                </Box>
                <Box className={classes.boxTypoBottom} >
                    <Typography>
                        Không chuyển hàng ra nước ngoài? Nhấp vào đây để truy cập ASP.com.
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
}

const DialogBox = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = (value) => {
        setOpen(false);
    };

    const [isOpenDialog, setIsOpenDialog] = React.useState(false);

    React.useEffect(() => {
        window.onload = (e) => {
            setIsOpenDialog(true);
            // var loaded = parseInt(localStorage.getItem('loaded'), 10),
            //     loaded_numb = loaded ? loaded + 1 : 1;
            // localStorage.setItem('loaded', loaded_numb);
        };
    }, []);

    return (
        <div>
            {isOpenDialog && <SimpleDialog open={open} onClose={handleClose} />}
        </div>
    );
};

export default DialogBox;