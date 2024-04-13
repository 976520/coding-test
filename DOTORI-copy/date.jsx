// date.jsx

function DateDisplay() {
    const [today, setToday] = React.useState(new Date());
    const month = '0' + (today.getMonth() + 1);
    const date = today.getDate()
    const formattedDate = `${today.getFullYear()}년 ${month}월 ${date}일`;
    React.useEffect(() => {
        const timerID = setInterval(() => setToday(new Date()), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div id="date-text">
            <h2>{formattedDate}</h2>
        </div>
    );
}

const dateRootElement = document.getElementById("root-date");
ReactDOM.render(<DateDisplay />, dateRootElement);
