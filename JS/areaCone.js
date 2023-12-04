/*
    Lorrainy
*/

function areaCone(){
    // Solicitar ao usuário os valores do raio e altura do cone
    let raioCone = parseFloat(document.getElementById("raio").value);
    let alturaCone = parseFloat(document.getElementById("geratriz").value);
    let resultado = document.getElementById("result");

    // Verificar se as entradas são válidas
    if (isNaN(raioCone) || isNaN(alturaCone) || alturaCone<=0 || raioCone<=0) {
        resultado.innerHTML = "Por favor, insira números válidos.";
    } else {
        
    // Calcular a área do cone
    let areaTotalCone = Math.PI * Math.pow(raioCone, 2) + Math.PI * raioCone * alturaCone;

    // Exibir o resultado
    resultado.innerHTML = `A área do cone é: ${areaTotalCone.toFixed(2)}`;
}
}