/*
    Olívia
*/

function areaLosango(){
     // Obter os valores das diagonais maior e menor do formulário
     var diagMaior = parseFloat(document.getElementById('diagMaior').value);
     var diagMenor = parseFloat(document.getElementById('diagMenor').value);
 
     // Verificar se as entradas são válidas
     if (isNaN(diagMaior) || isNaN(diagMenor)) {
         document.getElementById('result').innerHTML = 'Por favor, insira valores numéricos válidos.';
     } else {
         // Calcular a área do losango
         var area = (diagMaior * diagMenor) / 2;
 
         // Exibir o resultado da área
         document.getElementById('result').innerHTML = 'Área do losango: ' + area.toFixed(2);
     }
}