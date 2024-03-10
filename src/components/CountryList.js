import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import '../styles/CountryList.css';


function CountryList(props) {
    const itemsOld = props.countries;
    // const [searchTerm, setSearchTerm] = useState('');
    const items = itemsOld.map(i => (
        { id: i.cca2, name: i.name.common }
    ))


    // const handleOnSearch = (string, results) => {

    // }

    // const handleOnHover = (result) => {
    //     // the item hovered
    // }

    const handleOnSelect = (item) => {
        // the item selected
        props.setCountry([item.name, item.id]);
    }

    // const handleOnFocus = () => {
    // }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }
    if (props.countries.length  === 0) {
        return (
            <div className="country-search-container">
            <ReactSearchAutocomplete
                items={items}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                onSelect={handleOnSelect}
                // onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                placeholder="Search country"

            />




        </div>
        )
    }
    return (

        <div className="country-search-container">
            <ReactSearchAutocomplete
                items={items}
                // onSearch={handleOnSearch}
                // onHover={handleOnHover}
                onSelect={handleOnSelect}
                // onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                placeholder="Search country"
                inputSearchString=''

            />




        </div>
    );
}

export default CountryList;
