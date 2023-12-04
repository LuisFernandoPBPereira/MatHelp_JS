/*
    Olívia
*/

function distEntrePontos(){
     // Obter os valores de X1, X2, Y1 e Y2 do formulário
     var x1 = parseFloat(document.getElementById('x1').value);
     var x2 = parseFloat(document.getElementById('x2').value);
     var y1 = parseFloat(document.getElementById('y1').value);
     var y2 = parseFloat(document.getElementById('y2').value);
 
     // Verificar se as entradas são válidas
     if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
         document.getElementById('result').innerHTML = 'Por favor, insira valores numéricos válidos.';
     } else {
         // Calcular a distância entre os pontos usando a fórmula
         var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 
         // Exibir o resultado da distância
         document.getElementById('result').innerHTML = 'Distância entre os pontos: ' + distancia.toFixed(2);
     }lógica
}