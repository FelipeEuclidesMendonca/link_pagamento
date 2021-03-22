const { I } = inject();

module.exports = {

  opcoes:{
    id_opcao: '#selFormaEntrega'
  },

  selecionar_opcao(opcao){
    I.selectOption(this.opcoes.id_opcao, opcao)
  }
}
