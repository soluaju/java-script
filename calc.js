function adicao(){
    let n1 = Number(window.prompt("digite um numero:"))
    let n2 = Number(window.prompt("digite outro numero:"))
    n3 = n1+n2

    let res = document.getElementById ('resultado')

    res.innerHTML = `<p> o resultado da soma é ${n3}.`
}

function subtracao(){
    let n1 = window.prompt("digite um numero:")
    let n2 = window.prompt("digite outro numero:")
    n3 = n1-n2

    let res = document.getElementById ('resultado')

    res.innerHTML = `<p> o resultado da soma é ${n3}.`
}

function divisao(){
    let n1 = window.prompt("digite um numero:")
    let n2 = window.prompt("digite outro numero:")
    n3 = n1/n2

    let res = document.getElementById ('resultado')

    res.innerHTML = `<p> o resultado da soma é ${n3}.`
}

function multiplicacao(){
    let n1 = window.prompt("digite um numero:")
    let n2 = window.prompt("digite outro numero:")
    n3 = n1*n2

    let res = document.getElementById ('resultado')

    res.innerHTML = `<p> o resultado da soma é ${n3}.`
}