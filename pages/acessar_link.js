const { I } = inject();

module.exports = {

  abrir_navegador(url){
    I.amOnPage(url)
  }
  
}
