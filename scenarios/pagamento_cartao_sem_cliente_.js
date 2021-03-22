
Feature('Pagamento');

Scenario('Pagamento Cartão - Sem cliente vinculado', ({ I }) => {
    I.amOnPage('/D514E58E-BEB4-42A9-A633-9AF4B445C65B');
    I.fillField('name','Felipe Mendonça');
    I.fillField('cpf','01234567890');
    I.fillField('phone','11997370379');
    I.fillField('email','felipe.mendonca@fagrontech.com.br');
    I.fillField('code','13100200');
    I.fillField('address','Avenida Imperatriz Dona Teresa Cristina');
    I.fillField('number','15');
    I.fillField('cardNumber','5318164352584551');
    I.fillField('expireDate','01/25');
    I.fillField('cvc','123');
    I.fillField('cardOwner','Felipe Mendonca');
    I.fillField('cpf2','01234567890');
    I.fillField('phone2','11997370379');
    I.fillField('birthDay','01011989');
    I.fillField('email2','felipe.mendonca@fagrontech.com.br');
    //I.click('Finalizar');
    I.waitForElement('div h1', 15); // secs

});