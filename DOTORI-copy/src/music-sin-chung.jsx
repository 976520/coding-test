const root = document.getElementById('music-sin-chung-root');
function App() {
    const [musicUrl, setMusicUrl] = React.useState();
    const [number, setNumber] = React.useState(0);
    const [text, setText] = React.useState();
    const [n, setn] = React.useState(0);
    const [videoId, setVideoId] = React.useState();
    const [thumbnail, setThumbnail] = React.useState();
    const onChange = (event) => {
        setMusicUrl(event.target.value);
        //setThumbnail(~~);
        const inputText = event.target.value;
        setText(inputText);
    }

    function click() {
        if(text == ''){
            return 0;
        }
        setNumber(number + 1);
        setVideoId(text.match(/v=\/(\w+)\//));
        
        setn(n+1);
        console.log(n);
        const container = document.getElementById("sin-chung-container");

        const tomato = document.createElement("div");
        tomato.className = 'music';
        tomato.id = 'music'+ n;
        tomato.textContent = musicUrl;
        container.appendChild(tomato);
        setText('');

        const potato = document.createElement("img");
        potato.className = "thumbnail";
        potato.id="thumbnail"+n;
        potato.src = 'https://img.youtube.com/vi/'+videoId+'/mqdefault.jpg'; 
        tomato.appendChild(potato);

        const deleteButton = document.createElement("button");
        deleteButton.className = 'delete-button';
        deleteButton.id= 'delete-button' + n;
        deleteButton.addEventListener("click", () => deleteElement(n));
        tomato.appendChild(deleteButton);
        
        function deleteElement(n) {
            console.log(n);
            const element = document.getElementById('music'+ n);
            tomato.remove(element);
            setNumber(number => number-1); 
        }
    }
    
    

    return(
        <div>
            <div id="music-sin-chung">
                <h2>음악 신청</h2>
                <input 
                    type="url" //?
                    value={text}
                    id="url-input"
                    onChange={onChange}
                ></input>
                <div id="sin-chug-ha-gi" onClick={click}>신청하기</div>
                
            </div>

            <div id="sin-chung-list">
                <h2>신청음악</h2>
                <p><span>{number}</span> 개</p>
                <div id="sin-chung-container">
                </div>
            </div>
        </div>
        
    )
}

ReactDOM.render(<App />, root);
