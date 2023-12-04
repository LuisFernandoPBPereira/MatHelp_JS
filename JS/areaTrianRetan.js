function areaTrianRetan(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("result");

    if(isNaN(base) || isNaN(altura || altura <=0 || base <=0)){
        resultado.innerHTML = "Digite os valores corretamente";
    }
    else{
        let area = (base * altura)/2;
        resultado.innerHTML = `Área = ${area.toFixed(2)}`;
    }
}