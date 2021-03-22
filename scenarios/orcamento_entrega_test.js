
Feature('Orçamento');

const navegar = require('../pages/acessar_link')
const data_client = require('../pages/dados_cliente');
const observ = require('../pages/texto_observacoes')
const ender = require('../pages/inserir_endereco')
const botao = require('../pages/botao_enviar')
const aguardar = require('../pages/esperar_elemento')
const selec_opt = require('../pages/selecionar_entrega')


Scenario('Orçamento - Entrega a Domicilio', ({ I }) => {
    navegar.abrir_navegador('/');
    data_client.preencher_nome('Felipe Mendonça')
    data_client.preencher_fone('11997370379');
    data_client.preencher_email('felipe.mendonca@fagrontech.com.br');
    observ.preencher_observacoes('Gostaria de fazer um orçamento para essa fórmula: Cascara Sagrada 20mg');
    selec_opt.selecionar_opcao('1');
    ender.preencher_cep('13100200');
    ender.preencher_endereco('Avenida Imperatriz Dona Teresa Cristina');     
    ender.preencher_numero('15');   
    botao.botao_enviar('Enviar')
    aguardar.esperar_pagina(15);


});


