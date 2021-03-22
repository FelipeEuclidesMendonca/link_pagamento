const { I } = inject();

module.exports = {

  opcoes:{
    id_entrega: '#selFormaEntrega',
    id_loja: '1059'
  },

  selecionar_opcao(opcao){
    I.selectOption(this.opcoes.id_opcao, opcao)
  }
}
