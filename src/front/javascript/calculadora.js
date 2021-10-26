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

    /* Faz o calculo com os números em decimal */
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

    renderizarResultado(resultado)

    /* Mostra na interface o resultado */
    // document.getElementById("resultadoDecimal").textContent = resultado
    // document.getElementById("resultadoBinario").textContent = resultado.toString(2)
    // document.getElementById("resultadoHexadecimal").textContent = resultado.toString(16)
}

function converterParaDecimal(valor, tipo) {
    return parseInt(valor, tipo)
}

function renderizarResultado(resultado) {
    const hasTable = document.getElementsByTagName("table")
    if (hasTable.length > 0) {
        hasTable[0].remove()
    }
    const tableResposta = document.getElementById("resposta");
    const table = document.createElement("table");
    table.className = "table";

    const thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let thDec = document.createElement("th");
    let thBin = document.createElement("th");
    let thHex = document.createElement("th");
    thDec.textContent = "Decimal";
    thBin.textContent = "Binário";
    thHex.textContent = "Hexadecimal";

    thead.appendChild(trHead);
    trHead.appendChild(thDec);
    trHead.appendChild(thBin);
    trHead.appendChild(thHex);

    const tbody = document.createElement("tbody");
    const trBody = document.createElement("tr");
    const tdDec = document.createElement("td");
    const tdBin = document.createElement("td");
    const tdHex = document.createElement("td");
    tdDec.textContent = resultado;
    tdBin.textContent = resultado.toString(2);
    tdHex.textContent = resultado.toString(16);

    tbody.appendChild(trBody);
    trBody.appendChild(tdDec);
    trBody.appendChild(tdBin);
    trBody.appendChild(tdHex);


    tableResposta.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
}

function limpar() {
    document.getElementById("tipoEsquerdo").value = 2;
    document.getElementById("tipoDireito").value = 2;
    document.getElementById("inputValorEsquerdo").value = "";
    document.getElementById("inputValorDireito").value = "";
    document.getElementById("operador").value = 1;
    const hasTable = document.getElementsByTagName("table")
    if (hasTable.length > 0) {
        hasTable[0].remove()
    }
}