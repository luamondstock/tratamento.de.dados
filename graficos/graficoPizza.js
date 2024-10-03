import { pegarCSS, configuraEixo} from "./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livros = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [ 
      {
        values: valores,
        labels: livros,
        type: 'pie', 
        textinfo: 'label + percent', 
      }
    ]
    const layout = {
        height: 400, 
        width: 600, 
        plot_bgcolor: pegarCSS('--cor02'),
        paper_bgcolor: pegar('--cor03')
    }
    const livrosTitulo = document.createElement("h3")
    livrosTitulo.classList.add("caixa-grafico__titulo")
    livrosTitulo.innerHTML = ' Os <span>livros</span> mais vendidos da editora seguinte em 2023'
}

criarGraficoPizza()