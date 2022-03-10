const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10 //adicionou o 10 na posição 4
console.log(valores)
console.log(valores.length) //5 elementos

valores.push({id:3}, false, null, 'teste') //não criar array com dados misturados, mistura, mas é confusão
console.log(valores)

console.log(valores.pop()) //saca o ultimo valor 
delete valores[0] //saca o valor do indice 0
console.log(valores)

console.log(typeof valores)