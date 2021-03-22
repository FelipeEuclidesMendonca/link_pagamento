const { I } = inject();

module.exports = {

  campos: {
    id_cep: 'code',
    id_endereco: 'address',
    id_numero: 'number'
  },

  preencher_cep(cep){
    I.fillField(this.campos.id_cep, cep)
  },

  preencher_endereco(endereco){
    I.fillField(this.campos.id_endereco, endereco)
  },

  preencher_numero(numero){
    I.fillField(this.campos.id_numero, numero)
  }

}
