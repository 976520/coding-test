const navDot = document.getElementById('nav-dot');

const home = document.getElementById('home');
const school = document.getElementById('school');
const faq = document.getElementById('faq');
const about = document.getElementById('about');

function mouseLeave() {
    navDot.style.transform = `translateX(0px)`;
}

function homeMouseOver() {
    navDot.style.transform = `translateX(-250px)`;
}

function schoolMouseOver() {
    navDot.style.transform = `translateX(-137px)`;
}

function aboutMouseOver() {
    navDot.style.transform = `translateX(130px)`;
}



home.addEventListener('mouseover', homeMouseOver);
home.addEventListener('mouseleave', mouseLeave);

school.addEventListener('mouseover', schoolMouseOver);
school.addEventListener('mouseleave', mouseLeave);

about.addEventListener('mouseover', aboutMouseOver);
about.addEventListener('mouseleave', mouseLeave);
