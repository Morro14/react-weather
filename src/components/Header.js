import NavBar from "./NavBar.js";
import "../styles/Header.css";
import Buttons from "./Buttons.js";

function Header(props) {


    return (
        <header>
            <nav className="nav">
                <h1>Weather Service</h1>
                <NavBar
                    setSelectResults={props.setSelectResults}
                    selectResults={props.selectResults}
                />


                <Buttons modeDefault="current" setMode={props.setMode} setSelectResults={props.setSelectResults}
                ></Buttons>
            </nav>
        </header>
    );
}

export default Header;
