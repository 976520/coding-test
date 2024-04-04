
const button1 = document.getElementsByClassName("first-button");


function buttonMouseEnter() {
    this.style.opacity = 0.1;
    console.log("enter");
}

function buttonMouseLeave() {
    this.style.opacity = 1;
    console.log("leave");
}

button1.addEventListener("mouseover", buttonMouseEnter);
button1.addEventListener("mouseout", buttonMouseLeave);