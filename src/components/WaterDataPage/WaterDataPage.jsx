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
        <button onClick={handleClick}>Back to List</button>
        <br />
        {waterData.length ?
        <>
        <p>Water Quality Status: {waterData.water_quality_status}</p>
        <p>E.Coli Reading: {waterData.e_coli_reading}</p>
        <p>Temperature: {waterData.temperature}</p>
        <p>Microcystin Reading: {waterData.microcystin_reading}</p>
        </>
        :<p>Waiting for Data</p>}

    </>)
}

export default WaterDataPage;