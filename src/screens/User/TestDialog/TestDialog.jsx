
import * as React from 'react';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import AddIcon from '@mui/icons-material/Add';




function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>




            </List>
        </Dialog>
    );
}




export default function TestDialog() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

    };

    return (
        <div>

            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog

                open={open}
                onClose={handleClose}
            />
        </div>
    );
}

