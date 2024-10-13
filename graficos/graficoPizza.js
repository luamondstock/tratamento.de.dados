import { pegarCSS } from "./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/livrosedtseguinte2023.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livros = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [ 
        {
          values: valores,
          labels: livros,
          type: 'pie', 
          textinfo: 'label + percent'
        }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--cor03'),
        paper_bgcolor: pegarCSS('--cor03'),
        font:{
          color: pegarCSS('--pretinho'),
          family: pegarCSS('--pretinho'),
          size: 16,
        }
    }

    const livrosTitulo = document.createElement("h3")
    livrosTitulo.classList.add("caixa-grafico__titulo")
    livrosTitulo.innerHTML = `Os <span>livros</span> mais vendidos da editora seguinte em 2023:`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(livrosTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
    
}

criarGraficoPizza()