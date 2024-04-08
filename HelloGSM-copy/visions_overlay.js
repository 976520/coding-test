const downCover = document.getElementById('down');
const upCover = document.getElementById('up');

const saYongJa = document.createElement('sa-young-ja');
const needs = document.createElement('needs');
const jeoHei = document.createElement('jeo-hei');

const container = document.getElementById('cover-container');

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', up);
});
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', down);
});

function up(event) {
    var offsetY = event.offsetY;
    var maxHeight = 300;

    if (event.target === container) {
    var height = offsetY / upCover.parentElement.clientHeight * maxHeight;
    upCover.style.height = height + 'px';
    }
}

function down(event) {
    var offsetY = event.offsetY;
    var maxHeight = 300; // 최대 높이
    var elementBottom = downCover.getBoundingClientRect().bottom;

    if (event.target === container) {
    var height = maxHeight - (offsetY / container.clientHeight * maxHeight);

    downCover.style.height = height + 'px';

    downCover.style.bottom = (elementBottom - height) + 'px';
    }
}