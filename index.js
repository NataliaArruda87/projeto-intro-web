//Projeto Introdução Web

const listaAssistidos = []


serie1 = {
    titulo: "Arquivo X",
    temporadas: 11,
    tempoEp: 45,
    ano: 1993,
    diretor: "Rob Bowman",
    jaAssistiu: true,
    genero: "Policial, Ficção científica",
    elenco: ["David Duchovny", "Gillian Anderson", "Mitch Pileggi", "William B. Davis", "Nicholas Lea"],
    capa: "../Assets/series-X-Files.jpg",
    hiperlink: "https://www.starplus.com/pt-br",
    stream: "./Assets/Star-Plus-logo.jpg",
    trailer: "https://www.youtube.com/watch?v=KKziOmsJxzE",
    play: "./Assets/play.png"
}

serie2 = {
    titulo: "O Alienista",
    temporadas: 2,
    tempoEp: 50,
    ano: 2018,
    diretor: "Jakob Verbruggen",
    jaAssistiu: true,
    genero: "Drama, Épico, Policial, Suspense",
    elenco: ["Dakota Fanning", "Daniel Brühl", "Luke Evans", "Douglas Smith", "Matthew Shear"],
    capa: "../Assets/series-O-Alienista.jpg",
    hiperlink: "https://www.netflix.com/br/",
    stream: "./Assets/Netflix-Logo.png",
    trailer: "https://www.youtube.com/watch?v=YtzgFRBvRy8",
    play: "./Assets/play.png"
}

serie3 = {
    titulo: "The Walking Dead",
    temporadas: 11,
    tempoEp: 45,
    ano: 2010,
    diretor: "Daniel Sackheim",
    jaAssistiu: true,
    genero: "Ação, Drama, Suspense, Terror",
    elenco: ["Andrew Lincoln", "Norman Reedus", "Danai Gurira", "Melissa McBride", "Jeffrey Dean Morgan"],
    capa: "../Assets/series-The-Walking-Dead.jpg",
    hiperlink: "https://www.netflix.com/br/",
    stream: "./Assets/Netflix-Logo.png",
    trailer: "https://www.youtube.com/watch?v=sfAc2U20uyg",
    play: "./Assets/play.png"
}

serie4 = {
    titulo: "Downton Abbey",
    temporadas: 6,
    tempoEp: 45,
    ano: 2010,
    diretor: "Andy Goddard",
    jaAssistiu: true,
    genero:  "Drama, Histórico",
    elenco: ["Brendan Coyle", "Hugh Bonneville", "Maggie Smith", "Michelle Dockery", "Laura Carmichael"],
    capa: "../Assets/series-Downton-Abbey.jpg",
    hiperlink: "https://www.starplus.com/pt-br",
    stream: "./Assets/Star-Plus-logo.jpg",
    trailer: "https://www.youtube.com/watch?v=HsqjikADpxQ",
    play: "./Assets/play.png"
}

console.log(serie1.titulo.toUpperCase())
console.log(`Temporadas: ${serie1.temporadas}`)
console.log(`Duração Episódios: ${serie1.tempoEp}`)
console.log(`Ano: ${serie1.ano}`)
console.log(`Diretor: ${serie1.diretor}`)
console.log(`Já assistiu? ${serie1.jaAssistiu}`)
console.log(`Elenco: ${serie1.elenco}`)
console.log(`Genero: ${serie1.genero}`)

console.log(serie2.titulo.toUpperCase())
console.log(`Temporadas: ${serie2.temporadas}`)
console.log(`Duração Episódios: ${serie2.tempoEp}`)
console.log(`Ano: ${serie2.ano}`)
console.log(`Diretor: ${serie2.diretor}`)
console.log(`Já assistiu? ${serie2.jaAssistiu}`)
console.log(`Elenco: ${serie2.elenco}`)
console.log(`Genero: ${serie2.genero}`)

console.log(serie3.titulo.toUpperCase())
console.log(`Temporadas: ${serie3.temporadas}`)
console.log(`Duração Episódios: ${serie3.tempoEp}`)
console.log(`Ano: ${serie3.ano}`)
console.log(`Diretor: ${serie3.diretor}`)
console.log(`Já assistiu? ${serie3.jaAssistiu}`)
console.log(`Elenco: ${serie3.elenco}`)
console.log(`Genero: ${serie3.genero}`)

console.log(serie4.titulo.toUpperCase())
console.log(`Temporadas: ${serie4.temporadas}`)
console.log(`Duração Episódios: ${serie4.tempoEp}`)
console.log(`Ano: ${serie4.ano}`)
console.log(`Diretor: ${serie4.diretor}`)
console.log(`Já assistiu? ${serie4.jaAssistiu}`)
console.log(`Elenco: ${serie4.elenco}`)
console.log(`Genero: ${serie4.genero}`)


const mediaEp = (serie1.tempoEp+serie2.tempoEp+serie3.tempoEp+serie4.tempoEp) / 4
console.log(`Duração media dos episódios: ${mediaEp}`)

const tudoAssistido = (serie1.jaAssistiu && serie2.jaAssistiu && serie3.jaAssistiu && serie4.jaAssistiu)
console.log(`Todas as series já foram assistidas? ${tudoAssistido}`)

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

if (serie4.jaAssistiu){
    listaAssistidos.push(serie4)
}else{
    alert(`Serie ${serie4.titulo} não adicionada a sua lista de assistidos!`)
}

console.log(listaAssistidos)


for(series of listaAssistidos) {
    for(propriedades in series) {
        console.log(`${propriedades}: ${series[propriedades]}`)
    }
    series.stringElenco = series.elenco.join(", ")
}


function stringsDoRelatorio (objeto) {
    console.log(objeto)
}

stringsDoRelatorio(serie1)
stringsDoRelatorio(serie2)
stringsDoRelatorio(serie3)
stringsDoRelatorio(serie4)


const filtragem = (arraySeries, string) => {
    const resultado = arraySeries.filter((objeto) => {
        return objeto.titulo.toLowerCase() === string.toLowerCase()
    })

    if (resultado.length > 0){
        console.log(resultado)
    } else {
        alert("Nenhum item encontrado.")
    }
}

//let digita = prompt("Digite o nome de uma serie:")
filtragem(listaAssistidos, "Arquivo X")


let button = document.querySelector("#botao")
let input = document.querySelector("#pesquisa")
let cardSerie1 = document.querySelector("#serie1")
let cardSerie2 = document.querySelector("#serie2")
let cardSerie3 = document.querySelector("#serie3")
let cardSerie4 = document.querySelector("#serie4")
let altura = document.querySelector("#listasSeries")

    button.addEventListener("click", function() {
        const inputDigitado = input.value
        if(inputDigitado.toLowerCase() === "arquivo x" || inputDigitado.toLowerCase() === "ficção científica") {
            cardSerie1.style.display = "flex"
            cardSerie2.style.display = "none"
            cardSerie3.style.display = "none"
            cardSerie4.style.display = "none"
            altura.style.height = "28.75rem"
        }else if (inputDigitado.toLowerCase() === "o alienista" || inputDigitado.toLowerCase() === "épico") {
            cardSerie1.style.display = "none"
            cardSerie2.style.display = "flex"
            cardSerie3.style.display = "none"
            cardSerie4.style.display = "none"
            altura.style.height = "28.75rem"
        }else if (inputDigitado.toLowerCase() === "the walking dead" || inputDigitado.toLowerCase() === "ação" || inputDigitado.toLowerCase() === "terror") {
            cardSerie1.style.display = "none"
            cardSerie2.style.display = "none"
            cardSerie3.style.display = "flex"
            cardSerie4.style.display = "none"
            altura.style.height = "28.75rem"
        } else if (inputDigitado.toLowerCase() === "downton abbey" || inputDigitado.toLowerCase() === "histórico" ) {
            cardSerie1.style.display = "none"
            cardSerie2.style.display = "none"
            cardSerie3.style.display = "none"
            cardSerie4.style.display = "flex"
            altura.style.height = "28.75rem"
        } else if (inputDigitado.toLowerCase() === "suspense") {
            cardSerie1.style.display = "none"
            cardSerie2.style.display = "flex"
            cardSerie3.style.display = "flex"
            cardSerie4.style.display = "none"
        }else if (inputDigitado.toLowerCase() === "drama") {
            cardSerie1.style.display = "none"
            cardSerie2.style.display = "flex"
            cardSerie3.style.display = "flex"
            cardSerie4.style.display = "flex"
        } else if (inputDigitado.toLowerCase() === "policial"){
            cardSerie1.style.display = "flex"
            cardSerie2.style.display = "flex"
            cardSerie3.style.display = "none"
            cardSerie4.style.display = "none"
        } else {
            alert("Nenhuma serie encontrada!")
        }
    })

   
    

   


