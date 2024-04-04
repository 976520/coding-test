const buttonContainer = document.getElementById("ji-gum-buttons");

const wonSeoJakSeong = document.getElementById("won-seo-jak-seong");

const eapHackWonSeoJaeChul = document.getElementById('eap-hack-won-seo-jae-chul');
const firstSeoRyuJeonHyung = document.getElementById('first-seo-ryu-jeon-hyung');
const secondPyungGa = document.getElementById('second-pyung-ga');
const gyoulGwaBalPyo = document.getElementById('gyoul-gwa-bal-pyo');



function click(event) { 
    if (event.target.tagname == "H1"){
        if (event.target.id == "won-seo-jak-seong") {
            wonSeoJakSeong.innerText = '| 원서 작성 |';
        } else {
            wonSeoJakSeong.innerText = '원서 작성';
        }
    
        if (event.target.id == "eap-hack-won-seo-jae-chul") {
            eapHackWonSeoJaeChul.innerText = '| 입학 원서 제출 |';
        } else {
            eapHackWonSeoJaeChul.innerText = '입학 원서 제출';
        }
    
        if (event.target.id == "first-seo-ryu-jeon-hyung") {
            firstSeoRyuJeonHyung.innerText = '| 1차 서류 전형 |';
        } else {
            firstSeoRyuJeonHyung.innerText = '1차 서류 전형'
        }
    
        if (event.target.id == "second-pyung-ga") {
            secondPyungGa.innerText = '| 2차 평가 |';
        } else {
            secondPyungGa.innerText = '2차 평가'
        }
        
        if (event.target.id == "gyoul-gwa-bal-pyo") {
            gyoulGwaBalPyo.innerText = '| 결과 발표 |';
        } else {
            gyoulGwaBalPyo.innerText = '결과 발표'
        }
    } else {

    }

}

buttonContainer.addEventListener('click', click);

