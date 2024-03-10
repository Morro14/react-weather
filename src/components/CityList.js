import { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

import axios from "axios";
import '../styles/CityList.css';


function CityList(props) {
    const [cityList, setCityList] = useState({"country": false, "cities": false });

    if (props.country && cityList.country !== props.country[0]) {
        axios.post("https://countriesnow.space/api/v0.1/countries/cities", { "country": props.country[0] }).then(
        res => {
            setCityList({"country": props.country[0], "cities":res.data.data});

        });
    }

    let newCityList = [];
    if (cityList.cities) {
        newCityList = cityList.cities.map(i => (
            { name: i, id: i }


        ))
    }

    const handleOnSelect = (item) => {
        props.setCity(item.name);
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }
    let placeholder = '';
    if (props.country && cityList.country !== props.country[0]) {
        placeholder = 'Loading';
    } else {
        placeholder = 'Select city';
    }



    

    return (

        <div className="city-search-container">
            <ReactSearchAutocomplete
                items={newCityList}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                onSelect={handleOnSelect}
                // onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                placeholder={placeholder}
                
            />
        </div>
    );








}

export default CityList