import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NotePage from "../NotePage/NotePage";
import { Button, Box, Typography } from "@mui/material";


function UserFavoritePage() {
    // console.log('inside UserFavPage()')

    const dispatch = useDispatch();
    const history = useHistory();
    const favLakeList = useSelector((store) => store.favLakeList);
    const user = useSelector((store) => store.user);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
        setIsLoading(false);
    }, []);

    if(isLoading){
        return <p>Grabbing Favortie Lakes . . .</p>
      }
    

    function toNotesPage() {
        history.push('/notes')
    }


    return (<>
     
        <Typography
            m={3}
            variant="h5"
            className="whiteText">
            Your Lakes:
        </Typography>

        {favLakeList.length ? 
            <>
        {favLakeList.map((item) => {
            if(item.user_id === user.id){
            return (<>
                <p key={item.id}>
                    {item.water_quality_status === 'GOOD' ?
                        <li id='blueGood' className='listBox' onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}> <i className="fa-solid fa-person-swimming"></i> {item.name}</li> :
                        item.water_quality_status === 'FAIR' ?
                            <li id='greenFair' className='listBox' onClick={() => {
                                console.log('clicking')
                                dispatch({
                                    type: 'WATER_DATA',
                                    payload: item.id
                                });
                                history.push('/waterData')
                            }}><i className='fas fa-exclamation-triangle'></i> {item.name}</li> :
                            item.water_quality_status === 'BAD' ?
                                <li id='redBad' className='listBox' onClick={() => {
                                    console.log('clicking')
                                    dispatch({
                                        type: 'WATER_DATA',
                                        payload: item.id
                                    });
                                    history.push('/waterData')
                                }}><i className='fas fa-ban'></i> {item.name}</li> : <></>
                    }
                </p>
            </>)
        }})}  </> :<></>}
        <Box
        m={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end">
        <Button
        variant="contained"
        size='small'
        onClick={toNotesPage}>Make a Note</Button>
        </Box>

        <hr />
        <NotePage />
        
    </> 
    )
}
export default UserFavoritePage;