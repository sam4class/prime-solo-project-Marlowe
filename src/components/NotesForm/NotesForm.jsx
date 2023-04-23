import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


function NotesForm() {
    console.log('inside NotesForm() page')
    const history = useHistory();
    const dispatch = useDispatch();

    const [addDate, setAddDate] = useState('');
    const [addNote, setAddNote] = useState('');
    const [addLake, setAddLake] = useState('');
    const lakeList = useSelector((store) => store.lakeList);
    // console.log('the lakeList', lakeList);

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
        console.log('addLake in noteForm', Number(addLake))
        setAddDate('');
        setAddNote('');
        setAddLake('');

        history.push('/user');
    }

    function cancelNote() {
        history.push('/user');
    }

    return (<>
        <Typography
            m={3}
            variant="h5"
            color="primary">
            Add A Note:
        </Typography>
        <form
            noValidate
            onSubmit={addNewNote}>
            <FormControl variant="outlined" style={{ marginTop: 20, marginLeft: 0 }}>
            <InputLabel shrink>Lake Name</InputLabel>
            <Select label="Lake Name"value={addLake} onChange={(event) => setAddLake(event.target.value)}>
                {/* <option label='Which Lake Are You At?' value="empty"></option> */}
                <MenuItem value={lakeList.map((item) => {
                    return (
                        <option key={item.id} label={item.name} value={item.id}></option>
                    )
                })}></MenuItem>
            </Select>
            </FormControl>
            <br/>
            <TextField
                label="Date"
                placeholder="01-01-2023"
                variant="outlined"
                color="primary"
                margin="normal"
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
                value={addNote}
                onChange={(event) => setAddNote(event.target.value)}
            />
            <br />
            {/* <input type='text' placeholder='Note' value={addNote} onChange={(event) => setAddNote(event.target.value)}/> */}
            <Box
                m={1}
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
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button
                    variant="outlined"
                    size="small"
                    className="formBtn"
                    onClick={cancelNote}>Cancel</Button>
            </Box>
        </form>
    </>)
}

export default NotesForm;