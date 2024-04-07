const navDot = document.getElementById('nav-dot');

const home = document.getElementById('home');
const school = document.getElementById('school');
const faq = document.getElementById('faq');
const about = document.getElementById('about');

function mouseLeave() {
    navDot.style.transform = `translateX(0px)`;
}

function homeMouseOver() {
    navDot.style.transform = `translateX(-379px)`;
}

function schoolMouseOver() {
    navDot.style.transform = `translateX(-267px)`;
}

function faqMouseOver() {
    navDot.style.transform = `translateX(-130px)`;
}



home.addEventListener('mouseover', homeMouseOver);
home.addEventListener('mouseleave', mouseLeave);

school.addEventListener('mouseover', schoolMouseOver);
school.addEventListener('mouseleave', mouseLeave);

faq.addEventListener('mouseover', faqMouseOver); // mouse
faq.addEventListener('mouseleave', mouseLeave);
