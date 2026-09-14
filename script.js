/* Script - Projeto: Calculadora Regra de Cramer */

// Cálculos das determinantes
function calcularD(x1, x2, y1, y2) {
    let d = (x1 * y2) - (y1 * x2)
    return d
}

function calcularDx(y1, y2, r1, r2) {
    let dx = (r1 * y2) - (y1 * r2)
    return dx
}

function calcularDy(x1, x2, r1, r2) {
    let dy = (x1 * r2) - (r1 * x2)
    return dy
}

// Cálculos das incógnitas
function calcularX(d, dx) {
    let x = dx/d
    return x
}

function calcularY(d, dy) {
    let y = dy/d
    return y
}

// função principal executada ao pressionar botão
function executarCalculo() {

    // Primeiro, os campos de texto são limpos (caso haja alguma saída ou mensagem)
    document.querySelectorAll(".resultado").forEach(resultado => {
        resultado.innerText = ""
    })

    document.getElementById("mensagem").innerText = ""

    // Recebendo valores do formulário
    let x1 = Number(document.getElementById("x1").value)
    let x2 = Number(document.getElementById("x2").value)
    let y1 = Number(document.getElementById("y1").value)
    let y2 = Number(document.getElementById("y2").value)
    let r1 = Number(document.getElementById("r1").value)
    let r2 = Number(document.getElementById("r2").value)

    // Determinantes
    let d = calcularD(x1, x2, y1, y2)
    let dx = calcularDx(y1, y2, r1, r2)
    let dy = calcularDy(x1, x2, r1, r2)

    if(d == 0) {
        let campoMensagem = document.getElementById("mensagem")
        campoMensagem.innerText = "Não é possível calcular as incógnitas, divisão por 0."
        return
    }

    // Calculando incógnitas
    let x = calcularX(d, dx)
    let y = calcularX(d, dy)

    // Buscando os campos de saída das determinantes
    let campoD = document.getElementById("d")
    let campoDx = document.getElementById("dx")
    let campoDy = document.getElementById("dy")

    // Buscando campos de saída dos dados
    let campoX = document.getElementById("saidaX")
    let campoY = document.getElementById("saidaY")

    // Exibindo resultados das determinantes
    campoD.innerText = "D = " + d 
    campoDx.innerText = "Dx = " + dx
    campoDy.innerText = "Dy = " + dy

    // Exibindo os resultados das incógnitas
    campoX.innerText = "X = " + x
    campoY.innerText = "Y = " + y

}

function limparDados() {
    // Limpando saídas
    document.querySelectorAll(".resultado").forEach(resultado => {
        resultado.innerText = ""
    })

    // Limpando inputs
    let formulario = document.querySelector("#form")
    formulario.reset()

    // Limpando mensagem
    document.getElementById("mensagem").innerText = ""

}