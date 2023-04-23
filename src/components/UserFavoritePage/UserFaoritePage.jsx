import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import NotePage from "../NotePage/NotePage";
import { Button, Box, Typography } from "@mui/material";


function UserFavoritePage() {
    // console.log('inside UserFavPage()')

    const dispatch = useDispatch();
    const history = useHistory();
    const favLakeList = useSelector((store) => store.favLakeList);
    // const  userNotes = useSelector((store) => store.userNotes);


    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES' })
    }, []);

    function toNotesPage() {
        history.push('/notes')
    }


    return (<>
        <Typography
            m={3}
            variant="h5"
            color='primary'>
            Your Lakes:
        </Typography>

        {favLakeList.map((item) => {
            return (<>
                <p key={item.id}>
                    {item.water_quality_status === 'GOOD' ?
                        <p id='blueGood' className='listBox' onClick={() => {
                            console.log('clicking')
                            dispatch({
                                type: 'WATER_DATA',
                                payload: item.id
                            });
                            history.push('/waterData')
                        }}>{item.name}</p> :
                        item.water_quality_status === 'FAIR' ?
                            <p id='greenFair' className='listBox' onClick={() => {
                                console.log('clicking')
                                dispatch({
                                    type: 'WATER_DATA',
                                    payload: item.id
                                });
                                history.push('/waterData')
                            }}>{item.name}</p> :
                            item.water_quality_status === 'BAD' ?
                                <p id='redBad' className='listBox' onClick={() => {
                                    console.log('clicking')
                                    dispatch({
                                        type: 'WATER_DATA',
                                        payload: item.id
                                    });
                                    history.push('/waterData')
                                }}>{item.name}</p> : <></>
                    }
                </p>
            </>)
        })}
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