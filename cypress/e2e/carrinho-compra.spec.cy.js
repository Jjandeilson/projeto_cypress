import Carrinho from "./page-object/Carrinho";
import Login from "./page-object/login";

describe("Funcionalidades do carrinho de compra", () => {
    beforeEach(() => cy.visit('https://automationexercise.com'));

    it ("Adicionando produto no carrinho", () => {
        let login = new Login();
        let carrinho = new Carrinho();

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        carrinho.BotaoProdutos.click()

        carrinho.Produto.click()
        carrinho.BotaoAdicionarProduto.click()

        cy.get('.modal-title').should('contain', 'Added!')
        cy.get('.modal-footer > .btn').click()

        carrinho.BotaoCarrinho.click()
        cy.get('#product-1').should('be.visible')
    })
    
    it ("Removendo produto no carrinho", () => {
        let login = new Login();
        let carrinho = new Carrinho();

        login.BotaoLogin.click()

        login.LoginUsuario.type('skyheart00190@gmail.com', {delay: 0})
        login.PasswordUsuario.type('teste', {delay: 0})
        login.BotaoLoginUsuario.click()

        carrinho.BotaoProdutos.click()

        carrinho.Produto.click()
        carrinho.BotaoAdicionarProduto.click()

        cy.get('.modal-title').should('contain', 'Added!')
        cy.get('.modal-footer > .btn').click()

        carrinho.BotaoCarrinho.click()
        carrinho.RemoverProduto.click()
        cy.get('#product-2 > .cart_product').should('not.exist')
    })
    
})