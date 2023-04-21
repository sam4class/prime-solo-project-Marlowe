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
    const lakeList = useSelector((store) => store.lakeList)
    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'})
        dispatch({type: 'FETCH_NOTES'})
    }, []);

    function toNotesPage(){
        history.push('/notes')
      }
    

    return(<>
        <h1>Your Lakes</h1>
       {favLakeList.map((item) => {
            return(<>
                  <ul key={item.id}>
                        {item.water_quality_status === 'GOOD' ? 
                        <li className='green' onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</li>:
                        item.water_quality_status === 'FAIR' ?
                        <li className='yellow' onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</li>:
                        item.water_quality_status === 'BAD' ?
                        <li className='red' onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</li>: <></>
                        }
                        </ul>
            </>)
        })}
     <button onClick={toNotesPage}>Make a Note</button>
    <hr/>
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

    </>)
}
export default UserFavoritePage;