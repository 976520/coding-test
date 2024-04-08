function mybutton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(false) },
        isClicked ? 'clicked' : 'not clicked'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(mybutton), domContainer);