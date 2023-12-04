/*
    Thainá
*/

function calcularRaizes(a, b, c) {
   
    const delta = b * b - 4 * a * c;

   
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        return [];
    }
}


function bhaskara() {
   
    const a = parseFloat(document.getElementById("axValue").value);//a
    const b = parseFloat(document.getElementById("bxValue").value);//b
    const c = parseFloat(document.getElementById("cValue").value);//c

    let resultado = document.getElementById("result");
   
    const raizes = calcularRaizes(a, b, c);

   
    if (raizes.length === 0) {
        resultado.innerHTML = ("A equação não possui raízes reais.");
    } else if (raizes.length === 1) {
        resultado.innerHTML = (`A equação possui uma raiz real: x = ${raizes[0]}`);
    } else {
        resultado.innerHTML = (`A equação possui duas raízes reais: x1 = ${raizes[0]}, x2 = ${raizes[1]}`);
    }
}