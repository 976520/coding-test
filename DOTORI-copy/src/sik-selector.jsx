function Sik() {
    const [selectedMeal, setSelectedMeal] = React.useState("조식");
    const [selectorLeft, setSelectorLeft] = React.useState("0px");
    const selectMeal = (meal) => {
        setSelectedMeal(meal);
        if (meal === "조식") {
            setSelectorLeft("0px");
        } else if (meal === "중식") {
            setSelectorLeft("100px");
        } else if (meal === "석식") {
            setSelectorLeft("200px");
        }
    };

    return (
        <div>
            <div id="sik-selector-background">
                <div id="sik-selector" style={{left:selectorLeft}}>{selectedMeal}</div>
                <div id="breakfast-zone" onClick={() => selectMeal("조식")}>
                    조식
                </div>
                
                <div id="lunch-zone" onClick={() => selectMeal("중식")}>
                    중식
                </div>
                
                <div id="dinner-zone" onClick={() => selectMeal("석식")}>
                    석식
                </div>
                
            </div>
        </div>
    );
}

const root = document.getElementById("root-sik-selector");
ReactDOM.render(<Sik />, root);