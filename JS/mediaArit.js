/*
    Francielly
*/

function mediaArit(){
    let v1 = parseFloat (document.getElementById("valor1").value);
    let v2 = parseFloat (document.getElementById("valor2").value);
    let v3 = parseFloat (document.getElementById("valor3").value);
    let resultado = document.getElementById ("result");

    if (isNaN(v1) || isNaN (v2) || isNaN (v3))
    resultado.innerHTML = "Digite o valor corretamente";

    else {
        let media = (v1 + v2 + v3)/3;
        resultado.innerHTML = `Media = ${media.toFixed(2)}`;
    }
}   