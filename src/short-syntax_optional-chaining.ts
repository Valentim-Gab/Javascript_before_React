// Short Syntax
document.body.innerHTML += `<h1>Short Syntax</h1>`

const name3 = 'Diego'
const age3 = 27 

const user3 = {
  name3,
  age3
}

document.body.innerHTML += `<h3>${JSON.stringify(user3)}</h3>`

// Optional Chaining
document.body.innerHTML += `<h1>Optional Chaining</h1>`

const user4 = {
  name: 'Valentim',
  idade: 20,
  address: {
    street: 'Rua teste',
    number: 176,
    // zip: {
    //   code: '983253',
    //   city: 'Rio do Sul'
    // }
    showFullAddress() {
      return 'ok'
    }
  },
}

document.body.innerHTML += `<h3>${user4.address?.zip?.code ?? 'Não informado'}</h3>`
document.body.innerHTML += `<h3>${user4.address?.showFullAddress?.() ?? 'Não existe'}</h3>`

const key = 'state'

document.body.innerHTML += `<h3>${user4.address[key] ?? 'Propriedade não encontrada'}</h3>`