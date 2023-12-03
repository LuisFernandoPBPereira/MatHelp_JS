/*
    Thainá
*/

function mediaPond() {
    const { notas, pesos } = obterNotasEPesos();
    const resultado = calcularMediaPonderada(notas, pesos);

    console.log("A média ponderada é:", resultado);
}

function calcularMediaPonderada(notas, pesos) {
    if (notas.length !== pesos.length) {
        throw new Error("O número de notas deve ser igual ao número de pesos.");
    }

    const somaProdutos = notas.reduce((acumulador, nota, indice) => {
        return acumulador + nota * pesos[indice];
    }, 0);

    const somaPesos = pesos.reduce((acumulador, peso) => {
        return acumulador + peso;
    }, 0);

    const mediaPonderada = somaProdutos / somaPesos;
    return mediaPonderada;
}

function obterNotasEPesos() {
    const notas = [];
    const pesos = [];

    const numeroDeNotas = parseInt(prompt("Quantas notas você tem?"));

    for (let i = 0; i < numeroDeNotas; i++) {
        const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
        const peso = parseFloat(prompt(`Digite o peso para a nota ${i + 1}:`));

        notas.push(nota);
        pesos.push(peso);
    }

    return { notas, pesos };
}