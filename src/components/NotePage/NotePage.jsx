import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, Card, CardActions, CardContent } from "@mui/material";

function NotePage(){

    const  userNotes = useSelector((store) => store.userNotes);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch({type: 'FETCH_NOTES'})
    }, []);

    return(
        <div>
      <Typography
       m={3}
       variant="h5"
       color='primary'>
       Lake Notes:
       </Typography>

       {userNotes ?
          userNotes.map((item) => {
            return(<>
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
            <Button 
            variant="contained"
            size="small"
            id={item.id} 
            onClick={() => {
              dispatch({
                type: 'DELETE_NOTE',
                payload: item.id
              })
            }}>Delete Note</Button>
            </Box>
         </> )}):<p></p>}
    
     </div>
    )
}

export default NotePage;