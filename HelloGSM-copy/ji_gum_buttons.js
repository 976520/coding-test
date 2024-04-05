const jiGumButtonContainer = document.getElementById("ji-gum-buttons");

const wonSeoJakSeong = document.getElementById("won-seo-jak-seong");
const eapHackWonSeoJaeChul = document.getElementById('eap-hack-won-seo-jae-chul');
const firstSeoRyuJeonHyung = document.getElementById('first-seo-ryu-jeon-hyung');
const secondPyungGa = document.getElementById('second-pyung-ga');
const gyoulGwaBalPyo = document.getElementById('gyoul-gwa-bal-pyo');

function selectedButton(button) {
    button.style.fontWeight = '600';
    button.style.opacity = 1;
}

function unselectedButton(button) {
    button.style.fontWeight = '200';
    button.style.opacity = 0.5;
}

function catchClick(event) { 
    if (event.target.tagName !== 'H1') {
        return; 
    } else {
        if (event.target.id == "won-seo-jak-seong") {
            wonSeoJakSeong.innerText = '| 원서 작성 |';
            selectedButton(wonSeoJakSeong);
        } else {
            wonSeoJakSeong.innerText = '원서 작성';
            unselectedButton(wonSeoJakSeong);
        }
    
        if (event.target.id == "eap-hack-won-seo-jae-chul") {
            eapHackWonSeoJaeChul.innerText = '| 입학 원서 제출 |';
            selectedButton(eapHackWonSeoJaeChul);
        } else {
            eapHackWonSeoJaeChul.innerText = '입학 원서 제출';
            unselectedButton(eapHackWonSeoJaeChul);
        }
    
        if (event.target.id == "first-seo-ryu-jeon-hyung") {
            firstSeoRyuJeonHyung.innerText = '| 1차 서류 전형 |';
            selectedButton(firstSeoRyuJeonHyung);
        } else {
            firstSeoRyuJeonHyung.innerText = '1차 서류 전형'
            unselectedButton(firstSeoRyuJeonHyung);
        }
    
        if (event.target.id == "second-pyung-ga") {
            secondPyungGa.innerText = '| 2차 평가 |';
            selectedButton(secondPyungGa);
        } else {
            secondPyungGa.innerText = '2차 평가'
            unselectedButton(secondPyungGa);
        }
        
        if (event.target.id == "gyoul-gwa-bal-pyo") {
            gyoulGwaBalPyo.innerText = '| 결과 발표 |';
            selectedButton(gyoulGwaBalPyo);
        } else {
            gyoulGwaBalPyo.innerText = '결과 발표'
            unselectedButton(gyoulGwaBalPyo);
        }
    }
}

jiGumButtonContainer.addEventListener('click', catchClick);
