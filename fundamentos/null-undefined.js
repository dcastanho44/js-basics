let valor //não inicializada
console.log(valor) //undefined
console.log(valor2) //erro - IS NOT defined

valor = null //ausência de valor, mas a variável está definida
console.log(valor) //null
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, melhor usar delete para tirar valores
console.log(!!produto.preco)
console.log(produto)

produto.preco = null 
console.log(!!produto.preco)
console.log(produto)