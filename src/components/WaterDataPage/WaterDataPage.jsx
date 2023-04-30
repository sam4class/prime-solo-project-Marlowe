import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";



function WaterDataPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const waterData = useSelector((store) => store.waterData);
    const user = useSelector((store) => store.user)


    useEffect(() => {
        dispatch({ type: 'FETCH_LAKES' });
    }, []);

    //brings user to right page depending if they are onboared or not
    function handleClick() {
        if (user.onboarded === true) {
            history.push('/favorite')
        } else {
            history.push('/lakes')
        }
    }

    return (<>
        {waterData.length ?
            <>
                <Card sx={{ maxWidth: 375 }}
                    style={{ border: "none", boxShadow: "none" }}>
                    <CardMedia
                        sx={{ height: 90 }}
                        image="/images/water_back.jpeg"
                        title="water" />
                    <CardContent>

                        <Typography gutterBottom variant="h5"
                            component="div"
                            color="primary">
                            Water Data:
                        </Typography>

                        <Typography variant="body1" color="secondary">
                            <p>Water Quality Status: {waterData[0].water_quality_status}</p>
                        </Typography>

                        <Typography variant="body1">
                            <p>E.Coli Reading: {waterData[0].e_coli_reading}</p>
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            <p>E.coli Reading Range: <br /> 0-1 Good, 2-3 Fair, 4-6 Bad</p>
                        </Typography>

                        <Typography variant="body1">
                            <p>Microcystin Reading: {waterData[0].microcystin_reading}</p>
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            <p>Microcystin (Blue Green Algae) Reading Range: <br /> 1-4 Good, 5-7 Fair, 8-10 Bad</p>
                        </Typography>

                        <Typography variant="body1">
                            <p>Temperature: {waterData[0].temperature}</p>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size='small'
                            onClick={handleClick}>Back to List</Button> 
                    </CardActions>
                </Card>
            </> : <p>Waiting for Data</p>}
    </>)
}

export default WaterDataPage;