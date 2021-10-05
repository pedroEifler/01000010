function calcular() {
    var valorEsquerdo = parseInt(document.getElementById("inputValorEsquerdo").value, 2);
    var valorDireito = parseInt(document.getElementById("inputValorDireito").value, 2);
    var operador = document.getElementById("operador").value;
    var resultadoDecimal = document.getElementById("resultadoDecimal");
    var resultadoBinario = document.getElementById("resultadoBinario");
    var result = 0;

    switch (operador) {
        case '1':
            result = valorEsquerdo + valorDireito;
            break;
        case '2':
            result = valorEsquerdo - valorDireito;
            break;
        case '3':
            result = valorEsquerdo * valorDireito;
            break;
        case '4':
            result = valorEsquerdo / valorDireito;
            break;
    }

    resultadoDecimal.textContent = result
    resultadoBinario.textContent = result.toString(2)
}