import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Box, Typography, Button, Card, CardActions, CardContent } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function NotePage() {

    const dispatch = useDispatch();
    const history = useHistory();

    //these states are used for the DELETE conformation pop-up
    const [deleteId, setDeleteId] = useState('');
    const [open, setOpen] = useState(false);

    const userNotes = useSelector((store) => store.userNotes);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({ type: 'FETCH_NOTES' })
    }, []);

    //these two functions are for the DELETE conformation pop-up
    const handleClickOpen = (id) => {
        setDeleteId(id)
        setOpen(true);
    }

    const handleClose = (id) => {
        setOpen(false);
    }

    return (
        <div>
            <Typography
                m={3}
                variant="h5"
                className="whiteText">
                Lake Notes:
            </Typography>

            {userNotes ?
                userNotes.map((item) => {
                    if (item.user_id === user.id) {
                        return (<>
                            <ul className="noteBox" key={item.id}>
                                <li key={item.id}>Lake: {item.name}</li>
                                <br />
                                <li>Date: {item.date}</li>
                                <br />
                                <li>Note: {item.note}</li>
                            </ul>

                            <Box
                                m={1}
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end">

                                <Button
                                    variant="contained"
                                    onClick={() => { handleClickOpen(item.id) }}>
                                    Delete
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Deleting Note"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Once this note is deleted, it will be gone.  Would you like to delete your note?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Disagree</Button>
                                        <Button onClick={() => {
                                            console.log('ID', deleteId)
                                            dispatch({
                                                type: 'DELETE_NOTE',
                                                payload: deleteId
                                            })
                                            history.push('/user');
                                        }}
                                            autoFocus>
                                            Agree
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </>)
                    }
                }) : <p></p>}

        </div>
    )
}

export default NotePage;