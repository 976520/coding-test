const sexyButtonContainer = document.getElementById('sexy-buttons');

const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');
const fourthButton = document.getElementById('fourth-button');
const fifthButton = document.getElementById('fifth-button');

function chunChunHeeGamSo(sexyButton){
    sexyButton.style.opacity = 0.6;
}

function bbaLuGaeJungGa(sexyButton){
    sexyButton.style.opacity = 1;
}

function catchMouseOver(event) {
    if(event.target.id == "first-button") {
        chunChunHeeGamSo(firstButton);
    } else if (event.target.id == "second-button") {
        chunChunHeeGamSo(secondButton);
    } else if (event.target.id == "third-button") {
        chunChunHeeGamSo(thirdButton);
    } else if (event.target.id == "fourth-button") {
        chunChunHeeGamSo(fourthButton);
    } else if (event.target.id == "fifth-button") {
        chunChunHeeGamSo(fifthButton);
    }
}

function catchMouseOut(event) {
    if(event.target.id == "first-button") {
        bbaLuGaeJungGa(firstButton);
    } else if (event.target.id == "second-button") {
        bbaLuGaeJungGa(secondButton);
    } else if (event.target.id == "third-button") {
        bbaLuGaeJungGa(thirdButton);
    } else if (event.target.id == "fourth-button") {
        bbaLuGaeJungGa(fourthButton);
    } else if (event.target.id == "fifth-button") {
        bbaLuGaeJungGa(fifthButton);
    }
}

sexyButtonContainer.addEventListener('mouseover', catchMouseOver);
sexyButtonContainer.addEventListener('mouseout', catchMouseOut);
