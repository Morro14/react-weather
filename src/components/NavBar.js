import axios from "axios";
import React, { useState } from "react";
import CountryList from "./CountryList.js";
import CityList from "./CityList.js";



function NavBar(props) {
	let [country, setCountry] = useState();
	let [city, setCity] = useState();
	const [countries, setCountries] = useState([]);
	if (city && props.selectResults[0] === city) {
		setCity();
	}


    if (countries.length === 0) {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => {
				setCountries(res.data);
			});
	}


	if (country && city) {
		props.setSelectResults([city, country]);
		

	} 

	return (
		<>
			<CountryList
				countries={countries}
				setCity={setCity}
				setCountry={setCountry}

			></CountryList>
			<CityList

				country={country}
				setCity={setCity}

			></CityList>
		</>
	);
}





export default NavBar;
