const { I } = inject();

module.exports = {
  
  botao_enviar(nome_botao){
    I.click(nome_botao)
  }
}
