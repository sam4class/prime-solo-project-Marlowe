import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { useEffect } from "react";



function WaterDataPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const waterData = useSelector((store) => store.waterData);
    // const acresValue = useSelector((store) => store.acresValue);
    // console.log('acresValue', acresValue);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ACRES'
        });
    }, []);

    function handleClick(){
        history.push('/lakes')
    }


    return (<>
      {waterData.length ?
        <>
        <Card sx={{ maxWidth: 375 }}
        style={{ border: "none", boxShadow: "none"}}>
      <CardMedia
        sx={{ height: 90 }}
        image="/images/water_back.jpeg"
        title="water"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" 
        component="div"
        color="primary">
          Water Data:
        </Typography>

        <Typography variant="body1">
        <p>Water Quality Status: {waterData[0].water_quality_status}</p>
        </Typography>

        <Typography variant="body2" color="text.secondary">
        <p>E.coli Reading Range: <br/> 6-4 Good, 3-2 Fair, 1-0 Bad</p>
        </Typography>

        <Typography variant="body1">
        <p>E.Coli Reading: {waterData[0].e_coli_reading}</p>
        </Typography>

        <Typography variant="body1">
        <p>Temperature: {waterData[0].temperature}</p>
        </Typography>

        <Typography variant="body2" color="text.secondary">
        <p>Microcystin Reading Deals with Blue Green Alge Range: <br/> 1-4 Good, 5-7 Fair, 8-10 Bad</p>
        </Typography>

        <Typography variant="body1">
        <p>Microcystin Reading: {waterData[0].microcystin_reading}</p>
        </Typography>

        <Typography variant="body1">
        <p>Acres: </p>
        </Typography>
      </CardContent>
      <CardActions>

        <Button 
        variant="contained"
        size='small'
        onClick={handleClick}>
            Back to List</Button>
           
      </CardActions>
    </Card>
    </>
        :<p>Waiting for Data</p>}


        {/* <h1>Water Data:</h1>
       
        {waterData.length ?
        <>
        <p>Water Quality Status: {waterData[0].water_quality_status}</p>
        <p>E.coli Reading Range: 6-4 Good, 3-2 Fair, 1 Bad</p>
        <p>E.Coli Reading: {waterData[0].e_coli_reading}</p>
        <p>Temperature: {waterData[0].temperature}</p>
        <p>Microcystin Reading deals with blue green alge: Range: 1-4 Good, 5-7 Fair, 8-10 Bad</p>
        <p>Microcystin Reading: {waterData[0].microcystin_reading}</p>
        </>
        :<p>Waiting for Data</p>}

        <button onClick={handleClick}>Back to List</button> */}


    </>)
}

export default WaterDataPage;