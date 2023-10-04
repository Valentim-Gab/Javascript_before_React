// Métodos de array
document.body.innerHTML += `<h1>Métodos de array2</h1>`

const array2 = [1, 2, 3, 4, 5]

// for (const item of array2) {
//   document.body.innerHTML += `<h3>${item}</h3>`
// }

// array2.forEach(item => {
//   document.body.innerHTML += `<h3>${item}</h3>`
// })

// const newArray2 = []
// array2.forEach(item => {
//   newArray2.push(item * 2)
// })

// MAP: Retorna um array de mesmo tamanho
document.body.innerHTML += `<h1>Map</h1>`

const newArray2 = array2.map(item => {
  if (item % 2 == 0) {
    return item * 10
  }

  return item
})

document.body.innerHTML += `<h3>${JSON.stringify(newArray2)}</h3>`

// map, filter, every, some, find, findIndex, reduce

// FILTER: Filtra os itens de acordo com uma condicional
document.body.innerHTML += `<h1>Filter</h1>`

const newArray3 = array2.filter(item => item % 2 !== 0).map(item => item * 10)

document.body.innerHTML += `<h3>${JSON.stringify(newArray3)}</h3>`

// EVERY: Verifica se o array inteiro atende uma condição
document.body.innerHTML += `<h1>Every</h1>`

const onlyNumberArray = array2.every(item => {
  return typeof item === 'number'
})

document.body.innerHTML += `<h3>${JSON.stringify(onlyNumberArray)}</h3>`

// SOME: Verifica se pelo menos 1 item satisfaz a condição

// array2.push('Teste')

document.body.innerHTML += `<h1>Some</h1>`

const thatItemNotNumber = array2.some(item => {
  return typeof item !== 'number'
})

document.body.innerHTML += `<h3>${JSON.stringify(thatItemNotNumber)}</h3>`

// FIND: encontrar um item no Array, pega o primeiro item que satisfaz a condição, 
// se falso para todos retorna undefined
document.body.innerHTML += `<h1>Find</h1>`

const par = array2.find(item => item % 2 === 0)

document.body.innerHTML += `<h3>${JSON.stringify(par)}</h3>`

// FINDINDEX: igual ao find, mas retorna o índice do item, não o valor
document.body.innerHTML += `<h1>FindIndex</h1>`

const parIndex = array2.findIndex(item => item % 2 === 0)

document.body.innerHTML += `<h3>${JSON.stringify(parIndex)}</h3>`

// REDUCE: Criar algo novo com um Array
document.body.innerHTML += `<h1>Reduce</h1>`

const sum = array2.reduce((acc, item) => {
  return acc + item
}, 0)// valor inicial dessa nova estrutura de dados

document.body.innerHTML += `<h3>${sum}</h3>`
