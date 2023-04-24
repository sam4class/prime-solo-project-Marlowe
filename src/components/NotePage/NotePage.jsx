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

    const [deleteId, setDeleteId] = useState('');
    const [open, setOpen] = useState(false);
    const userNotes = useSelector((store) => store.userNotes);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_NOTES' })
    }, []);

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
                color='primary'>
                Lake Notes:
            </Typography>

            {userNotes ?
                userNotes.map((item) => {
                    if(item.user_id === user.id){
                    return (<>
                        <ul className="noteBox" key={item.id}>

                            <p>Lake: {item.name}</p>
                            <p>Date: {item.date}</p>
                            <p>Note: {item.note}</p>

                        </ul>

                        <Box
                            m={1}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end">
                            {/* <Button
                                variant="contained"
                                size="small"
                                id={item.id}
                                onClick={() => {
                                    dispatch({
                                        type: 'DELETE_NOTE',
                                        payload: item.id
                                    })
                                }}>Delete Note</Button> */}

                            <Button
                                variant="contained"
                                //
                                onClick={() => {handleClickOpen(item.id)}}>
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
                }}) : <p></p>}

        </div>
    )
}

export default NotePage;