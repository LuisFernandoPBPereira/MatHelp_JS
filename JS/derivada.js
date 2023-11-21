function derivada(){
    let valorMultX = document.getElementById("valorMultX").value;
    let expo = document.getElementById("expo").value;
    let resultado = document.getElementById("result");
    let deriv = valorMultX * expo;
    let novoExpo = expo - 1;

    if(valorMultX.includes("cos")){
        resultado.innerHTML = `A derivada de cos(x) é: -sen(x)`;
    }
    else if(valorMultX.includes("sen")){
        resultado.innerHTML = `A derivada de sen(x) é: cos(x)`;
    }
    else if(valorMultX.includes("e") && expo == "x"){
        resultado.innerHTML = `A derivada de e^x é: e^x`;
    }
    else if(valorMultX.includes("ln(x)") || valorMultX.includes("lnx")){
        resultado.innerHTML = `A derivada de ln(x) é: 1/x`;
    }
    else if(novoExpo == 0){
        valorMultX = parseFloat(valorMultX);
        expo = parseFloat(expo);
        resultado.innerHTML = `A derivada de ${valorMultX}x^${expo} é: ${deriv}`;
    }
    else if(novoExpo == 1){
        parseFloat(valorMultX);
        parseFloat(expo);
        resultado.innerHTML = `A derivada de ${valorMultX}x é: ${deriv}x`;
    }
    else if(novoExpo>1){
        parseFloat(valorMultX);
        parseFloat(expo);
        resultado.innerHTML = `A derivada de ${valorMultX}x^${expo} é: ${deriv}x^${novoExpo}`;
    }
    else{
        resultado.innerHTML = "Valores incorretos, verifique-os";
    }
}