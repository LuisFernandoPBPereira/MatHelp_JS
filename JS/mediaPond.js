/*
    Thainá
*/

function mediaPond() {
    const notas = [];
    const pesos = [];

    let resultado = document.getElementById("result");

    //Buscando valores dos pesos e das notas
    for (let i = 1; i < 4; i++) {
        let nota = parseFloat(document.getElementById(`valor${i}`).value);
        let peso = parseFloat(document.getElementById(`peso${i}`).value);

        if (isNaN(nota) || isNaN(peso)) {
            resultado.innerHTML = "Preencha todos os campos";
            return;
        }
        else {
            notas.push(nota);
            pesos.push(peso);
        }
    }

    //Calculando média ponderada
    let mediaPonderada = calcularMediaPonderada(notas, pesos);
    resultado.innerHTML = `Média = ${mediaPonderada.toFixed(2)}`;

}

function calcularMediaPonderada(notas, pesos) {

    const somaProdutos = notas.reduce((acumulador, nota, indice) => {
        return acumulador + nota * pesos[indice];
    }, 0);

    const somaPesos = pesos.reduce((acumulador, peso) => {
        return acumulador + peso;
    }, 0);

    const mediaPonderada = somaProdutos / somaPesos;
    return mediaPonderada;
}