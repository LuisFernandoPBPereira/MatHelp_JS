function derivada(){
    let valorMultX = parseFloat(document.getElementById("valorMultX").value);
    let expo = parseFloat(document.getElementById("expo").value);
    let resultado = document.getElementById("result");
    let deriv = valorMultX * expo;
    let novoExpo = expo - 1;

    if(novoExpo == 0){
        resultado.innerHTML = `A derivada de ${valorMultX}x^${expo} é: ${deriv}`;
    }
    else if(novoExpo == 1){
        resultado.innerHTML = `A derivada de ${valorMultX}x^${expo} é: ${deriv}x`;
    }
    else{
        resultado.innerHTML = `A derivada de ${valorMultX}x^${expo} é: ${deriv}x^${novoExpo}`;
    }  
}