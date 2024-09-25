const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/entrevista.json'

async function vizualizarInformacoes(){
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados.total_entrevistados)
}
    
vizualizarInformacoes()