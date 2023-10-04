// Exportação e importação
document.body.innerHTML += `<h1>Exportação e importação</h1>`

import { PI as valuePI, sub, sum, pow } from '../lib/math'
import mul, { div } from '../lib/mul'
import * as math from '../lib/math'

document.body.innerHTML += `<h3>${sum(2, 4)}</h3>`
document.body.innerHTML += `<h3>${sub(2, 1)}</h3>`
document.body.innerHTML += `<h3>${valuePI}</h3>`
document.body.innerHTML += `<h3>${mul(2, 5)}</h3>`
document.body.innerHTML += `<h3>${div(25, 5)}</h3>`
document.body.innerHTML += `<h3>${JSON.stringify(Object.keys(math))}</h3>`
document.body.innerHTML += `<h3>${pow(10, 10)}</h3>`