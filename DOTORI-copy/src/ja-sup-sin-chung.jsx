const root = document.getElementById("root-ja-sup");
let jaSupSinChung = "자습신청";
let jaSupBorder = '#6568E0';
let jaSupColor = 'white';
let newCounter = 0;
let localCounter = parseInt(localStorage.getItem("jasup-counter")) || 0;

function App() {
    const [counter, setCounter] = React.useState(localCounter);

    let jaSupGauge = (counter / 50) * 500;
    let jaSupRadius = "5px 0px 0px 5px";
    let backgroundColor = "#93CB7A";

    if (counter < 30) {
        backgroundColor = "#93CB7A";
    } else if (30 <= counter && counter < 40) {
        backgroundColor = "#E2D861";
    } else if (40 <= counter && counter <= 50) {
        backgroundColor = "#D67E72";
    }

    if (counter === 50) {
        jaSupSinChung = "신청불가";
        jaSupBorder = "#282A59";
        jaSupColor = "#7A7990";
        jaSupRadius = "5px 5px 5px 5px";
    }

    const onClick = () => {
        if (counter < 50) {
            const newCounter = counter + 1;
            setCounter(newCounter);
            localStorage.setItem("jasup-counter", newCounter.toString());
        }
    };

    return (
        <div>
            <div id="ja-sup-people-container">
                <div className="sin-chung-people">{counter}/50</div>
                <div id="ja-sup-gauge-background">
                    <div id="ja-sup-gauge" style={{ width: jaSupGauge, borderRadius: jaSupRadius, backgroundColor: backgroundColor }}></div>
                </div>
            </div>
            <div id="ja-sup-button" style={{ background: jaSupBorder, color: jaSupColor }} onClick={onClick}>{jaSupSinChung}</div>
        </div>
    );
}

ReactDOM.render(<App />, root);
