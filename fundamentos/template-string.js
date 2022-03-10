//strings normais

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//template strings (suporta quebra de linhas)

const template = `
    Olá
    ${nome}!
`

console.log(concatenacao, template)

//expressões

console.log(`1 + 1 = ${1+1}`) //vai somar apenas dentro do ${}

const up = texto => texto.toUpperCase() //função
console.log(`Ei... ${up('letra maiuscula')}!`)