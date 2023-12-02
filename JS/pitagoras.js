/*
    Francielly
*/

function pitagoras(){
    let c1 = parseFloat (document.getElementById("cateto1").value);
    let c2 = parseFloat (document.getElementById("cateto2").value);
    let resultado = document.getElementById("result");

    if (isNaN(c1) || isNaN (c2)) 
    resultado.innerHTML = "Digite o valor corretamente";

    else {
        let hipotenusa = (c1 * c1) + (c2 * c2);
        resultado.innerHTML = `Hipotenusa = ${hipotenusa}`;
    }
}