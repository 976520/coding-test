const clockRootElement = document.getElementById("root-clock");

function Clock() {
    const [clock, setClock] = React.useState(new Date());

    React.useEffect(() => {
        const timerID = setInterval(() => setClock(new Date()), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);


    return (
        <div id="clock-text">
            <h1>{clock.toLocaleTimeString()}</h1>
        </div>
    );
}

ReactDOM.render(<Clock />, clockRootElement);
