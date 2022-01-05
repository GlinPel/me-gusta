const meGustaArray = [9, 12, 9];
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
setMegustas();

function setMegustas(){
    card1.innerText = meGustaArray[0];
    card2.innerText = meGustaArray[1];
    card3.innerText = meGustaArray[2];
}

function darLike(position){
    meGustaArray[position]++;
    setMegustas();
}
