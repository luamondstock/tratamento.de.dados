import { pegarCSS, configuraEixo} from "./comum.js"

async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/informacoes.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livros = Object.keys(dados)
    const valores = Object.values(dados)
                       
    const data = [
     {
        x: livros,
        y: valores,
        type: 'bar',
        marker: {
            color: pegarCSS('--cor02')
        }
     }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--cor03'),
        papper_bgcolor: pegarCSS('--cor02'),
        height: 500, 
        title:{
            text: 'Os livros mais vendidos no mundo',
            font:{
              color: pegarCSS('--cor02'),
              size: 20,
                }
        },
        xaxis:{
            tickfont: configuraEixo,
            tickangle: 35
        },
        yaxis:{
            tickfont: configuraEixo,
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

criarGraficoBarra()