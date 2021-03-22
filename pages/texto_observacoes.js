const { I } = inject();

module.exports = {

  textoObserv: {
    id_observ: 'comments'
  },

  preencher_observacoes(texto){
    I.fillField(this.textoObserv.id_observ, texto)
  }
}
