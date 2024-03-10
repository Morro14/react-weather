import "../styles/App.css";
import Header from "./Header.js";
import Main from "./Main.js";
import React, { useState } from "react";




function App() {
    const [mode, setMode] = useState('current');
    const [selectResults, setSelectResults] = useState([]);

    return (
        <div>
            <Header
                setSelectResults={setSelectResults}
                selectResults={selectResults}
                setMode={setMode}
            />
            <Main
                selectResults={selectResults}
                mode={mode}
            />
        </div>
    );
}
export default App;
