import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


function NotesForm() {

    const history = useHistory();
    const dispatch = useDispatch();

    //new Date() inside useState give the date of today in the date field below
    const [addDate, setAddDate] = useState(new Date().toLocaleDateString());
    const [addNote, setAddNote] = useState('');
    const [addLake, setAddLake] = useState('');

    const lakeList = useSelector((store) => store.lakeList);

    //this useEffect makes sure the lakes are ready to be mapped through in the dropdown menu 
    useEffect(() => {
        dispatch({
            type: 'FETCH_LAKES'
        })
    }, []);

    function addNewNote(event) {
        // console.log('inside addNewNote()')
        event.preventDefault();

        dispatch({
            type: 'SET_NEW_NOTE',
            payload: {
                lake_id_fk: addLake,
                notes: addNote,
                date: addDate,
            }
        })
        // console.log('addLake in noteForm', Number(addLake))
        setAddDate('');
        setAddNote('');
        setAddLake('');

        history.push('/favorite');
    }

    function cancelNote() {
        history.push('/favorite');
    }

    return (<>
        <Typography
            m={3}
            variant="h5"
            className="whiteText">
            Add A Note:
        </Typography>
        <form
            noValidate
            onSubmit={addNewNote}>
            <FormControl fullWidth variant="outlined" style={{ marginTop: 20, marginLeft: 0 }}>
                <InputLabel id="menu" >Lake</InputLabel>
                <Select label="Lake" value={addLake} onChange={(event) => setAddLake(event.target.value)} className="noteBackground">
                    {lakeList.map((item) => {
                        return (
                            <MenuItem key={item.id} value={item.id}> {item.name} </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <br />
            <TextField
                label="Date"
                placeholder="1-01-2023"
                variant="outlined"
                color="primary"
                margin="normal"
                className="noteBackground"
                value={addDate}
                onChange={(event) => setAddDate(event.target.value)}
            />

            {/* <input type='text' placeholder='Date 01-01-2023' value={addDate} onChange={(event) => setAddDate(event.target.value)}/> */}
            <TextField
                label="Note"
                variant="outlined"
                color="primary"
                multiline
                rows={4}
                margin="normal"
                fullWidth
                className="noteBackground"
                value={addNote}
                onChange={(event) => setAddNote(event.target.value)}
            />
            <br />
            {/* <input type='text' placeholder='Note' value={addNote} onChange={(event) => setAddNote(event.target.value)}/> */}
            <Box
                m={1}
                mt={3}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button
                    variant="contained"
                    size="small"
                    type='submit'>Add Note</Button>
            </Box>

            <Box
                m={1}
                mt={3}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button
                    variant="contained"
                    size="small"
                    className="formBtn"
                    onClick={cancelNote}>Cancel</Button>
            </Box>
        </form>
    </>)
}

export default NotesForm;