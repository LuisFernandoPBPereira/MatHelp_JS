/*
    Luana
*/

function volumeCubo(){
    let aresta = parseFloat(document.getElementById("aresta").value);
    let resultado = document.getElementById("result");

    if(isNaN(aresta) || aresta<=0)
        resultado.innerHTML = "Digite o valor corretamente";

    else{
        let volume = aresta **3;
        resultado.innerHTML = `Volume = ${volume}`;
    }
}