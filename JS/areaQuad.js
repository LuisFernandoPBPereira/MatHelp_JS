/*
    Francielly
*/

function areaQuad() {
    let lado = parseFloat (document.getElementById("lado").value);
    let resultado = document.getElementById ("result");

    if(isNaN(lado)) 
    resultado.innerHTML = "Digite o valor corretamente";

    else {
        let area = lado * lado;
        resultado.innerHTML = `Area = ${area}`;
        console.log (resultado.value);

    }
}