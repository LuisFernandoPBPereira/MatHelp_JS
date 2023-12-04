/* 
    Lorrainy
*/

function areaCilindro(){
    // Solicitar ao usuário os valores do raio e altura do cilindro
    let raioCilindro = parseFloat(document.getElementById("raio").value);
    let alturaCilindro = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("result");

    // Verificar se as entradas são válidas
    if (isNaN(raioCilindro) || isNaN(alturaCilindro) || raioCilindro<=0 || alturaCilindro<=0) {
        resultado.innerHTML = "Por favor, insira números válidos.";
    } else {
    // Calcular a área do cilindro
    let areaBase = Math.PI * Math.pow(raioCilindro, 2);
    let areaLateral = 2 * Math.PI * raioCilindro * alturaCilindro;
    let areaTotal = 2 * areaBase + areaLateral;

    // Exibir o resultado
    resultado.innerHTML = `A área do cilindro é: ${areaTotal.toFixed(2)}`;
}
}