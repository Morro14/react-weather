// import axios from "axios";
// import { useState } from "react";

// function CountryList() {
//   const [countries, setCountries] = useState([]);
//   if (countries.length !== 0) {
//     axios
//       .get("https://countriesnow.space/api/v0.1/countries/iso")
//       .then((res) => {
//         setCountries(res.data);
//       });
//   } else {
//     return (
//       <div className="country-select-container">
//         <label for="select-country">Select country:</label>
//         <select className="select-country">
//           {countries.map((country) => (
//             <option value={country.name} key={country.Iso3}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   }
// }

// export default CountryList;
