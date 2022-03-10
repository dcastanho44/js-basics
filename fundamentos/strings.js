const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //vazio
console.log(escola.charCodeAt(3)) //valor dentro da tabela ASCII
console.log(escola.indexOf('d'))

console.log(escola.substring(1)) //escrevendo a partir do indice 1
console.log(escola.substring(0, 3)) //escrevendo do 0 ao 3

console.log('Escola '.concat(escola).concat("!")) //concatenando
console.log('Escola ' + escola + ("!")) //concatenando de outra forma
console.log(escola.replace(3, 'e')) //trocando o 3 pelo E

console.log('Ana,Maria,Pedro'.split(',')) //vai criar um array