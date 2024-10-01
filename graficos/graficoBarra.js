
async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}

criarGraficoBarra()