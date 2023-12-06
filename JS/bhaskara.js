/*
    Thainá
*/

function bhaskara(){
    //Coleto os valores declarados nos inputs e transformo em float
    let axValue = parseFloat(document.getElementById("axValue").value)
    let bxValue = parseFloat(document.getElementById("bxValue").value)
    let cValue = parseFloat(document.getElementById("cValue").value)

    //result recebe o elemento html para mostrar o resultado
    let result = document.getElementById("result")
    let equacao = document.getElementById("equacao")
    
    if(bxValue < 0){
        equacao.innerHTML = `${axValue}X²  ${bxValue} + ${cValue} = 0`
    }
    else if(cValue < 0){
        equacao.innerHTML = `${axValue}X² + ${bxValue}  ${cValue} = 0`
    }
    else if(bxValue < 0 && cValue < 0){
        equacao.innerHTML = `${axValue}X²  ${bxValue}  ${cValue} = 0`
    }
    else{
        equacao.innerHTML = `${axValue}X² + ${bxValue} + ${cValue} = 0`
    }

    //Faço os cálculos necessários
    //Delta: b² - 4.a.c
    let delta = (bxValue ** 2) - 4 * axValue * cValue 
    //Xv: -b / 2.a
    let verticeX = -bxValue / (2*axValue)
    //Yv: -Δ / 4.a
    let verticeY = -delta / (4*axValue)
    if(delta < 0){
        result.innerHTML = "Delta é negativo, não há raízes"
    }
    else{
        //Bhaskara: -b +- √Δ / 2.a
        let x1 = (-bxValue + Math.sqrt(delta)) / 2 * axValue
        let x2 = (-bxValue - Math.sqrt(delta)) / 2 * axValue
    
        result.innerHTML = `Resultado X': ${x1} <br> 
                            Resultado X": ${x2} <br>
                            Delta: ${delta} <br>
                            Vértice Xv: ${verticeX}<br>
                            Vértice Yv: ${verticeY}`
    }

}
