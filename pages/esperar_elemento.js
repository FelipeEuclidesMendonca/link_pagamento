const { I } = inject();

module.exports = {

  identificador:{
    id_pagina: 'div h1'
  },

  esperar_pagina(tempo){
    I.waitForElement(this.identificador.id_pagina, tempo)
  }
}
