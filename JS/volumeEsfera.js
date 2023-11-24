/*
    Luana
*/

function volumeEsfera(){
    let raio = parseFloat(document.getElementById("raio").value);
    let resultado = document.getElementById("result");

    if(isNaN(raio) || raio<=0)
        resultado.innerHTML = "Digite o valor corretamente";

    else{
        let volume = (4/3) * Math.PI * Math.pow(raio, 3);
        resultado.innerHTML = `Volume = ${volume.toFixed(3)}`;
    }
}