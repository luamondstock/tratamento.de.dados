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
    paragrafo.innerHTML = `Neste site você encontrará os livros mais aclamados pelo público brasileiro. Foi feita uma série de pesquisas com diferentes fontes, com o auxlio da inteligência artificial chatGPT, foi possivel analizar que o livro mais lido foi ${livroMaisLido} com total de pessoas que leram de aproximadamente ${votantes}`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}
    
vizualizarInformacoes()