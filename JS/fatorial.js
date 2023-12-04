/*
    Thainá
*/

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function fatorial(){
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = document.getElementById("result");
    
    if (numero < 0) {
        resultado.innerHTML = ("O fatorial não está definido para números negativos.");
    } else {
       let fatorialCalculado = calcularFatorial(numero);
        resultado.innerHTML = `Resultado: ${fatorialCalculado}`;
    }
}