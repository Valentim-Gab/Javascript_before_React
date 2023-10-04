// Template Literals
document.body.innerHTML += `<h1>Template Literals</h1>`

const name4 = 'Valentim'
const message = `Bem-vindo ${name4 ?? 'visitante'}`

document.body.innerHTML += `<h3>${message}</h3>`

// Promises
document.body.innerHTML += `<h1>Promises</h1>`

const sumTwoNumbers = (a: number, b: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(a + b)
    }, 2000)
  })
}

sumTwoNumbers(3, 1).then(result => {
  document.body.innerHTML += `<h3>${result}</h3>`
}).catch(err => {
  console.error(err)
})

fetch('https://api.github.com/users/Valentim-Gab')
  .then(response => {
    return response.json()
  })
  .then(body => {
    //console.log(body)
    document.body.innerHTML += `<img src="${body.avatar_url}"></img>`
  })
// .then(response => {
//   response.json().then(body => {
//     console.log(body)
//     document.body.innerHTML += `<img src="${body.avatar_url}"></img>`
//   })
// })
  .catch(err => {
    console.error(err)
  })
  .finally(() => {
    console.log('Deu!')
  })

async function getDataInGithub() {
  try {
    const response = await fetch('https://api.github.com/users/Valentim-Gab')
    const body = await response.json()

    console.log(body)

    return body.name
  } catch (err) {
    console.error(err)
  } finally {
    console.warn('Deu Await')
  }
}

getDataInGithub().then(item => {
  document.body.innerHTML += `<h3>${item}</h3>`
})

