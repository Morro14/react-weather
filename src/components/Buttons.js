import '../styles/Buttons.css';
import { useState } from 'react';



function Buttons(props) {
    const [active, setActive] = useState('current');
    let currentFlag = '';
    let forecastFlag = '';
    if (active === "current") {
        currentFlag = "button-active";
        forecastFlag = "buttone-default";
    } else {
        currentFlag = "button-default";
        forecastFlag = "button-active";
    }
    
    return (
        <div className='buttons-container'>
            <button className='geoloc-button' onClick={() => props.setSelectResults([])}>Current location

            </button>
            <button className={currentFlag}
                onClick={() => {
                    props.setMode('current');
                    setActive('current');
                }}>Current weather</button>

            <button className={forecastFlag}
                onClick={() => {
                    props.setMode('forecast');
                    setActive('forecast');
                }}>5 days forecast</button>



        </div>
    )





}


export default Buttons