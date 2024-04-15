const root = document.getElementById("root-ja-sup");
let jaSupSinChung = "자습신청";
let jaSupBorder = '#6568E0'
function App() {
    
        const data = React.useState(0);
        const [counter, modifier] = data
        let jaSupGauge = (counter/50)*500;
        let jaSupRadius = "5px 0px 0px 5px";
        let jaSupGreen = 260 - (counter/50)*200;
        let jaSupRed = (counter/50)*200;


        if (counter == 50) {
            jaSupSinChung = "신청불가";
            jaSupBorder = "#282A59"
            jaSupRadius = "5px 5px 5px 5px";
        }

        const onClick = () => {
            jaSupGauge = (counter/5)*500;
            if(counter != 50) {
                modifier((current)=> current + 1);
            }
        };

        return(
            <div>
                <div id="ja-sup-people-container">
                    <div className="sin-chung-people">{counter}/50</div>
                    <div id="ja-sup-gauge-background">
                        <div id="ja-sup-gauge" style={{width: jaSupGauge, borderRadius: jaSupRadius, backgroundColor: "rgb("+jaSupRed+","+jaSupGreen+",0)"}}></div>
                    </div>
                </div>
                
                <div id="ja-sup-button" style={{background: jaSupBorder}} onClick={onClick}>{jaSupSinChung}</div>
                
            </div>
        );
        
}

ReactDOM.render(<App />, root); 