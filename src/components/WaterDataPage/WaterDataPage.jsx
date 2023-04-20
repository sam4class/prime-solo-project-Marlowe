import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function WaterDataPage() {

    const history = useHistory();
    const waterData = useSelector((store) => store.waterData);
    console.log('waterData', waterData);

    function handleClick(){
        history.push('/lakes')
    }


    return (<>
        <h1>Water Data:</h1>
       
        {waterData.length ?
        <>
        <p>Water Quality Status: {waterData[0].water_quality_status}</p>
        <p>E.Coli Reading: {waterData[0].e_coli_reading}</p>
        <p>Temperature: {waterData[0].temperature}</p>
        <p>Microcystin Reading: {waterData[0].microcystin_reading}</p>
        </>
        :<p>Waiting for Data</p>}

        <button onClick={handleClick}>Back to List</button>

    </>)
}

export default WaterDataPage;