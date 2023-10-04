//Nullish Coalesing Operador
document.body.innerHTML += `<h1>Nullish Coalesing Operador</h1>`

const age2 = 0

document.body.innerHTML = `<h1>Sua idade é: ${age2 ?? 'Não informado'}</h1>` 