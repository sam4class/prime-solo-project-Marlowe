import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NotePage(){

    const  userNotes = useSelector((store) => store.userNotes);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'FETCH_NOTES'})
    }, []);

    return(
        <div>
        {/* <NotePage /> */}
       <h1>Lake Notes</h1>
       {userNotes ?
          userNotes.map((item) => {
            return(<>
            <ul key={item.id}>
            <p>Lakes: {item.name}</p>
            <p>Date: {item.date}</p>
            <p>Note: {item.note}</p> 
            <button id={item.id} onClick={() => {
              dispatch({
                type: 'DELETE_NOTE',
                payload: item.id
              })
            }}>Delete Note</button>
            </ul>
         </> )}):<p></p>}
     </div>
    )
}

export default NotePage;