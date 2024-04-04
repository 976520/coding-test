
const eapHackWonSeoJaeChul = document.getElementsByClassName('eap-hack-won-seo-jae-chul');
const firstSeoRyuJeonHyung = document.getElementsByClassName('first-seo-ryu-jeon-hyung');
const secondPyungGa = document.getElementsByClassName('second-pyung-ga');
const gyoulGwaBalPyo = document.getElementsByClassName('gyoul-gwa-bal-pyo');



const wonSeoJakSeong = document.getElementsByClassName('won-seo-jak-seong');

function wonSeoJakSeongClick(event) {
    if(wonSeoJakSeong.innerText == '원서작성') {
        wonSeoJakSeong.innerText = '| 원서작성 |';
    }
}

wonSeoJakSeong.getEventListener("click", wonSeoJakSeongClick);