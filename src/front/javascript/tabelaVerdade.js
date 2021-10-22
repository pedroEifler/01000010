const visor = document.getElementById("visor");
let matrixes = [];
let formulaMapeada = [];
let resultado = []

function escreverFormula(input) {
    document.getElementById("visor").value += input.value + " ";
}

function calcular() {
    matrixes = [];
    formulaMapeada = [];
    resultado = []

    montarMatrix();
    mapearFormula();
    executarFormula();
}

function montarMatrix() {
    const qtdEntradas = pegarQtdEntradas()

    if (qtdEntradas === 1) {
        matrixes = [
            [true, false],
            [false, false]
        ];
    }
    if (qtdEntradas === 2) {
        matrixes = [
            [true, true, false, false],
            [true, false, true, false]
        ];
    }
    if (qtdEntradas === 3) {
        matrixes = [
            [true, true, true, true, false, false, false, false],
            [true, true, false, false, true, true, false, false],
            [true, false, true, false, true, false, true, false]
        ];
    }
}

function pegarQtdEntradas() {
    let qtdEntradas = 0;

    if (visor.value.includes("A")) {
        qtdEntradas++;
    }
    if (visor.value.includes("B")) {
        qtdEntradas++;
    }
    if (visor.value.includes("C")) {
        qtdEntradas++;
    }
    return qtdEntradas
}

function mapearFormula() {
    const formulaSeparada = visor.value.split(" ");
    formulaSeparada.pop();
    formulaSeparada.map(item => {
        item === "∧" ? formulaMapeada.push("&&") :
            item === "∨" ? formulaMapeada.push("||") :
                item === "~" ? formulaMapeada.push("!") : formulaMapeada.push(item)
    });

    formulaMapeada = formulaMapeada.flat().toString().replaceAll(",", " ")
}

function executarFormula() {
    for (let i = 0; i < matrixes[0].length; i++) {
        let A;
        let B;
        let C;
        let index = 0;

        if (formulaMapeada.includes("A")) {
            A = matrixes[index][i];
            index++;
        }
        if (formulaMapeada.includes("B")) {
            B = matrixes[index][i];
            index++;
        }
        if (formulaMapeada.includes("C")) {
            C = matrixes[index][i];
            index++;
        }
        resultado.push(eval(formulaMapeada))
    }
    resultado.toString().replaceAll("true", 1).replaceAll("false", 0);
}

function limpar() {
    document.getElementById("visor").value = "";
}