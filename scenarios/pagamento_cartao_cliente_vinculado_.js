
Feature('Pagamento');

Scenario('Pagamento Cartão - Com cliente vinculado', ({ I }) => {
    I.amOnPage('/2B5F97EC-7E39-4B8E-B537-B98C42D54B40');
    I.selectOption('#selEndereco','89550');
    I.fillField('cardNumber','5318164352584551');
    I.fillField('expireDate','01/25');
    I.fillField('cvc','123');
    I.fillField('cardOwner','Felipe Mendonca');
    I.fillField('cpf','01234567890');
    I.fillField('phone','11997370379');
    I.fillField('birthDay','01011989');
    I.fillField('email','felipe.mendonca@fagrontech.com.br');
    I.click('Finalizar');
    I.waitForElement('div h1', 15); // secs

});