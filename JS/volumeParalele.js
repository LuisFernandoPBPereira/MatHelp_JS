/*
    Luana
*/

function volumeParalele(){
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let resultado = document.getElementById("result");

    if(isNaN(altura) || isNaN(largura) || isNaN(comprimento))
        resultado.innerHTML = "Digite o valor corretamente";

    else{
        let volume = altura * largura * comprimento;
        resultado.innerHTML = `Volume = ${volume}`;
    }
}