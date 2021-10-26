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
            [true, false]
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
            [true, true, true, false, false, false, true, false],
            [true, true, false, true, false, true, false, false],
            [true, false, true, true, true, false, false, false]
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
                item === "∼" ? formulaMapeada.push("!") : formulaMapeada.push(item)
    });

    formulaMapeada = formulaMapeada.flat().toString().replaceAll(",", " ")
}

function executarFormula() {
    try {
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

        renderizarResposta();
    } catch (error) {
        alert("Formula inválida")
    }
}

function renderizarResposta() {
    const hasTable = document.getElementsByTagName("table")
    if (hasTable.length > 0) {
        hasTable[0].remove()
    }
    const tableResposta = document.getElementById("resposta");
    const table = document.createElement("table");
    table.className = "table";
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tableResposta.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    if (formulaMapeada.includes("A")) {
        let th = document.createElement("th");
        th.textContent = "A"
        thead.appendChild(th)
    }
    if (formulaMapeada.includes("B")) {
        let th = document.createElement("th");
        th.textContent = "B"
        thead.appendChild(th)
    }
    if (formulaMapeada.includes("C")) {
        let th = document.createElement("th");
        th.textContent = "C"
        thead.appendChild(th)
    }

    let th = document.createElement("th");
    th.textContent = document.getElementById("visor").value
    thead.appendChild(th)

    for (let i = 0; i < matrixes[0].length; i++) {
        const tr = document.createElement("tr");
        for (let y = 0; y < thead.childElementCount; y++) {
            const td = document.createElement("td");
            td.textContent = thead.childElementCount - 1 === y ?
                resultado[i].toString().replace("true", 1).replace("false", 0)
                : matrixes[y][i].toString().replace("true", 1).replace("false", 0)
            tr.appendChild(td);
            tbody.appendChild(tr)
        }
    }
}

function limpar() {
    document.getElementById("visor").value = "";
    const hasTable = document.getElementsByTagName("table")
    if (hasTable.length > 0) {
        hasTable[0].remove()
    }
}