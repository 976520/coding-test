const root = document.getElementById("root-an-ma");
let anMaSinChung = "안마의자";
let background = '#6568E0'
    function App() {
        const data = React.useState(0);
        const [counter, modifier] = data

        if (counter == 5) {
            anMaSinChung = "신청불가";
            background = "#282A59"
        }

        const onClick = () => {
            if(counter != 5) {
                modifier((current)=> current + 1);
            }
        };

        return(
            <div>
                <div id="an-ma-people-container">
                    <div className="sin-chung-people">{counter}/5</div>
                    <div id="an-ma-gauge"></div>
                </div>

                <div id="an-ma-button" style={{background: background}} onClick={onClick}>{anMaSinChung}</div>
            </div>
        );
    }

ReactDOM.render(<App />, root); 