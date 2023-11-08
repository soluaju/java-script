function media(){
    let nome = window.prompt(`digite o nome do aluno?`)
    let n1 = Number(window.prompt(`digite a primeira nota de ${nome}`))
    let n2 = Number(window.prompt(`alem de ${n1}, qual foi a outra nota de ${nome}?`))

    med = (n1+n2)/2

    let msg //vazia
    if (med>=6) {
        msg=`Meus parabens💙 voce passou!!`
        
    } else {
        msg= `estude mais um pouco`
    }
    let res = document.getElementById ('situacao')

    res.innerHTML = `<p>Calculando a media de ${nome}.</p>`
    res.innerHTML += `<P>as notas obtidas foram ${n1} e ${n2}.`
    res.innerHTML += `<p> A media final sera ${med}.`
    res.innerHTML += `<p> a mensagem que temos é:  ${msg}`
}