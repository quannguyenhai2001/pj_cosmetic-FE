
import * as React from 'react';
import useStyles from './styles'
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';



function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const classes = useStyles();
    const handleClose = () => {
        onClose(selectedValue);
    };



    return (
        <Dialog className={classes.rootDialog} onClose={handleClose} open={open}>
            <Typography className={classes.rootDialog} variant="h5" gutterBottom>
                WELCOME TO <br />
                ASAP COSMETICS
            </Typography>

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