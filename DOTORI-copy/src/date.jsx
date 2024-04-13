// date.jsx

function DateDisplay() {
    const [today, setToday] = React.useState(new Date());


    let month = (today.getMonth() + 1);
    let date = today.getDate()
    if(month < 10){
        month = "0" + month;
    } else {
        month =  month;
    }
    if (date < 10){
        date = "0" + date;
    } else {
        date = date;
    }

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
