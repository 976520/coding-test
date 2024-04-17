const root = document.getElementById("root-an-ma");
let anMaSinChung = "안마의자";
let background = '#6568E0'
let color = 'white';
    function App() {

        const [counter, modifier] = React.useState(0);

        let localCounter = localStorage.getItem("anma-counter") || 0;

        let anMaGauge = (localCounter/5)*500;
        let anMaRadius = "5px 0px 0px 5px";
        let backgroundColor = "#93CB7A";

        if (localCounter < 3) {
            backgroundColor = "#93CB7A";
        } else if (3 <= localCounter && localCounter < 4) {
            backgroundColor = "#E2D861";
        } else if (4 <= localCounter && localCounter <= 5) {
            backgroundColor = "#D67E72";
        }

        if (localCounter == 5) {
            anMaSinChung = "신청불가";
            background = "#282A59"
            color="#7A7990"
            anMaRadius = '5px 5px 5px 5px';
        }
        
        const onClick = () => {
            localCounter = parseInt(localStorage.getItem("anma-counter"))
            if(localCounter != 5) {
                const newCounter = counter + 1;
                modifier(newCounter);
                localStorage.setItem("anma-counter", newCounter) || 0;
            }
        };

        return(
            <div>
                <div id="an-ma-people-container">
                    <div className="sin-chung-people">{localCounter}/5</div>
                    <div id="an-ma-gauge-background">
                        <div id="an-ma-gauge" style={{width: anMaGauge, borderRadius: anMaRadius, backgroundColor: backgroundColor}}></div>
                    </div>
                </div>

                <div id="an-ma-button" style={{background: background, color:color }} onClick={onClick}>{anMaSinChung}</div>
            </div>
        );
    }

ReactDOM.render(<App />, root); 