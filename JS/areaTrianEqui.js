function areaTrianEqui(){
    let lado = parseFloat(document.getElementById("lado").value);
    let resultado = document.getElementById("result");

    if(isNaN(lado)){
        resultado.innerHTML = "Digite os valores corretamente"
    }
    else{
        let area = (Math.pow(lado, 2) * Math.sqrt(3))/4;
        resultado.innerHTML = `Área = ${area}`;
    }
}