const root = document.getElementById("root-an-ma");
let anMaSinChung = "안마의자";
let background = '#6568E0'
let color = 'white';
let newCounter = 0;
let localCounter = parseInt(localStorage.getItem("anma-counter")) || 0;
    function App() {

        const [counter, modifier] = React.useState(localCounter);

        let anMaGauge = (counter /5)*500;
        let anMaRadius = "5px 0px 0px 5px";
        let backgroundColor = "#93CB7A";

        if (counter < 3) {
            backgroundColor = "#93CB7A";
        } else if (3 <= counter && counter < 4) {
            backgroundColor = "#E2D861";
        } else if (4 <= counter && counter <= 5) {
            backgroundColor = "#D67E72";
        }

        if (counter == 5) {
            anMaSinChung = "신청불가";
            background = "#282A59"
            color="#7A7990"
            anMaRadius = '5px 5px 5px 5px';
        }
        
        const onClick = () => {
            
            if(counter != 5) {
                const newCounter = counter + 1;
                modifier(newCounter);
                localStorage.setItem("anma-counter", newCounter.toString()) || 0;
            }
        };

        return(
            <div>
                <div id="an-ma-people-container">
                    <div className="sin-chung-people">{counter}/5</div>
                    <div id="an-ma-gauge-background">
                        <div id="an-ma-gauge" style={{width: anMaGauge, borderRadius: anMaRadius, backgroundColor: backgroundColor}}></div>
                    </div>
                </div>

                <div id="an-ma-button" style={{background: background, color:color }} onClick={onClick}>{anMaSinChung}</div>
            </div>
        );
    }

ReactDOM.render(<App />, root); 