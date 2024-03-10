import WeatherMain from "./WeatherMain";
import '../styles/Main.css';

function Main(props) {
    return (
        <main>
            <WeatherMain
                selectResults={props.selectResults}
                mode={props.mode}
            ></WeatherMain>
        </main>
    )
}

export default Main