/*
    Lorrainy
*/

function areaTrapezio(){
    // Solicitar ao usuário os valores das bases e altura do trapézio
    let baseMaior = parseFloat(document.getElementById("baseMaior").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let alturaTrapezio = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("result");

    // Verificar se as entradas são válidas
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(alturaTrapezio) || baseMaior <=0 || baseMenor <=0 || alturaTrapezio<=0) {
        resultado.innerHTML = "Por favor, insira números válidos.";
    } else {
    // Calcular a área do trapézio
    const areaTrapezio = ((baseMaior + baseMenor) / 2) * alturaTrapezio;

    // Exibir o resultado
    resultado.innerHTML = `A área do trapézio é: ${areaTrapezio.toFixed(2)}`;
}
}