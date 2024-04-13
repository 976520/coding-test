const navDot = document.getElementById('nav-dot');

const home = document.getElementById('home');
const school = document.getElementById('school');
const faq = document.getElementById('faq');
const about = document.getElementById('about');

function mouseLeave() {
    navDot.style.transform = `translateX(0px)`;
}

function homeMouseOver() {
    navDot.style.transform = `translateX(-112px)`;
}

function faqMouseOver() {
    navDot.style.transform = `translateX(138px)`;
}

function aboutMouseOver() {
    navDot.style.transform = `translateX(267px)`;
}



home.addEventListener('mouseover', homeMouseOver);
home.addEventListener('mouseleave', mouseLeave);

faq.addEventListener('mouseover', faqMouseOver);
faq.addEventListener('mouseleave', mouseLeave);

about.addEventListener('mouseover', aboutMouseOver);
about.addEventListener('mouseleave', mouseLeave);
