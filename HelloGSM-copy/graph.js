const graphContainer = document.getElementById('graph-container');
const textCOntainer = document.getElementById('text-container');

const container2020 = document.getElementById('container-2020');
const container2021 = document.getElementById('container-2021');
const container2022 = document.getElementById('container-2022');
const container2023 = document.getElementById('container-2023');

const graph2020 = document.getElementById('graph-2020');
const graph2021 = document.getElementById('graph-2021');
const graph2022 = document.getElementById('graph-2022');
const graph2023 = document.getElementById('graph-2023');

const percent2020 = document.getElementById('percent-2020');
const percent2021 = document.getElementById('percent-2021');
const percent2022 = document.getElementById('percent-2022');
const percent2023 = document.getElementById('percent-2023');

const year2020 = document.getElementById('year-2020');
const year2021 = document.getElementById('year-2021');
const year2022 = document.getElementById('year-2022');
const year2023 = document.getElementById('year-2023');

const sexyTitle = document.getElementById('sexy-title');
const sexyNumber = document.getElementById('sexy-number');

const index = 0;
selectedGraph(index);

function easeOut(t, c, d) { //easeOutCirc 공식에 대입
    return c * Math.sqrt(1 - (t = t / d - 1) * t);
}

function counting(element, value, unit) {
    let i = 0;
    let delay = 10;
    const start = performance.now();

    const timer = setInterval(function() {
        const elapsed = performance.now() - start;
        i = easeOut(elapsed, value, 2000);
        element.innerText = Math.round(i) + unit; //반올림 + 단위
        i = i + 1;
        delay = delay * 10;
        if (i > value) {
          clearInterval(timer); //정지
        }
    }, delay);
}

function countingHeight(element, value, unit) {
    let j = 0;
    let delay = 10;
    const start = performance.now();

    const timer = setInterval(function() {
        const elapsed = performance.now() - start;
        j = easeOut(elapsed, value, 2000);
        element.style.height = Math.round(j) + unit; //반올림 + 단위
        j = j + 1;
        delay = delay * 10;
        if (j > value) {
          clearInterval(timer); //정지
        }
    }, delay);
    j = 0;
}

function countingOpacity(element, value, unit) {
    let j = 0;
    let delay = 10;
    const start = performance.now();

    const timerOpacity = setInterval(function() {
        const elapsed = performance.now() - start;
        j = easeOut(elapsed, value, 200);
        element.style.opacity = Math.round(j) + unit; //반올림 + 단위
        j = j + 1;
        delay = delay * 10;
        if (j > value) {
          clearInterval(timerOpacity); //정지
        }
    }, delay);
    j = 0;
}


function selectedGraph(index) {
    if(index == 0){
        unselectedGraph(1);
        unselectedGraph(2);
        unselectedGraph(3);
        year2020.style.opacity = 1;

        countingOpacity(graph2020, 100, '%');
        countingHeight(graph2020, 328, 'px');

        percent2020.style.opacity = 1;
        
        counting(percent2020, 82, '%');

        sexyTitle.innerText = "2020년 취업자 수"
        counting(sexyNumber, 59, '명');
    }else if(index == 1){
        unselectedGraph(0);
        unselectedGraph(2);
        unselectedGraph(3);
        year2021.style.opacity = 1;

        countingOpacity(graph2021, 100, '%');
        countingHeight(graph2021, 348, 'px');

        graph2021.style.height = 348 + "px";
        percent2021.style.opacity = 1;
        counting(percent2021, 87, '%');

        sexyTitle.innerText = "2021년 취업자 수"
        counting(sexyNumber, 66,'명');
        
    }else if(index == 2){
        unselectedGraph(0);
        unselectedGraph(1);
        unselectedGraph(3);
        year2022.style.opacity = 1;

        countingOpacity(graph2022, 100, '%');
        countingHeight(graph2022, 324, 'px');

        percent2022.style.opacity = 1;
        counting(percent2022, 81, '%');

        sexyTitle.innerText = "2022년 취업자 수"
        counting(sexyNumber, 59,'명');
        
    }else if(index == 3){
        unselectedGraph(0);
        unselectedGraph(2);
        unselectedGraph(1);
        year2023.style.opacity = 1;

        countingOpacity(graph2023, 100, '%');
        countingHeight(graph2023, 312, 'px');

        percent2023.style.opacity = 1;
        counting(percent2023, 79, '%'); 

        sexyTitle.innerText = "2023년 취업자 수"
        counting(sexyNumber, 59,'명');
        
    }
}

function unselectedGraph(index) {
    if(index == 0){

        graph2020.style.opacity = 0;
        percent2020.style.opacity = 0;
        
        year2020.style.opacity = 0.5;

    }else if(index ==1){

        graph2021.style.opacity = 0;
        percent2021.style.opacity = 0;
        year2021.style.opacity = 0.5;
    }else if(index == 2){

        graph2022.style.opacity = 0;
        percent2022.style.opacity = 0;
        year2022.style.opacity = 0.5;

    }else if(index == 3){

        graph2023.style.opacity = 0;
        percent2023.style.opacity = 0;
        year2023.style.opacity = 0.5;
    }
}

function catch2020Click(index){
    index = 0;
    selectedGraph(0);
    
}
function catch2021Click(index){
    index = 1;
    selectedGraph(1);
    
}
function catch2022Click(index){
    index = 2;
    selectedGraph(2);
    
}
function catch2023Click(index){
    index = 3;
    selectedGraph(3);
    
}

container2020.addEventListener('click', catch2020Click);
container2021.addEventListener('click', catch2021Click);
container2022.addEventListener('click', catch2022Click);
container2023.addEventListener('click', catch2023Click);