/*
    Olívia
*/

function areaRetan(){
    // Obter os valores da base e altura do formulário
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Verificar se as entradas são válidas
    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('result').innerHTML = 'Por favor, insira valores numéricos válidos.';
    } else {
        // Calcular a área do retângulo
        var area = base * altura;

        // Exibir o resultado da área
        document.getElementById('result').innerHTML = 'Área do retângulo: ' + area.toFixed(2);
    }
}