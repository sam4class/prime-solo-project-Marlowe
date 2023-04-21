import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function NotesForm(){
    console.log('inside NotesForm() page')
    const history = useHistory();
    const dispatch = useDispatch();

    const [addDate, setAddDate] = useState('');
    const [addNote, setAddNote] = useState('');
    const [addLake, setAddLake] = useState('');
    const lakeList = useSelector((store) => store.lakeList);
    // console.log('the lakeList', lakeList);

    function addNewNote(event){
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

    function cancelNote(){
        history.push('/user');
    }

    return(<>
        <h1>Add A Note:</h1>

        <form onSubmit={addNewNote}>
            <select value={addLake} onChange={(event) => setAddLake(event.target.value)}>
                <option label='Which Lake Are You At?' value="empty"></option>
                {lakeList.map((item) => {
                    return(
                    <option key={item.id} label={item.name} value={item.id}></option>
                    )
                })}
            </select>
            <input type='text' placeholder='Date 01-01-2023' value={addDate} onChange={(event) => setAddDate(event.target.value)}/>
            <input type='text' placeholder='Note' value={addNote} onChange={(event) => setAddNote(event.target.value)}/>
            <button type='submit'>Add Note</button>
            <button onClick={cancelNote}>Cancel</button>
        </form>
        </>)
}

export default NotesForm;