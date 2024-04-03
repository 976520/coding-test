
const button1 = document.getElementsByClassName("sexy first-button");

button1.addEventListener("mouseenter", buttonMouseEnter);
button1.addEventListener("mouseleave", buttonMouseLeave);

function buttonMouseEnter() {
    this.style.opacity = 0.1;
    console.log("enter");
}

function buttonMouseLeave() {
    this.style.opacity = 1;
    console.log("leave");
}
