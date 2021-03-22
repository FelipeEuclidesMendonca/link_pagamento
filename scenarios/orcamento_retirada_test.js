Feature('Orçamento');


const navegar = require('../pages/acessar_link')
const data_client = require('../pages/dados_cliente');
const observ = require('../pages/texto_observacoes')
const botao = require('../pages/botao_enviar')
const aguardar = require('../pages/esperar_elemento')


Scenario('Orçamento - Retirar na loja', ({ I }) => {
    navegar.abrir_navegador('/');
    data_client.preencher_nome('Felipe Mendonça');
    data_client.preencher_fone('11997370379');
    data_client.preencher_email('felipe.mendonca@fagrontech.com.br');
    observ.preencher_observacoes('Gostaria de fazer um orçamento para essa fórmula: Cascara Sagrada 20mg');
    I.selectOption('#selFormaEntrega','0');
    I.selectOption('#selEnderecoRetirada','1059');
    botao.botao_enviar('Enviar');
    aguardar.esperar_pagina(15);
});

