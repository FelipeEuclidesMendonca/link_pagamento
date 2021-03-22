const { I } = inject();

module.exports = {

  campos: {
    id_name: 'name',
    id_phone: 'phone',
    id_email: 'email'

   },

   preencher_nome(nome){
     I.fillField(this.campos.id_name, nome)
   },

   preencher_fone(fone){
     I.fillField(this.campos.id_phone, fone)
   },

   preencher_email(email){
     I.fillField(this.campos.id_email, email)
   }

}
