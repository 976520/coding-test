const root = document.getElementById('music-sin-chung-root');



const musicTitle = async (videoId) => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                id: videoId,
                key: 'AIzaSyBWC114jh4O6wMRsnuM_hHe92v2wW5cKjU' // 여기에 실제 API 키를 입력하세요
            }
        });
        console.log('API 응답:', response.data); // API 응답 콘솔 출력
        const title = response.data.items[0].snippet.title;
        return title;
    } catch (error) {
        console.error('API 요청 중 에러 발생:', error);
        return '??';
    }
};

function App() {
    const [number, setNumber] = React.useState(0); //총 신청곡 개수
    const [n, setN] = React.useState(0); //신청딘 노래마다 고유번호? 부여
    const [thumbnails, setThumbnails] = React.useState([]);
    let toggleOpacity = '0';
    if(number == 0) {
        toggleOpacity = 1;
    }
    const click = async () => {
        const text = document.getElementById('url-input').value;

        if (!judgeUrl(text)) { //응 input에 ㅈ같은거 넣어봐~ return하면 그만이야~~
            return;
        } else {
            document.getElementById('url-input').value = '';
            setNumber(number + 1);
            setN(n + 1); //신청할때마다 고유번호+1(setNumber랑 별개로) -> 겹치는거 없이
        }
        
        const container = document.getElementById('sin-chung-container');
        const videoId = text.match(/v=(\w+)/)[1];

        const title = await musicTitle(videoId);
        
        const musicElement = document.createElement('div');
        musicElement.className = 'music';
        musicElement.id = 'music' + n;
        container.appendChild(musicElement);

        //제목
        const titleElement = document.createElement('div');
        titleElement.className = 'title';
        titleElement.id = 'title' + n;
        titleElement.innerText = title; //프로미스 결과를 텍스트로 설정
        musicElement.appendChild(titleElement);

        //썸넬
        const thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
        setThumbnails([...thumbnails, thumbnailUrl]);

        const thumbnailElement = document.createElement('img');
        thumbnailElement.className = 'thumbnail';
        thumbnailElement.id = 'thumbnail' + n;
        thumbnailElement.src = thumbnailUrl;

        const thumbnailContainer = document.getElementById('music' + n);
        thumbnailContainer.appendChild(thumbnailElement);

        //삭제버튼ㄴ
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.id = 'delete-button' + n;
        deleteButton.addEventListener('click', () => deleteElement(n));
        musicElement.appendChild(deleteButton);

        const deleteButtonSvg = document.createElement('img');
        deleteButtonSvg.className = 'del-button-svg';
        deleteButtonSvg.id = 'del-button-svg' + n;
        deleteButtonSvg.src = '../svg/del-button.svg';
        deleteButton.appendChild(deleteButtonSvg);

        //링크버튼..?
        const linkButton = document.createElement('button');
        linkButton.className = 'link-button';
        linkButton.id = 'link-button' + n;
        linkButton.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
        });
        const linkButtonSvg = document.createElement('img');
        linkButtonSvg.className = 'link-button-svg';
        linkButtonSvg.id = 'link-button-svg' + n;
        linkButtonSvg.src = '../svg/link-button.svg';
        linkButton.appendChild(linkButtonSvg);

        musicElement.appendChild(linkButton);
    }; 

    const judgeUrl = (text) => {
        return /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gi.test(text);
    };//정규식ㅈㄴㅈㄵㄵㄵㅈㄵㄵㄵㄵㅈㄵㄵㄴ

    function deleteElement(index) {
        const container = document.getElementById('sin-chung-container');
        const musicElement = document.getElementById('music' + index);
        container.removeChild(musicElement);

        setNumber((prevNumber) => prevNumber - 1); 
        setThumbnails((prevThumbnails) => prevThumbnails.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div id="music-sin-chung">
                <h2>음악 신청</h2>
                <input type="url" id="url-input" />
                <div id="sin-chug-ha-gi" onClick={click}>
                    신청하기
                </div>
            </div>

            <div id="sin-chung-list">
                <h2>신청음악</h2>
                <p>
                    <span>{number}</span> 개
                </p>
                <div id="sin-chung-container">
                    
                </div>
                <div id="up-sup-ni-da" style={{opacity: toggleOpacity}}></div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, root);
