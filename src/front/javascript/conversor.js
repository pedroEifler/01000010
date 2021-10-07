function conversor(input, tipo) {
    switch (tipo) {
        case 'dec':
            document.getElementById("binario").value = Number(input.value).toString(2)
            document.getElementById("hexadecimal").value = Number(input.value).toString(16)
            break;
        case 'bin':
            var valorDecimal = parseInt(Number(input.value), 2)
            document.getElementById("decimal").value = valorDecimal
            document.getElementById("hexadecimal").value = valorDecimal.toString(16)
            break;
        case 'hex':
            var valorDecimal = parseInt(input.value, 16)
            document.getElementById("decimal").value = valorDecimal
            document.getElementById("binario").value = valorDecimal.toString(2)
            break;
    }
}