import Carrinho from "./page-object/Carrinho";
import FinalizarCompra from "./page-object/FinalizarCompra";
import Login from "./page-object/Login";

describe("Funcionalidades de finalizar uma compra", () => {
    beforeEach(() => cy.visit('https://automationexercise.com'));

    it ("botão para review da compra não é exibido, quando não tem item no carrinho", () => {
        let login = new Login();
        let finalizarCompra = new FinalizarCompra();

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        finalizarCompra.BotaoCarrinho.click()
        cy.get('#empty_cart').should('be.visible')
    })
    
    it ("Finalziar compra", () => {
        let login = new Login();
        let carrinho = new Carrinho();
        let finalizarCompra = new FinalizarCompra();

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        // adicionar produto
        carrinho.BotaoProdutos.click()
        carrinho.Produto.click()
        carrinho.BotaoAdicionarProduto.click()
        cy.get('.modal-footer > .btn').click()

        // carrinho de compra
        finalizarCompra.BotaoCarrinho.click()
        finalizarCompra.BotaoCheckout.click()
        finalizarCompra.BotaoFinalizarCheckout.click()

        // finalizar compra
        finalizarCompra.NomeUsuarioCartao.type('Skyheart', {delay: 0})
        finalizarCompra.NumeroCartao.type('123456789', {delay: 0})
        finalizarCompra.CvcCartao.type('451', {delay: 0})
        finalizarCompra.MesCartao.type('09', {delay: 0})
        finalizarCompra.AnoCartao.type('2023', {delay: 0})
        finalizarCompra.BataoFinailizarCompra.click()

        cy.get('[data-qa="order-placed"] > b').should('be.visible')
    })
})