function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = { 
    color: pegarCSS('--roxinho'),
    size: 16,
    family: pegarCSS('--fonte-family')
}

export {pegarCSS, configuraEixo}