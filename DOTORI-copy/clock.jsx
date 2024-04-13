function Clock() {
    const [clock, setClock] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setClock(new Date());
    }

    return (
        <div id="clock-text">
            <h1>{clock.toLocaleTimeString()}</h1>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
