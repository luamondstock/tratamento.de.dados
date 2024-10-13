import { pegarCSS } from "./comum.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/pesquisaescola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const turmasParticipantes = dados.slice(1).map(turmas => turmas[0])
    const contagemTurmas = turmasParticipantes.reduce((acc, turmasParticipantes) => {
        acc[turmasParticipantes] = (acc[turmasParticipantes] || 0) + 1 
        return acc
    }, {})


    const valores = Object.values(contagemTurmas)
    const etiqueta = Object.keys(contagemTurmas)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCSS('--cor03'),
        paper_bgcolor: pegarCSS('cor03'),
        font:{
            color: pegarCSS('--cor02'),
            family: pegarCSS('--fonto-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Grafíco das turmas do <span>Tancredo</span> que mais votaram:`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout)

    console.table(dados.slice(1))
}

graficosTancredo()