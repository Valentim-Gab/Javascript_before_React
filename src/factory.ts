function fabricarPessoa(nome: string, sobrenome: string) {
  let pessoa: any = {}
  pessoa.nome = nome
  pessoa.sobrenome = sobrenome

  function nomeCompleto() {
      return `${pessoa.nome} ${pessoa.sobrenome}` 
  }

  pessoa.nomeCompleto = nomeCompleto

  return pessoa
}

let pessoaA = fabricarPessoa('Michel', 'Silva')

pessoaA.nomeCompleto()
// 'Michel Silva'