const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/entrevista.json'
async function vizualizarInformacoes(){
    const res = await fetch(url)
    const dados = await res.json()

    const livroMaisLido = dados[0].titulo
    const votantes = dados[0].numero_votantes
    const opinioes = dados[0].opiniao

    console.log(dados[0].opiniao)

    const paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')
   
    paragrafo.innerHTML = `Neste site você encontrará os livros mais aclamados pelo público brasileiro. 
    Foi feita uma série de pesquisas com diferentes fontes, com o auxílio da inteligência artificial chatGPT,
     foi possivel analizar que o livro mais lido foi <span>${livroMaisLido}</span> com total de pessoas que leram de aproximadamente <span>${votantes}</span>. A opinião popular sobre o livro foi: <span>${opinioes}</span>`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}
    
vizualizarInformacoes()