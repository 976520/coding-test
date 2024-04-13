const navDot = document.getElementById('nav-dot');

const home = document.getElementById('home');
const school = document.getElementById('school');
const faq = document.getElementById('faq');
const about = document.getElementById('about');

function mouseLeave() {
    navDot.style.transform = `translateX(0px)`;
}

function schoolMouseOver() {
    navDot.style.transform = `translateX(112px)`;
}

function faqMouseOver() {
    navDot.style.transform = `translateX(249px)`;
}

function aboutMouseOver() {
    navDot.style.transform = `translateX(379px)`;
}



school.addEventListener('mouseover', schoolMouseOver);
school.addEventListener('mouseleave', mouseLeave);

faq.addEventListener('mouseover', faqMouseOver);
faq.addEventListener('mouseleave', mouseLeave);

about.addEventListener('mouseover', aboutMouseOver);
about.addEventListener('mouseleave', mouseLeave);
