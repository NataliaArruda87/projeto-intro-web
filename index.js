//Projeto Introdução Web

const listaAssistidos = []


serie1 = {
    titulo: "Arquivo X",
    temporadas: 11,
    tempoEp: 45,
    ano: 1993,
    diretor: "Rob Bowman",
    jaAssistiu: true,
    elenco: ["David Duchovny", "Gillian Anderson", "Mitch Pileggi", "William B. Davis", "Nicholas Lea"]
}

serie2 = {
    titulo: "O Alienista",
    temporadas: 2,
    tempoEp: 50,
    ano: 2018,
    diretor: "Jakob Verbruggen",
    jaAssistiu: true,
    elenco: ["Dakota Fanning", "Daniel Brühl", "Luke Evans", "Douglas Smith", "Matthew Shear"]
}

serie3 = {
    titulo: "The Walking Dead",
    temporadas: 11,
    tempoEp: 45,
    ano: 2010,
    diretor: "Daniel Sackheim",
    jaAssistiu: true,
    elenco: ["Andrew Lincoln", "Norman Reedus", "Danai Gurira", "Melissa McBride", "Jeffrey Dean Morgan"]
}

if (serie1.jaAssistiu){
    listaAssistidos.push(serie1)
}else{
    alert(`Serie ${serie1.titulo} não adicionada a sua lista de assistidos!`)
}

if (serie2.jaAssistiu){
    listaAssistidos.push(serie2)
}else{
    alert(`Serie ${serie2.titulo} não adicionada a sua lista de assistidos!`)
}

if (serie3.jaAssistiu){
    listaAssistidos.push(serie3)
}else{
    alert(`Serie ${serie3.titulo} não adicionada a sua lista de assistidos!`)
}


console.log(listaAssistidos)


for(series of listaAssistidos) {
    for(propriedades in series) {
        console.log(`${propriedades}: ${series[propriedades]}`)
    }
    series.stringElenco = series.elenco.join(", ")
}

const mediaEp = (serie1.tempoEp+serie2.tempoEp+serie3.tempoEp) / 3
console.log(`Duração media dos episódios: ${mediaEp}`)

const tudoAssistido = (serie1.jaAssistiu && serie2.jaAssistiu && serie3.jaAssistiu)
console.log(`Todas as series já foram assistidas? ${tudoAssistido}`)

/*console.log(serie1.titulo.toUpperCase())
console.log(`Temporadas: ${serie1.temporadas}`)
console.log(`Duração Episódios: ${serie1.tempoEp}`)
console.log(`Ano: ${serie1.ano}`)
console.log(`Diretor: ${serie1.diretor}`)
console.log(`Já assistiu? ${serie1.jaAssistiu}`)
console.log(`Elenco: ${serie1.elenco}`)

console.log(serie2.titulo.toUpperCase())
console.log(`Temporadas: ${serie2.temporadas}`)
console.log(`Duração Episódios: ${serie2.tempoEp}`)
console.log(`Ano: ${serie2.ano}`)
console.log(`Diretor: ${serie2.diretor}`)
console.log(`Já assistiu? ${serie2.jaAssistiu}`)
console.log(`Elenco: ${serie2.elenco}`)

console.log(serie3.titulo.toUpperCase())
console.log(`Temporadas: ${serie3.temporadas}`)
console.log(`Duração Episódios: ${serie3.tempoEp}`)
console.log(`Ano: ${serie3.ano}`)
console.log(`Diretor: ${serie3.diretor}`)
console.log(`Já assistiu? ${serie3.jaAssistiu}`)
console.log(`Elenco: ${serie3.elenco}`)*/
