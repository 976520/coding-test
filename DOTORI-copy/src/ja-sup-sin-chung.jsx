const root = document.getElementById("root-ja-sup");
let jaSupSinChung = "자습신청";
let jaSupBorder = '#6568E0'
function App() {
        const data = React.useState(0);
        const [counter, modifier] = data

        if (counter == 50) {
            jaSupSinChung = "신청불가";
            jaSupBorder = "#282A59"
        }

        const onClick = () => {
            if(counter != 50) {
                modifier((current)=> current + 1);
            }
        };

        return(
            <div>
                <div id="ja-sup-people-container">
                    <div className="sin-chung-people">{counter}/50</div>
                    <div id="ja-sup-gauge"></div>
                </div>
                
                <div id="ja-sup-button" style={{background: jaSupBorder}} onClick={onClick}>{jaSupSinChung}</div>
            </div>
        );
        
}

ReactDOM.render(<App />, root); 