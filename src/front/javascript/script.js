function calcular() {
    /* Tipos (Bin|Hex) == (2|16) */
    const tipoEsquerdo = document.getElementById("tipoEsquerdo").value;
    const tipoDireito = document.getElementById("tipoDireito").value;

    /* Valores digitados pelo usuário */
    const valorEsquerdo = document.getElementById("inputValorEsquerdo").value;
    const valorDireito = document.getElementById("inputValorDireito").value;

    /* Sinal escolhido pelo usuário (+|-|x|/) == (1|2|3|4) */
    const operador = document.getElementById("operador").value;

    /* Valores convertidos para decimal pra conseguir calcular */
    const valorEsquerdoDecimal = converterParaDecimal(valorEsquerdo, tipoEsquerdo);
    const valorDireitoDecimal = converterParaDecimal(valorDireito, tipoDireito)

    let resultado = 0;

    switch (operador) {
        case '1':
            resultado = valorEsquerdoDecimal + valorDireitoDecimal;
            break;
        case '2':
            resultado = valorEsquerdoDecimal - valorDireitoDecimal;
            break;
        case '3':
            resultado = valorEsquerdoDecimal * valorDireitoDecimal;
            break;
        case '4':
            resultado = valorEsquerdoDecimal / valorDireitoDecimal;
            break;
    }

    document.getElementById("resultadoDecimal").textContent = resultado
    document.getElementById("resultadoBinario").textContent = resultado.toString(2)
    document.getElementById("resultadoHexadecimal").textContent = resultado.toString(16)
}

function converterParaDecimal(valor, tipo) {
    return parseInt(valor, tipo)
}

function limpar() {
    document.getElementById("tipoEsquerdo").value = 2;
    document.getElementById("tipoDireito").value = 2;
    document.getElementById("inputValorEsquerdo").value = "";
    document.getElementById("inputValorDireito").value = "";
    document.getElementById("operador").value = 1;
    document.getElementById("resultadoDecimal").textContent = ""
    document.getElementById("resultadoBinario").textContent = ""
    document.getElementById("resultadoHexadecimal").textContent = ""
}