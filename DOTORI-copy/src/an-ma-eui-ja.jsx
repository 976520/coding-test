const root = document.getElementById("root-an-ma");
let anMaSinChung = "안마의자";
let background = '#6568E0'
    function App() {
        const data = React.useState(0);
        const [counter, modifier] = data
        let anMaGauge = (counter/5)*500;
        let anMaRadius = "5px 0px 0px 5px";
        let anMaGreen = 260 - (counter/5)*200;
        let anMaRed = (counter/5)*200;
        if (counter == 5) {
            anMaSinChung = "신청불가";
            background = "#282A59"
            anMaRadius = '5px 5px 5px 5px';
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
                    <div id="an-ma-gauge-background">
                        <div id="an-ma-gauge" style={{width: anMaGauge, borderRadius: anMaRadius, backgroundColor: "rgb("+anMaRed+","+anMaGreen+",0)"}}></div>
                    </div>
                </div>

                <div id="an-ma-button" style={{background: background}} onClick={onClick}>{anMaSinChung}</div>
            </div>
        );
    }

ReactDOM.render(<App />, root); 