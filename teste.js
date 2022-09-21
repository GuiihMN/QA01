function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0
    return valor - desconto
}

function aplicarDescontoTest(){
    return aplicarDesconto(10,2) === 8
}

console.log('A aplicação de desconto está funcionando? ')
console.log(aplicarDescontoTest())