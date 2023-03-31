import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const DialogBox = ({ dialog }) => {

    const [open, setOpen] = useState(true)

    const handleClose = () => { setOpen(false) }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {dialog.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {dialog.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose}>Disagree</Button> */}
                <Button autoFocus onClick={handleClose}>
                    {dialog.buttonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox