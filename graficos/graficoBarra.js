
async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/informacoes.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livros = Object.keys(dados)
    const valores = Object.values(dados)

    
}

criarGraficoBarra()