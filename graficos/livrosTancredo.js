import { pegarCSS } from "./comum.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/pesquisaescola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livrosVotados = dados.slice(1).map(livros => livros[1])
    const contagemLivros = livrosVotados.reduce((acc, livrosVotados) => {
        acc[livrosVotados] = (acc[livrosVotados] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemLivros)
    const etiqueta = Object.keys(contagemLivros)

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
        paper_bgcolor: pegarCSS('--cor03'),
        font:{
            color: pegarCSS('--cor02'),
            family: pegarCSS('--fonto-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Os livros mais votados no Colégio <span>Tancredo</span>:`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }
    Plotly.newPlot(grafico, data, layout);

    const caixa = document.getElementById('caixa-grafico');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'Nota-se que o livro mais votado no colégio Tancredo, é diferente do mais votado no Brasil. Enquanto os estudantes elegeram, com 8 votos, <span>o Hearstopper: Dois garotos, um encontro</span> como o livro mais desejado, já a pesquisa nacional indicou que <span>Vermelho Branco e Sangue Azul</span> é o livro mais comprado Brasil. Na pesquisa feita na escola, o mesmo ficou em terceiro lugar.';

    caixa.appendChild(paragrafo);
}
graficosTancredo()
