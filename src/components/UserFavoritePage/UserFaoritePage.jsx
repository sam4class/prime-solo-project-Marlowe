import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
// import NotePage from "../NotePage/NotePage";


function UserFavoritePage(){
    // console.log('inside UserFavPage()')

    const dispatch = useDispatch();
    const history = useHistory();
    const favLakeList = useSelector((store) => store.favLakeList);
    const  userNotes = useSelector((store) => store.userNotes);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'})
        dispatch({type: 'FETCH_NOTES'})
    }, []);
    

    return(<>
        <h1>Your Lakes</h1>
       {favLakeList.map((item) => {
            return(
                <ul key={item.id}>
                      <li onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</li>
                </ul>
            )
        })}

    <hr/>
    <div>
        {/* <NotePage /> */}
       {userNotes ?
          userNotes.map((item) => {
            return(<>
            <ul key={item.id}>
            <li>Lakes: {item.name}</li>
            <li>Date: {item.date}</li>
            <li>Note: {item.note}</li> 
            <button id={item.id} onClick={() => {
              dispatch({
                type: 'DELETE_NOTE',
                payload: item.id
              })
            }}>Delete Note</button>
            </ul>
         </> )}):<p></p>}
     </div>

    </>)
}
export default UserFavoritePage;