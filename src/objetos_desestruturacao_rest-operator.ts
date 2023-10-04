// Objetos
document.body.innerHTML = `<h1>Objetos</h1>`

interface User {
  name: string
  idade: number
  address: {
    street: string
    number: number
  }
}

const user: User = {
  name: 'Valentim',
  idade: 20,
  address: {
    street: 'Rua teste',
    number: 176
  }
}

document.body.innerHTML += `<h3>${'nickname' in user}</h3>` 

document.body.innerHTML += `<h3>${Object.keys(user)}</h3>` 

document.body.innerHTML += `<h3>${Object.values(user)}</h3>` 

document.body.innerHTML += `<h3>${JSON.stringify(Object.values(user))}</h3>` 

document.body.innerHTML += `<h3>${JSON.stringify(Object.entries(user))}</h3>` 

// Desestruturação
document.body.innerHTML += `<h1>Desestruturação</h1>`

function showAge({ idade }: User) {
  return idade
}

const { address, idade: age, nickname = 'Kenny' } = user

document.body.innerHTML += `<h3>${JSON.stringify({ address, age, nickname })}</h3>` 

document.body.innerHTML += `<h3>${showAge(user)}</h3>` 

// Rest operator
document.body.innerHTML += `<h1>Rest operator</h1>`

const { name: name2, ...rest } = user

document.body.innerHTML += `<h3>${name2}</h3>` 
document.body.innerHTML += `<h3>${JSON.stringify(rest)}</h3>` 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const third = array[2]
const [first, second, , fourth, ...restArray] = array

document.body.innerHTML += `<h3>${third}</h3>` 
document.body.innerHTML += `<h3>${JSON.stringify({ first, second, fourth, restArray })}</h3>` 