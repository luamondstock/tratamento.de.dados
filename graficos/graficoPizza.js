import { pegarCSS, configuraEixo} from "./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/luamondstock/API2024/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()
    const livros = Object.keys(dados)
    const valores = Object.values(dados)
                       
    for(let i = 0; i <= dados.length; i++){
        console.log(Object)
        
    }
}

criarGraficoPizza()