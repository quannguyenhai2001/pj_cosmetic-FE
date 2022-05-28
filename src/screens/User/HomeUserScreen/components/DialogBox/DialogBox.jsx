
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
                        WELCOME TO <br />
                        ASAP COSMETICS
                    </Typography>
                    <Typography variant="h6" >
                        The most popular beauty community is coming to VIETNAM
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.boxTypo}>
                            <Typography>
                                1. Fast and simple local shipping
                            </Typography>
                            <Typography>
                                2. Exclusive Brands
                            </Typography>
                            <Typography>
                                3. Member benefits from Loyalty
                            </Typography>
                            <Typography>
                                4. Tier match service for international
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box className={classes.boxTypo}>
                            <Typography>
                                1. Fast and simple domestic shipping
                            </Typography>
                            <Typography>
                                2. Exclusive Brands
                            </Typography>
                            <Typography>
                                3. Attractive offers for members
                            </Typography>
                            <Typography>
                                4. Rating service for members
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box >
                    <Button className={classes.rootButton} variant="contained">SHOP NOW</Button>
                </Box>
                <Box className={classes.boxTypoBottom} >
                    <Typography>
                        Not shipping to Vietnam? Click here to go to ASP.com.
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